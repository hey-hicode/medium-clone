export interface Article {
  id: string
  title: string
  excerpt: string
  author: {
    name: string
    avatar: string
    handle: string
  }
  publishedAt: string
  readTime: string
  claps: number
  responses: number
  topic: string
  image?: string
  featured?: boolean
}

export const articlesData: Article[] = [
  {
    id: "1",
    title: "How Knowledge of Languages Is More Valuable Than Ever on the Job Market",
    excerpt:
      "It's not a soft skill, but a marketing asset. In today's interconnected world, multilingual professionals are becoming increasingly valuable across industries. Companies are recognizing that language skills open doors to new markets, foster better client relationships, and drive innovation through diverse perspectives.",
    author: {
      name: "Troy Malone",
      avatar: "/troy-avatar.jpg",
      handle: "@troymalone",
    },
    publishedAt: "Dec 15",
    readTime: "4 min read",
    claps: 1200,
    responses: 42,
    topic: "Career",
    image: "/languages-books.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Welcome To Dream-Driven Development Where Nothing Works",
    excerpt:
      "Half-baked diagrams, features that make no sense, Mission architecture. You've seen it, you've lived it, and it has a name. Every developer has encountered projects where ambitious visions collide with technical reality, creating a perfect storm of confusion and frustration.",
    author: {
      name: "Leanna Writes",
      avatar: "/leanna-avatar.jpg",
      handle: "@leannawriter",
    },
    publishedAt: "Dec 14",
    readTime: "7 min read",
    claps: 890,
    responses: 18,
    topic: "Programming",
    image: "/frustrated-developer.jpg",
  },
]
