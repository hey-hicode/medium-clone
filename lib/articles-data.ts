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
  {
    id: "3",
    title: "Future-Proof Careers in the Age of AI: What You Should Learn in 2026",
    excerpt:
      "What if I told you that by this time next year, you could land a job that pays over $100,000... and it won't be threatened by AI? The landscape of work is evolving rapidly, but certain skills remain uniquely human and increasingly valuable.",
    author: {
      name: "Chen Compiler",
      avatar: "/chen-avatar.jpg",
      handle: "@chencompiler",
    },
    publishedAt: "Dec 13",
    readTime: "9 min read",
    claps: 2100,
    responses: 156,
    topic: "AI",
    image: "/future-technology-cityscape.png",
  },
  {
    id: "4",
    title: "10 Java Collections Tricks Only Seniors Know",
    excerpt:
      "If you've been coding in Java for a while, you probably use List, Set, and Map every single day. But here's the thing: most developers barely scratch the surface of what's possible with Java Collections.",
    author: {
      name: "The Generator",
      avatar: "/generator-avatar.jpg",
      handle: "@thegenerator",
    },
    publishedAt: "Dec 12",
    readTime: "6 min read",
    claps: 1450,
    responses: 89,
    topic: "Java",
    image: "/java-code.jpg",
  },
  {
    id: "5",
    title: "Want to see how insanely stupid AI really is? Ask ChatGPT to answer these riddles in just one word",
    excerpt:
      "Limiting output length reveals AI isn't intelligent—it's chatty! When we force AI systems to be concise, their limitations become glaringly obvious. These simple tests reveal the gap between human reasoning and artificial pattern matching.",
    author: {
      name: "Jim the AI Whisperer",
      avatar: "/jim-avatar.jpg",
      handle: "@jimaiwhisperer",
    },
    publishedAt: "Dec 11",
    readTime: "4 min read",
    claps: 3200,
    responses: 234,
    topic: "AI",
    image: "/ai-brain-puzzle.jpg",
  },
  {
    id: "6",
    title: "The Psychology Behind Effective Code Reviews",
    excerpt:
      "Code reviews aren't just about catching bugs—they're about building better teams. Understanding the human element in technical processes can transform your development workflow and create a more collaborative environment.",
    author: {
      name: "Sarah Chen",
      avatar: "/jim-avatar.jpg",

      handle: "@sarahchen",
    },
    publishedAt: "Dec 10",
    readTime: "5 min read",
    claps: 987,
    responses: 67,
    topic: "Programming",
    image: "/java-code.jpg",

  },
]
