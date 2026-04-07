import { getWhatsAppUrl, getWhatsAppUrlWithMessage, getTrialLessonMessage } from "../whatsapp";

describe("WhatsApp helpers", () => {
  it("should build correct WhatsApp URL with trial lesson message", () => {
    const url = getWhatsAppUrl();
    expect(url).toContain("https://wa.me/77772270088");
    expect(url).toContain("text=");
    expect(url).toContain("%D0%A5%D0%BE%D1%87%D1%83"); // "Хочу" in URL encoding
  });

  it("should build WhatsApp URL with custom message", () => {
    const customMsg = "Привет, это тестовое сообщение";
    const url = getWhatsAppUrlWithMessage(customMsg);
    expect(url).toContain("https://wa.me/77772270088");
    expect(url).toContain(encodeURIComponent(customMsg));
  });

  it("should return trial lesson message text", () => {
    const message = getTrialLessonMessage();
    expect(message).toBe("Хочу записать ребёнка на бесплатный пробный урок");
  });
});
