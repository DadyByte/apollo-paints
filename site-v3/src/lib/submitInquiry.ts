/**
 * Sends an enquiry to sales@apollopaintsglobal.com via FormSubmit.
 *
 * Mirrors the proven configuration from site-v2/inquiry.html: the AJAX
 * endpoint, `_subject`, `_template: table`, `_captcha: false`, and the
 * `_honey` honeypot field.
 *
 * NOTE: FormSubmit will not forward anything until the target address has
 * been confirmed once via the activation email it sends on first POST.
 */

export const SALES_EMAIL = 'sales@apollopaintsglobal.com';
export const SALES_PHONE = '+91 74949 88779';

const ENDPOINT = `https://formsubmit.co/ajax/${SALES_EMAIL}`;

export async function submitInquiry(
  subject: string,
  fields: Record<string, string>,
): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      _honey: '',
      ...fields,
    }),
  });

  if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);
}
