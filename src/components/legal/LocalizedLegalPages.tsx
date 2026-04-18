"use client";

import { useLanguage } from "@/lib/i18n";
import { INSTAGRAM_HANDLE, TELEGRAM_HANDLE, WHATSAPP_DISPLAY } from "@/lib/constants";
import { LegalDocument, LegalList, LegalSection } from "./LegalDocument";

type Section = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type DocContent = {
  title: string;
  updatedAt: string;
  sections: Section[];
};

function LocalizedDocument({ content }: { content: Record<"ru" | "en", DocContent> }) {
  const { locale } = useLanguage();
  const doc = content[locale];

  return (
    <LegalDocument title={doc.title} updatedAt={doc.updatedAt}>
      {doc.sections.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.items ? <LegalList items={section.items} /> : null}
        </LegalSection>
      ))}
    </LegalDocument>
  );
}

const contactItems = [
  `WhatsApp: ${WHATSAPP_DISPLAY}`,
  `Telegram: ${TELEGRAM_HANDLE}`,
  `Instagram: ${INSTAGRAM_HANDLE}`,
];

const privacyContent: Record<"ru" | "en", DocContent> = {
  ru: {
    title: "Политика конфиденциальности",
    updatedAt: "14 апреля 2026 года",
    sections: [
      {
        title: "1. Общие положения",
        paragraphs: [
          "Настоящая Политика конфиденциальности описывает, как сайт Play In Code обрабатывает информацию пользователей при посещении сайта и при обращении за консультацией или записью на пробный урок.",
          "Сайт Play In Code предназначен для информирования родителей и законных представителей о курсах программирования для детей в возрасте от 7 до 16 лет.",
        ],
      },
      {
        title: "2. Кто обрабатывает данные",
        paragraphs: [
          "Оператором данных в рамках настоящей Политики является администрация проекта Play In Code.",
          "Поскольку на сайте не указаны отдельные реквизиты юридического лица или индивидуального предпринимателя, в настоящем документе используется обозначение \"Play In Code\" или \"администрация сайта\".",
        ],
      },
      {
        title: "3. Какие данные могут обрабатываться",
        items: [
          "технические данные о посещении сайта: IP-адрес, тип устройства, тип браузера, язык браузера, дата и время посещения, сведения о переходах и страницах;",
          "данные, которые вы самостоятельно передаёте при обращении через WhatsApp или иные каналы связи;",
          "сведения, которые могут содержаться в вашем сообщении: имя родителя, имя ребёнка, возраст ребёнка, интерес к курсу, предпочтительное время связи и иные данные, которые вы сообщите добровольно.",
        ],
        paragraphs: [
          "Сайт не содержит встроенной формы регистрации или отдельной формы заявки. Основной способ связи, реализованный в текущей версии сайта, это переход пользователя в WhatsApp по ссылке с заранее подготовленным текстом сообщения.",
        ],
      },
      {
        title: "4. Цели обработки данных",
        items: [
          "ответа на ваши обращения;",
          "записи на пробный урок;",
          "подбора подходящего курса по возрасту и интересам ребёнка;",
          "согласования времени занятий или консультации;",
          "улучшения качества сайта, структуры страниц и содержания материалов;",
          "обеспечения безопасности и стабильной работы сайта.",
        ],
      },
      {
        title: "5. Передача данных третьим лицам",
        paragraphs: [
          "Play In Code не продаёт и не передаёт персональные данные третьим лицам для их самостоятельного маркетинга.",
          "При этом данные могут быть доступны или передаваться техническим подрядчикам и хостинг-провайдерам, сервисам связи и обмена сообщениями, которые вы используете для обращения, включая WhatsApp, а также государственным органам в случаях, предусмотренных законом.",
          "При переходе по ссылке в WhatsApp дальнейшая обработка данных может осуществляться соответствующим сервисом по его собственным правилам конфиденциальности.",
        ],
      },
      {
        title: "6. Cookies и технические технологии",
        paragraphs: [
          "В текущей версии сайта не обнаружено явного подключения аналитических или рекламных счётчиков в коде сайта.",
          "При этом сайт и используемая инфраструктура могут применять технические cookies или аналогичные технологии, необходимые для корректной загрузки страниц, безопасности и стабильной работы хостинга.",
        ],
      },
      {
        title: "7. Данные детей",
        paragraphs: [
          "Сайт посвящён обучению детей, однако основное взаимодействие предполагается со стороны родителей или иных законных представителей.",
          "Play In Code просит не передавать персональные данные ребёнка в объёме, превышающем разумно необходимый для подбора курса или записи на пробный урок.",
        ],
      },
      {
        title: "8. Права пользователя",
        items: [
          "запросить сведения о том, какие данные о вас обрабатываются;",
          "потребовать исправления неточных данных;",
          "потребовать удаления данных, если отсутствуют основания для их дальнейшей обработки;",
          "ограничить обработку данных в предусмотренных законом случаях;",
          "отозвать согласие, если обработка основана на согласии.",
        ],
      },
      {
        title: "9. Контакты",
        items: contactItems,
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updatedAt: "April 14, 2026",
    sections: [
      {
        title: "1. General Provisions",
        paragraphs: [
          "This Privacy Policy describes how the Play In Code website processes user information when visiting the site and when requesting a consultation or booking a trial lesson.",
          "The Play In Code website is intended to inform parents and legal guardians about programming courses for children aged 7 to 16.",
        ],
      },
      {
        title: "2. Who Processes the Data",
        paragraphs: [
          "The data controller under this Policy is the administration of the Play In Code project.",
          "Since the website does not currently list the separate legal details of a company or sole proprietor, this document uses the designation \"Play In Code\" or \"site administration\".",
        ],
      },
      {
        title: "3. What Data May Be Processed",
        items: [
          "technical visit data such as IP address, device type, browser type, browser language, date and time of visit, and information about visited pages;",
          "data you voluntarily provide when contacting us through WhatsApp or other communication channels;",
          "information contained in your message, such as parent name, child name, child age, course interests, preferred contact time, and any other data you choose to share.",
        ],
        paragraphs: [
          "The current version of the website does not include a built-in registration form or a separate lead form. The main contact flow implemented on the site is a user-initiated redirect to WhatsApp with a pre-filled message.",
        ],
      },
      {
        title: "4. Purposes of Data Processing",
        items: [
          "responding to your inquiries;",
          "booking a trial lesson;",
          "selecting a suitable course based on the child's age and interests;",
          "coordinating lesson times or consultations;",
          "improving the quality, structure, and content of the website;",
          "ensuring the security and stability of the website.",
        ],
      },
      {
        title: "5. Sharing Data with Third Parties",
        paragraphs: [
          "Play In Code does not sell or transfer personal data to third parties for their independent marketing purposes.",
          "However, data may be accessible to technical contractors, hosting providers, communication services and messengers used to contact us, including WhatsApp, and public authorities where required by law.",
          "When you follow a WhatsApp link, further processing may be carried out by that service under its own privacy rules.",
        ],
      },
      {
        title: "6. Cookies and Technical Technologies",
        paragraphs: [
          "In the current version of the website, no explicit analytics or advertising trackers were found in the codebase.",
          "At the same time, the website and the underlying infrastructure may use technical cookies or similar technologies required for proper page delivery, security, and stable hosting operations.",
        ],
      },
      {
        title: "7. Children's Data",
        paragraphs: [
          "The website is dedicated to children's education, but primary interaction is expected from parents or other legal representatives.",
          "Play In Code asks users not to provide a child's personal data beyond what is reasonably necessary to select a course or arrange a trial lesson.",
        ],
      },
      {
        title: "8. User Rights",
        items: [
          "request information about what personal data is being processed;",
          "request correction of inaccurate data;",
          "request deletion of data where there is no valid basis for further processing;",
          "request restriction of processing where permitted by law;",
          "withdraw consent where processing is based on consent.",
        ],
      },
      {
        title: "9. Contacts",
        items: contactItems,
      },
    ],
  },
};

const termsContent: Record<"ru" | "en", DocContent> = {
  ru: {
    title: "Условия использования сайта",
    updatedAt: "14 апреля 2026 года",
    sections: [
      {
        title: "1. Общие положения",
        paragraphs: [
          "Настоящие Условия использования регулируют порядок использования сайта Play In Code, размещённого в сети Интернет, а также материалов и информации, опубликованных на нём.",
          "Используя сайт, вы подтверждаете, что ознакомились с настоящими Условиями и принимаете их в полном объёме.",
        ],
      },
      {
        title: "2. Назначение сайта",
        paragraphs: ["Сайт Play In Code носит информационный характер и предназначен для:"],
        items: [
          "ознакомления с программами обучения программированию для детей;",
          "получения информации о пробном уроке;",
          "связи с администрацией проекта через указанные каналы связи;",
          "предварительного подбора подходящего направления обучения.",
        ],
      },
      {
        title: "3. Ограничения использования",
        paragraphs: ["При использовании сайта запрещается:"],
        items: [
          "нарушать применимое законодательство;",
          "пытаться получить несанкционированный доступ к сайту, его инфраструктуре или данным;",
          "использовать сайт для распространения вредоносного кода, спама или мошеннических сообщений;",
          "использовать материалы сайта способом, нарушающим права Play In Code или третьих лиц.",
        ],
      },
      {
        title: "4. Интеллектуальная собственность",
        paragraphs: [
          "Все тексты, изображения, логотипы, элементы дизайна, структура сайта и иные материалы, размещённые на сайте, принадлежат Play In Code либо используются на законных основаниях.",
          "Без предварительного письменного согласия администрации сайта запрещается копировать, перерабатывать или распространять материалы сайта в коммерческих целях.",
        ],
      },
      {
        title: "5. Ограничение ответственности",
        items: [
          "временную недоступность сайта;",
          "перебои в работе внешних сервисов, включая мессенджеры;",
          "действия третьих лиц;",
          "решения, принятые пользователем на основании информации сайта без дополнительной консультации.",
        ],
      },
      {
        title: "6. Изменение условий",
        paragraphs: [
          "Play In Code вправе в любое время изменять настоящие Условия использования. Актуальная версия вступает в силу с момента публикации на сайте или в документах проекта.",
        ],
      },
      {
        title: "7. Контакты",
        items: contactItems,
      },
    ],
  },
  en: {
    title: "Terms of Use",
    updatedAt: "April 14, 2026",
    sections: [
      {
        title: "1. General Provisions",
        paragraphs: [
          "These Terms of Use govern the use of the Play In Code website and the materials and information published on it.",
          "By using the website, you confirm that you have read and accepted these Terms in full.",
        ],
      },
      {
        title: "2. Purpose of the Website",
        paragraphs: ["The Play In Code website is intended for:"],
        items: [
          "learning about children's programming courses;",
          "getting information about a trial lesson;",
          "contacting the project administration through the listed communication channels;",
          "preliminary selection of a suitable learning track.",
        ],
      },
      {
        title: "3. Restrictions on Use",
        paragraphs: ["When using the website, you may not:"],
        items: [
          "violate applicable law;",
          "attempt to gain unauthorized access to the website, its infrastructure, or data;",
          "use the website to distribute malicious code, spam, or fraudulent messages;",
          "use website materials in a way that infringes the rights of Play In Code or third parties.",
        ],
      },
      {
        title: "4. Intellectual Property",
        paragraphs: [
          "All texts, images, logos, design elements, website structure, and other materials published on the website belong to Play In Code or are used on a lawful basis.",
          "Without prior written permission from the site administration, you may not copy, adapt, or distribute website materials for commercial purposes.",
        ],
      },
      {
        title: "5. Limitation of Liability",
        items: [
          "temporary unavailability of the website;",
          "interruptions in third-party services, including messengers;",
          "actions of third parties;",
          "decisions made by users based solely on website information without additional consultation.",
        ],
      },
      {
        title: "6. Changes to the Terms",
        paragraphs: [
          "Play In Code may update these Terms of Use at any time. The current version takes effect from the moment it is published on the website or in the project documents.",
        ],
      },
      {
        title: "7. Contacts",
        items: contactItems,
      },
    ],
  },
};

const consentContent: Record<"ru" | "en", DocContent> = {
  ru: {
    title: "Согласие на обработку персональных данных",
    updatedAt: "14 апреля 2026 года",
    sections: [
      {
        title: "1. На что распространяется согласие",
        paragraphs: [
          "Оставляя обращение через доступные каналы связи Play In Code, включая переход по ссылке в WhatsApp, отправку сообщения в мессенджере или иное добровольное предоставление своих данных, пользователь выражает согласие на обработку персональных данных на условиях, изложенных ниже.",
        ],
      },
      {
        title: "2. Какие данные могут обрабатываться",
        items: [
          "имя и иные идентифицирующие сведения;",
          "номер телефона;",
          "имя ребёнка;",
          "возраст ребёнка;",
          "сведения об интересах ребёнка, целях обучения и предпочтительном формате занятий;",
          "сведения о времени и способе связи;",
          "иные данные, содержащиеся в сообщениях пользователя.",
        ],
      },
      {
        title: "3. Цели обработки",
        items: [
          "связи с пользователем по его запросу;",
          "записи ребёнка на пробный урок;",
          "подбора подходящей программы обучения;",
          "согласования расписания и организационных деталей;",
          "ведения истории обращений;",
          "улучшения качества сервиса и коммуникации.",
        ],
      },
      {
        title: "4. Действия с данными",
        paragraphs: ["Play In Code вправе осуществлять с персональными данными:"],
        items: [
          "сбор, запись и систематизацию;",
          "накопление и хранение;",
          "уточнение и обновление;",
          "использование;",
          "обезличивание, блокирование, удаление и уничтожение.",
        ],
      },
      {
        title: "5. Передача и срок действия согласия",
        paragraphs: [
          "Данные могут быть доступны техническим подрядчикам, сервисам связи и мессенджерам, через которые пользователь самостоятельно обращается к Play In Code, а также государственным органам в случаях, предусмотренных законом.",
          "Согласие действует с момента предоставления данных и сохраняет силу до достижения целей обработки либо до момента его отзыва, если иное не требуется по закону.",
        ],
      },
      {
        title: "6. Отзыв согласия",
        paragraphs: [
          "Пользователь может отозвать согласие, направив сообщение через доступные контактные каналы Play In Code.",
        ],
      },
      {
        title: "7. Контакты",
        items: contactItems,
      },
    ],
  },
  en: {
    title: "Consent to Personal Data Processing",
    updatedAt: "April 14, 2026",
    sections: [
      {
        title: "1. Scope of Consent",
        paragraphs: [
          "By contacting Play In Code through the available communication channels, including following a WhatsApp link, sending a message in a messenger, or otherwise voluntarily providing personal information, the user gives consent to the processing of personal data under the terms set out below.",
        ],
      },
      {
        title: "2. What Data May Be Processed",
        items: [
          "name and other identifying details;",
          "phone number;",
          "child's name;",
          "child's age;",
          "information about the child's interests, learning goals, and preferred lesson format;",
          "preferred contact time and communication method;",
          "other information contained in the user's messages.",
        ],
      },
      {
        title: "3. Purposes of Processing",
        items: [
          "contacting the user in response to their request;",
          "booking a trial lesson;",
          "selecting a suitable learning program;",
          "coordinating scheduling and organizational details;",
          "maintaining communication history;",
          "improving service quality and communication.",
        ],
      },
      {
        title: "4. Data Processing Actions",
        paragraphs: ["Play In Code may perform the following actions with personal data:"],
        items: [
          "collection, recording, and systematization;",
          "storage and retention;",
          "clarification and updating;",
          "use;",
          "anonymization, blocking, deletion, and destruction.",
        ],
      },
      {
        title: "5. Transfers and Duration of Consent",
        paragraphs: [
          "Data may be accessible to technical contractors, communication services and messengers used by the user to contact Play In Code, and public authorities where required by law.",
          "This consent takes effect from the moment the data is provided and remains valid until the purposes of processing are achieved or until the consent is withdrawn, unless otherwise required by law.",
        ],
      },
      {
        title: "6. Withdrawal of Consent",
        paragraphs: [
          "The user may withdraw consent by sending a message through the available Play In Code contact channels.",
        ],
      },
      {
        title: "7. Contacts",
        items: contactItems,
      },
    ],
  },
};

export function LocalizedPrivacyPolicy() {
  return <LocalizedDocument content={privacyContent} />;
}

export function LocalizedTerms() {
  return <LocalizedDocument content={termsContent} />;
}

export function LocalizedConsent() {
  return <LocalizedDocument content={consentContent} />;
}
