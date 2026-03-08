export type BuildLog = {
  id: number
  day: number
  title: string
  date: string
  summary: string
  actions: string[]
  learnings: string[]
  tags?: string[]
  mood?: string
  youtubeVideo?: string
}

export const buildLogs: BuildLog[] = [
  {
    id: 1,
    day: 1,
    title: "Starting Build in Public",
    date: "8 March 2026",
    summary: "Started documenting my founder journey publicly.",

    actions: [
      "Created build logs system",
      "Improved portfolio UI",
      "Started founder vlog"
    ],

    learnings: [
      "Building in public increases accountability",
      "Consistency matters more than perfection"
    ],

    tags: ["buildinpublic", "founder"],
    mood: "🚀 Starting Energy",

    youtubeVideo: "https://www.youtube.com/watch?v=1gDxxZDS9QQ"
  },

  {
  id: 2,
  day: 2,
  title: "Improving Portfolio UI",
  date: "9 March 2026",
  summary: "Improved portfolio layout and added animations.",

  actions: [
    "Improved card spacing",
    "Added hover animations",
    "Refined color palette"
  ],

  learnings: [
    "Small UI details improve perception",
    "Consistency is key"
  ],

  tags: ["ui","portfolio"],
  mood: "🎨 Design Mode",

  youtubeVideo: "https://www.youtube.com/watch?v=WHqbqzqeskw&list=RDWHqbqzqeskw&start_radio=1&pp=oAcB"
}
,

  {
  id: 3,
  day: 3,
  title: "Improving Portfolio UI",
  date: "10 March 2026",
  summary: "Improved portfolio layout and added animations.",

  actions: [
    "Improved card spacing",
    "Added hover animations",
    "Refined color palette"
  ],

  learnings: [
    "Small UI details improve perception",
    "Consistency is key"
  ],

  tags: ["ui","portfolio"],
  mood: "🎨 Design Mode",

  youtubeVideo: "https://www.youtube.com/watch?v=3suSHefjRt0&t=217s"
},

  {
  id: 4,
  day: 4,
  title: "Improving Portfolio UI",
  date: "11 March 2026",
  summary: "Improved portfolio layout and added animations.",

  actions: [
    "Improved card spacing",
    "Added hover animations",
    "Refined color palette"
  ],

  learnings: [
    "Small UI details improve perception",
    "Consistency is key"
  ],

  tags: ["ui","portfolio"],
  mood: "🎨 Design Mode",

  youtubeVideo: "https://www.youtube.com/watch?v=TsPecr7jd2Y&list=RDTsPecr7jd2Y&start_radio=1&pp=oAcB"
}
























]

