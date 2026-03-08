export interface BuildLog {
  day: number;
  title: string;
  date: string;
  summary: string;
  youtubeVideo?: string;
  tags?: string[];
  metrics?: {
    commits?: number;
    features?: number;
    bugs?: number;
    docs?: number;
  };
  learnings?: string[];
  mood?: string;
}

export const buildLogs: BuildLog[] = [
  {
    day: 45,
    title: "TrustMitra OTP Job Start System",
    date: "2026-03-01",
    summary:
      "Built the OTP verification system that confirms worker presence before starting a job.",
    tags: ["Product", "Engineering"],
    metrics: {
      commits: 7,
      features: 2,
      bugs: 3
    },
    learnings: [
      "Trust systems must be visible to users",
      "Verification must be instant",
      "Workers prefer minimal onboarding steps"
    ],
    mood: "🔥 Deep Build Mode"
  },
  {
    day: 1,
    title: "Starting My Build in Public Journey",
    date: "7 March 2026",
    summary:
      "Today I started documenting my journey publicly while building TrustMitra. I improved my portfolio UI, worked with GitHub sync, and recorded my first daily vlog.",
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
    learnings: [
      "Good documentation reduces future rework",
      "UI polish improves first impression dramatically",
      "Consistency in public updates builds long-term credibility"
    ],
    youtubeVideo: "https://www.youtube.com/embed/LXb3EKWsInQ"
  }
];
