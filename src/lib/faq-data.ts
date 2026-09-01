export interface FAQItem {
  readonly question: string;
  readonly answer: readonly string[];
  readonly slug: string;
}

export interface FAQCategory {
  readonly title: string;
  readonly slug: string;
  readonly items: readonly FAQItem[];
}

export const FAQ_DATA: readonly FAQCategory[] = [
  {
    title: "The Methodology",
    slug: "methodology",
    items: [
      {
        question: "What is Marry Like a CEO?",
        answer: [
          "Marry Like a CEO is a methodology for ambitious women who want marriage - and who are willing to approach it with the same strategic intelligence they already bring to every other area of their lives. The same frameworks that build successful companies - clarity, standards, decision-making, selection - applied to choosing a life partner. Not as a metaphor. As a method.",
        ],
        slug: "what-is-marry-like-a-ceo",
      },
      {
        question:
          "How is this different from dating coaching or relationship therapy?",
        answer: [
          "Most dating coaches give you behaviors: what to text, when to respond, how to \u201Cplay\u201D the dynamic. Most therapists work on what\u2019s wrong inside you. I do neither.",
          "I shift who you are at the level of identity - so the right relationship stops being something you chase and becomes something you select.",
        ],
        slug: "different-from-dating-coaching",
      },
      {
        question: "Isn\u2019t love supposed to be a feeling, not a strategy?",
        answer: [
          "Love is a feeling. Marriage is a decision.",
          "The women I work with don\u2019t reject feeling - they refuse to let it run the whole show. You don\u2019t relax your way into a business deal. You don\u2019t relax your way into a marriage either. The skill that makes you successful in one - clarity, standards, judgment - leads to the right marriage in the other.",
        ],
        slug: "love-feeling-not-strategy",
      },
      {
        question:
          "How is this different from Steve Harvey, Tony Robbins, or Marie Forleo?",
        answer: [
          "Three voices I respect. Here\u2019s where I differ:",
          "Steve Harvey gives you rules. I build the woman who doesn\u2019t need them.\nTony Robbins gives you intensity. I give you identity.\nMarie Forleo gives you trial-and-error. I save you the trial - and the error costs years in love.",
        ],
        slug: "different-from-harvey-robbins-forleo",
      },
      {
        question: 'What do you mean by "identity shift"?',
        answer: [
          "Most coaching teaches you what to do. I teach you who to become. When a woman\u2019s identity shifts - from \u201CI hope I find the right person\u201D to \u201CI know how to select one\u201D - her behavior changes by itself. She doesn\u2019t need scripts. She doesn\u2019t need rules. She becomes the woman who chooses well, and the rest follows.",
        ],
        slug: "identity-shift",
      },
    ],
  },
  {
    title: "The Reader\u2019s Situation",
    slug: "fit",
    items: [
      {
        question: "Are there really good men out there?",
        answer: [
          "Yes.",
          "The \u201Cno good men\u201D complaint is almost always a symptom of a strategy problem, not a supply problem. Every day, ambitious, kind, capable men are entering relationships that lead to marriage. The question is never whether they exist. The question is whether you have the framework to recognize one - and the willingness to choose.",
        ],
        slug: "good-men-out-there",
      },
      {
        question:
          "People keep telling me my standards are too high. Are they?",
        answer: [
          "Your standards aren\u2019t too high. Your strategy is too vague.",
          "High standards don\u2019t delay marriage - they accelerate it. What slows women down is wanting the right things without a method to identify them, evaluate them, and decide. A clear standard is a filter. Vague standards are an open door.",
        ],
        slug: "standards-too-high",
      },
      {
        question:
          "I\u2019ve been dating for years and nothing has worked. Is it too late?",
        answer: [
          "It\u2019s not too late. It\u2019s just been too long without a system.",
          "Trial and error works in business because the wrong product costs you a quarter. The wrong relationship costs you years. You don\u2019t need more dates. You need a different method.",
        ],
        slug: "dating-for-years-too-late",
      },
      {
        question:
          "What if I\u2019m divorced, widowed, or never married - does this still apply?",
        answer: [
          "Yes. The methodology is identity-based, not biographical.",
          "Where you\u2019re starting from doesn\u2019t change what\u2019s possible. My second marriage came from running the same system I\u2019m teaching you. The mess of how you got here isn\u2019t a disqualification. It\u2019s data.",
        ],
        slug: "divorced-widowed-never-married",
      },
      {
        question: "Do I have to give up my independence to find a partner?",
        answer: [
          "No - and the framing is the trap.",
          "Independence as a wall keeps you alone. Independence as a foundation lets you choose well. You don\u2019t trade your freedom for marriage. You upgrade from independent (alone is safe) to interdependent (chosen partnership amplifies you).",
        ],
        slug: "give-up-independence",
      },
    ],
  },
  {
    title: "Chemistry, Choice, and Timing",
    slug: "chemistry",
    items: [
      {
        question: 'What about chemistry? Doesn\u2019t love just "happen"?',
        answer: [
          "Chemistry is information. Compatibility is the structure.",
          "A relationship needs both - but if you only choose for chemistry, you\u2019re choosing for the feeling that activates fastest, not for the life that holds. Chemistry walks in. Compatibility decides whether it stays.",
        ],
        slug: "what-about-chemistry",
      },
      {
        question: "How can I be strategic without being cold?",
        answer: [
          "The opposite of strategy isn\u2019t warmth - it\u2019s confusion.",
          "The women I work with are more emotionally available, not less, once they have a method. Because they\u2019re no longer overspending on the wrong men.",
        ],
        slug: "strategic-without-being-cold",
      },
      {
        question: "How long does the methodology take?",
        answer: [
          "The shift starts immediately. The first time you stop overinvesting in someone who hasn\u2019t earned it, you\u2019ve already crossed the line. The full identity shift compounds over weeks and months as you make different choices and see different results.",
          "This isn\u2019t a 30-day fix. It\u2019s a permanent upgrade.",
        ],
        slug: "how-long-does-it-take",
      },
    ],
  },
  {
    title: "The Brand and the Products",
    slug: "brand",
    items: [
      {
        question: 'What is an "Experience"?',
        answer: [
          "Every Experience is a live virtual event with Ariel - a different topic, a different moment in the methodology, a different entry point into the journey. Marry Like a CEO is a roadmap. The Experiences are how you walk it.",
          "You don’t need to start at the beginning. You don’t need to have attended before. Each session stands alone - and each one is part of something larger. The more you show up, the clearer the map becomes. Twelve Experiences are planned this year. Join at the next one.",
        ],
        slug: "what-is-an-experience",
      },
      {
        question: "How do I work with Ariel or join the community?",
        answer: [
          "The community is the front door. From there, the methodology unfolds in layers:",
          "Free public content (LinkedIn, Instagram, Facebook, TikTok)\nThe community itself - the gateway to everything\nWebinars\nThe next Experience - the immersive identity shift\nThe book (free, lowest-priority entry point)\nDirect work with Ariel",
          "The fastest first step is joining the community.",
        ],
        slug: "work-with-ariel-join-community",
      },
      {
        question: "Who is Ariel Yankelewitz?",
        answer: [
          "Ariel built and ran multiple successful businesses - managing teams, leading large operations, driving conversion in high-end markets. When her first marriage ended, she didn\u2019t fall apart. She applied the same operating system she used in business to her love life. It worked. Her second marriage came from running the system.",
          "Marry Like a CEO is that system, taught.",
        ],
        slug: "who-is-ariel",
      },
    ],
  },
] as const;
