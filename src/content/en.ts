import { CourseCard, BenefitCard, TrialStep, Case, Review, FaqItem } from "@/types";

export const content = {
  // Header & Meta
  siteName: "Code Play",
  siteDescription: "One-on-one online programming courses for children aged 7-16",
  slogan: "Code Play — programming for kids 1:1",
  header: {
    ctaText: "Get trial",
    logoAlt: "Code Play",
  },
  whatsapp: {
    trialLessonMessage: "Hello! I would like to book a free trial lesson for my child",
  },

  // ============ HERO SECTION ============
  hero: {
    courseBadges: ["Scratch", "Roblox Studio", "Python"],
    heading: "Individual Programming education for Kids",
    headingPrefix: "We teach",
    headingSuffix: "for kids aged 7–16",
    subheading:
      "Scratch, Roblox, and Python with a mentor. Assessment and a step-by-step plan for parents from the very first lesson.",
    featureBadges: ["One-on-one", "7-16 years", "Online"],
    ctaText: "Get a free trial lesson",
    ctaSubtext: "Limited spots available.",
    viewCoursesText: "View courses",
    courseDescriptions: [
      "Visual coding — the perfect starting point",
      "Create your own games and mechanics",
      "Learn real programming fundamentals",
    ],
    trustBadges: [
      "One-on-one format",
      "A mentor matched to your child's personality",
      "Parent report after each lesson",
      "Online from any country",
    ],
  },

  // ============ WHY US SECTION ============
  whyUs: {
    heading: "Why Parents Choose Code Play",
    description: "The most important things, briefly:",
    benefits: [
      {
        id: "individual-format",
        heading: "Individual Format",
        description:
          "Lessons are one-on-one. The pace and program are tailored to your child.",
      },
      {
        id: "mentor-not-teacher",
        heading: "Not Just a Teacher, but a Mentor",
        description:
          "We help with programming while keeping your child's interest alive.",
      },
      {
        id: "parent-feedback",
        heading: "Detailed Feedback for Parents",
        description:
          "After each lesson, parents receive a clear follow-up: what was done and what comes next.",
      },
      {
        id: "learning-through-interest",
        heading: "Learning Through Your Child's Interests",
        description:
          "We teach through practice and what genuinely interests your child.",
      },
      {
        id: "free-trial",
        heading: "Free Trial Lesson with Full Assessment",
        description:
          "In the first lesson, we help identify the most suitable direction.",
      },
      {
        id: "online-for-expats",
        heading: "Convenient for Families Abroad",
        description:
          "A comfortable online format for families living abroad.",
      },
    ] as BenefitCard[],
  },

  // ============ COURSES SECTION ============
  courses: {
    heading: "Choose the Right Track",
    subheading: "We will recommend a course based on your child's age, interests, and level.",
    childLabel: "Your child will:",
    list: [
      {
        id: "scratch",
        ageRange: "7-10 years",
        heading: "Scratch for Children Aged 7-10",
        description:
          "A gentle introduction to programming through animation and first projects.",
        features: [
          "creates animations",
          "builds interactive stories",
          "learns step-by-step and logical thinking",
          "makes their first original projects",
        ],
        ctaText: "Get a free trial lesson",
      },
      {
        id: "roblox",
        ageRange: "9-16 years",
        heading: "Roblox Studio for Children Aged 9-16",
        description:
          "For children who are excited to create their own games and mechanics.",
        features: [
          "creates their own game worlds",
          "understands how game logic works",
          "builds first game projects",
          "turns interest in Roblox into a useful skill",
        ],
        ctaText: "Get a free trial lesson",
      },
      {
        id: "python",
        ageRange: "12-16 years",
        heading: "Python for Children Aged 12-16",
        description:
          "A first serious programming language for teens: logic, structure, and practice.",
        features: [
          "writes first programs",
          "learns the basics of logic and algorithms",
          "solves practical tasks",
          "builds a strong foundation for future growth",
        ],
        ctaText: "Get a free trial lesson",
      },
    ] as CourseCard[],
  },

  // ============ TRIAL LESSON SECTION ============
  trialLesson: {
    heading: "How the Free Trial Lesson Works",
    subheading: "The trial lesson lasts 40-50 minutes. At the end, we provide feedback for the parent.",
    steps: [
      {
        number: 1,
        title: "Introduction",
        description: "We get to know each other and define the goals.",
      },
      {
        number: 2,
        title: "Full Assessment",
        description: "We choose the right format and course.",
      },
      {
        number: 3,
        title: "First Mini Project",
        description:
          "Your child creates a first mini project in the selected track.",
      },
      {
        number: 4,
        title: "Feedback for Parents",
        description:
          "We summarize the lesson and share recommendations for the next step.",
      },
    ] as TrialStep[],
    ctaText: "Get a free trial lesson",
  },

  // ============ VALUE SECTION ============
  value: {
    heading: "What the Family Gets",
    forChild: {
      title: "For the Child",
      items: [
        "an engaging format without overload from theory",
        "first projects from the very first lesson",
        "development of logic and algorithmic thinking",
        "one-on-one mentor support",
        'the feeling of "I can do this"',
      ],
    },
    forParent: {
      title: "For the Parent",
      items: [
        "understanding whether the chosen track fits your child",
        "full assessment during the trial lesson",
        "an individually selected program",
        "full feedback after every lesson",
        "clear visibility into your child's progress",
      ],
    },
  },

  // ============ ONE-ON-ONE SECTION ============
  oneOnOne: {
    heading: "Why 1:1 Works Better",
    description:
      "In a one-on-one format, a child does not get lost in a group and receives the mentor's full attention in every lesson.",
    considerations: [
      "learning pace",
      "the child's interests",
      "confidence or shyness",
      "fatigue",
      "engagement",
      "reaction to the material",
    ],
    conclusionText:
      "This helps the child move forward steadily and comfortably.",
    followUpTitle: "After the lesson, the parent receives a follow-up",
    followUpItems: [
      "what was studied",
      "what worked well",
      "how the child felt",
      "what pace they are moving at",
      "what to pay attention to next",
    ],
  },

  // ============ CASES SECTION ============
  cases: {
    heading: "What Children Already Create at Code Play",
    description: "Short student stories",
    resultLabel: "Result",
    list: [
      {
        id: "case-roblox",
        title: "The Child Only Wanted to Play Roblox",
        story:
          "At first, the child only played games. During lessons, they started creating their own game elements and built a first project.",
        result: "interest in games turned into interest in creating",
      },
      {
        id: "case-scratch",
        title: "The Child Needed a Gentle Start in Programming",
        story:
          "The child got tired quickly from standard formats. Through Scratch, they became engaged in learning and started making their own projects.",
        result: "interest in learning and understanding of basic logic appeared",
      },
      {
        id: "case-python",
        title: "The Teen Wanted Something More Serious Than Just Games",
        story:
          "There was an interest in IT, but no starting point. In the trial lesson, the teen wrote their first Python program.",
        result: "a foundation and confidence to continue in IT appeared",
      },
      {
        id: "case-expat",
        title: "The Parent Wanted to Give Their Child a Useful Environment",
        story:
          "A family living abroad needed a useful Russian-speaking format. The child became engaged in lessons and attended regularly.",
        result: "the child got a meaningful format, and the parent got transparency",
      },
    ] as Case[],
  },

  // ============ REVIEWS SECTION ============
  reviews: {
    heading: "What Parents Say",
    description: "Reviews from families already learning with Code Play",
    list: [
      {
        id: "review-1",
        quote:
          "My child looked forward to the lessons and happily showed their projects. After each lesson, I could clearly see the progress.",
        author: "Misha's Mom",
        country: "USA",
      },
      {
        id: "review-2",
        quote:
          "I love that this is not a conveyor-belt school but a truly individual approach. The mentor connected with my child very quickly.",
        author: "Sasha's Dad",
        country: "Spain",
      },
      {
        id: "review-3",
        quote:
          "My son used to only play games, and now he wants to create his own projects.",
        author: "Dmitry's Parent",
        country: "Germany",
      },
      {
        id: "review-4",
        quote:
          "The trial lesson helped us understand which direction would fit best. It felt calm and professional.",
        author: "Nastya's Mom",
        country: "Canada",
      },
      {
        id: "review-5",
        quote:
          "After moving abroad, it was important for us to find a clear online format in Russian. Here, our child got engaged very well.",
        author: "Lena's Mom and Dad",
        country: "Netherlands",
      },
      {
        id: "review-6",
        quote:
          "The mentor is very attentive to the child. After each lesson, we get a clear report and a next step.",
        author: "Marat's Dad",
        country: "England",
      },
    ] as Review[],
  },

  // ============ HOW LESSONS WORK SECTION ============
  howLessonsWork: {
    heading: "How the Lessons Work",
    description: "Everything important before you start",
    details: [
      "Online",
      "One-on-one format with a mentor",
      "Lesson duration: 40-50 minutes",
      "Course and pace tailored to the child",
      "Suitable for any level",
      "A laptop is required",
      "We help with software setup in advance",
    ],
    additionalText: "We will explain the organizational details in WhatsApp after your request.",
  },

  // ============ STATS SECTION ============
  stats: {
    heading: "Code Play in Numbers",
    description: "Numbers that reflect scale and trust",
    chartLabel: "Engagement growth",
    individualFormatTitle: "Individual Format",
    individualFormatDescription: "All lessons are one-on-one",
    list: [
      { label: "years of teaching children programming", value: "[5]+" },
      { label: "children taught", value: "[500]+" },
      { label: "countries where our students live", value: "[15]+" },
      { label: "cities where children study with us", value: "[30]+" },
      { label: "one-on-one format", value: "100%" },
    ],
  },

  // ============ SCARCITY SECTION ============
  scarcity: {
    heading: "Why It's Better to Apply Now",
    description:
      "We work in a one-on-one format, so the number of spots is limited. It's better to leave your request in advance.",
    ctaText: "Get a free trial lesson",
  },

  // ============ FAQ SECTION ============
  faq: {
    heading: "Frequently Asked Questions",
    description: "Short answers to common questions",
    list: [
      {
        id: "faq-1",
        question: "Is this course suitable if my child has never learned programming before?",
        answer:
          "Yes. We will recommend a program based on your child's age and level. During the trial lesson, we will determine the best starting point.",
      },
      {
        id: "faq-2",
        question: "What is better to choose: Scratch, Roblox, or Python?",
        answer:
          "It depends on age and interests. During the trial lesson, we will help choose the best option.",
      },
      {
        id: "faq-3",
        question: "Is the trial lesson really free?",
        answer: "Yes. The trial lesson is free and lasts 40-50 minutes.",
      },
      {
        id: "faq-4",
        question: "Does a parent need to attend?",
        answer:
          "Yes, it is better for a parent to attend the trial lesson so they can receive recommendations for further learning.",
      },
      {
        id: "faq-5",
        question: "Are these group lessons?",
        answer: "No. At Code Play, lessons are only individual, one-on-one with a mentor.",
      },
      {
        id: "faq-6",
        question: "What is needed for the lessons?",
        answer: "A laptop and internet connection are required. We will explain everything else before the trial lesson.",
      },
      {
        id: "faq-7",
        question: "What happens after the trial lesson?",
        answer:
          "We provide feedback and suggest an individual plan for the next lessons.",
      },
      {
        id: "faq-8",
        question: "Do you only work with children from CIS countries?",
        answer:
          "No. We work with Russian-speaking families living in the USA, Europe, and other countries.",
      },
    ] as FaqItem[],
  },

  // ============ FINAL CTA SECTION ============
  finalCta: {
    heading: "Book a Free Trial Lesson for Your Child",
    subheading:
      "Let's get acquainted, run a full assessment, and choose the right direction.",
    ctaText: "Get a free trial lesson",
    ctaSubtext: "Mentor slots are limited.",
  },

  // ============ FOOTER ============
  footer: {
    companyName: "Code Play",
    companyDescription: "One-on-one online programming courses for children aged 7-16",
    infoHeading: "Information",
    contactsHeading: "Contacts",
    links: {
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      dataProcessing: "Consent to Data Processing",
    },
    social: {
      whatsapp: "WhatsApp",
      telegram: "@codeplay_school",
      instagram: "@codeplay.school",
    },
    languageToggle: {
      ru: "Russian",
      en: "English",
    },
    copyright: "© 2026 Code Play. All rights reserved.",
  },
};
