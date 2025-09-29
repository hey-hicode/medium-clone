import { notFound } from "next/navigation"
import { articlesData } from "@/lib/articles-data"
import { ArrowLeft, Heart, MessageCircle, Bookmark, Share, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params
  
  const article = articlesData.find(article => 
    article.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') === slug
  )

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-4">
        <Link href="/">
          <Button variant="ghost" className="gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            Back to stories
          </Button>
        </Link>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 md:px-6 pb-8">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={article.author.avatar} />
                <AvatarFallback className="bg-gray-200 text-gray-600">
                  {article.author.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-gray-900">{article.author.name}</p>
                <p className="text-sm text-gray-600">
                  {article.publishedAt} · {article.readTime} min read
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden md:inline">{article.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden md:inline">{article.comments}</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Article Image */}
          {article.image && (
            <div className="mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          )}
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-800 leading-relaxed space-y-6">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-start space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={article.author.avatar} />
              <AvatarFallback className="bg-gray-200 text-gray-600">
                {article.author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">{article.author.name}</h3>
              <p className="text-gray-600 mb-3">
                {article.author.bio || "Writer and thinker sharing insights on technology and life."}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{article.author.followers} followers</span>
                <span>•</span>
                <span>{article.author.stories} stories</span>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Follow
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
