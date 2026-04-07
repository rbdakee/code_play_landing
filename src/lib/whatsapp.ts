import { WHATSAPP_NUMBER } from "./constants";

const TRIAL_LESSON_MESSAGE = "Хочу записать ребёнка на бесплатный пробный урок";

/**
 * Builds WhatsApp Web URL with prefilled message.
 * Opens https://wa.me/PHONE?text=MESSAGE in browser.
 */
export function getWhatsAppUrl(): string {
  const encodedMessage = encodeURIComponent(TRIAL_LESSON_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Builds WhatsApp Web URL with custom message.
 * Use for special CTA variants if needed in future.
 */
export function getWhatsAppUrlWithMessage(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Returns the trial lesson message text.
 * Useful for button labels or microcopy.
 */
export function getTrialLessonMessage(): string {
  return TRIAL_LESSON_MESSAGE;
}
