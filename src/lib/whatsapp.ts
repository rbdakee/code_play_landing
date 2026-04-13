import { content as ruContent } from "@/content/ru";
import { WHATSAPP_NUMBER } from "./constants";

/**
 * Builds WhatsApp Web URL with prefilled message.
 * Opens https://wa.me/PHONE?text=MESSAGE in browser.
 */
export function getWhatsAppUrl(
  message: string = ruContent.whatsapp.trialLessonMessage
): string {
  const encodedMessage = encodeURIComponent(message);
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
  return ruContent.whatsapp.trialLessonMessage;
}
