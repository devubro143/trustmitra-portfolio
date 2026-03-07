export type BuildLog = {
  day: number;
  title: string;
  date: string;
  summary: string;
  actions: string[];
  learnings: string[];
  youtubeVideo: string;
};

export const buildLogs: BuildLog[] = [
  {
    day: 1,
    title: "Starting My Build in Public Journey",
    date: "7 March 2026",
    summary:
      "Today I started documenting my journey publicly while building TrustMitra. I improved my portfolio UI, worked with GitHub sync, and recorded my first daily vlog.",
    actions: [
      "Improved portfolio UI",
      "Synced GitHub with local project",
      "Recorded daily vlog"
    ],
    learnings: [
      "Version control saves broken code",
      "Consistency compounds",
      "Documenting the journey builds credibility"
    ],
    youtubeVideo: "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    day: 2,
    title: "Refining the Founder Story and Product Positioning",
    date: "8 March 2026",
    summary:
      "I sharpened TrustMitra's messaging, improved content hierarchy in my portfolio, and shared progress publicly to keep momentum visible.",
    actions: [
      "Refined TrustMitra positioning copy",
      "Improved section hierarchy for better readability",
      "Published build updates on social channels"
    ],
    learnings: [
      "Clear messaging makes products easier to trust",
      "Small daily UX fixes improve overall perception",
      "Public accountability helps maintain momentum"
    ],
    youtubeVideo: "https://www.youtube.com/embed/jfKfPfyJRdk"
  },
  {
    day: 3,
    title: "Improving Workflow and Daily Shipping Discipline",
    date: "9 March 2026",
    summary:
      "I improved my build workflow, reduced context switching, and focused on shipping one meaningful update while recording and sharing the day.",
    actions: [
      "Planned a clearer daily build checklist",
      "Reduced context-switching during coding sessions",
      "Recorded and published a focused daily vlog"
    ],
    learnings: [
      "Systems beat motivation for long-term consistency",
      "Focused execution creates better output than multitasking",
      "Sharing progress attracts valuable feedback loops"
    ],
    youtubeVideo: "https://www.youtube.com/embed/4xDzrJKXOOY"
  },
  {
    day: 4,
    title: "Strengthening Product UI and Documentation Habits",
    date: "10 March 2026",
    summary:
      "I polished UI details, documented implementation decisions, and continued the build-in-public streak to build trust through transparency.",
    actions: [
      "Improved card spacing and visual consistency",
      "Documented implementation decisions for future iterations",
      "Recorded and shared progress with the community"
    ],
    learnings: [
      "Good documentation reduces future rework",
      "UI polish improves first impression dramatically",
      "Consistency in public updates builds long-term credibility"
    ],
    youtubeVideo: "https://www.youtube.com/embed/LXb3EKWsInQ"
  }
];
