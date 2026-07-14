/**
 * Direct email submission via Web3Forms.
 *
 * How it works:
 *   1. Client POSTs a JSON payload (including `access_key`) to https://api.web3forms.com/submit
 *   2. Web3Forms forwards the message as a real email to the address associated with the access key
 *      (in our case: dhruvgupta21304@gmail.com).
 *   3. Response is JSON: { success: true, message: "..." } on success.
 *
 * Notes:
 *   - No user email client involvement, no "activate this form" step per-recipient.
 *   - The access key is safe to expose in the frontend (Web3Forms is designed for this).
 *   - Free tier: 250 submissions/month.
 *   - Manage at https://web3forms.com/  (log in with the email above).
 */

/** Public access key — safe to expose in frontend bundles. */
const WEB3FORMS_ACCESS_KEY = '0d2c99ca-7c7e-4c72-ac59-fa9c81f67d97';

/** Displayed in the mailto fallback and any UI hints. Actual delivery is controlled by the access key. */
const TO_EMAIL = 'dhruvgupta21304@gmail.com';

export const isDirectEmailConfigured = true;

export type SubmissionPayload = {
  /** Subject line the recipient will see in their inbox */
  subject: string;
  /** Sender's name */
  fromName: string;
  /** Sender's email — used as reply-to */
  fromEmail: string;
  /** All additional fields to include in the email body */
  fields: Record<string, string>;
};

/**
 * Sends the payload directly to the configured recipient via Web3Forms.
 * Returns true when Web3Forms accepts and dispatches the message.
 */
export async function sendDirectEmail(payload: SubmissionPayload): Promise<boolean> {
  const endpoint = 'https://api.web3forms.com/submit';

  const body = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: payload.subject,
    from_name: payload.fromName,
    email: payload.fromEmail,
    // Custom fields flatten into the email body — Web3Forms renders them as key/value rows.
    Name: payload.fromName,
    'Reply to': payload.fromEmail,
    ...payload.fields,
    // Honeypot — real users won't fill this; bots often do.
    botcheck: '',
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    let raw = '';
    let parsed: { success?: boolean | string; message?: string } = {};
    try {
      raw = await response.text();
      parsed = raw ? JSON.parse(raw) : {};
    } catch {
      // ignore parse errors; will fall through to logging
    }

    const successFlag = String(parsed.success ?? '').toLowerCase();

    if (response.ok && successFlag === 'true') {
      return true;
    }

    console.error('[formSubmit] Web3Forms rejected the submission:', {
      status: response.status,
      statusText: response.statusText,
      body: parsed && Object.keys(parsed).length ? parsed : raw,
    });
    return false;
  } catch (err) {
    console.error('[formSubmit] Network/CORS error:', err);
    return false;
  }
}

/**
 * Fallback: opens the visitor's mail client with a prefilled email.
 * Used only if the direct-send request fails (rare — network drop, service outage).
 */
export function openMailtoFallback(subject: string, body: string): void {
  const href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}
