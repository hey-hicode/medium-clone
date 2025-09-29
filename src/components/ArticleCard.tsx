import { Heart, MessageCircle, Bookmark, MoreHorizontal } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface ArticleCardProps {
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

export function ArticleCard({
  id,
  title,
  excerpt,
  author,
  publishedAt,
  readTime,
  claps,
  responses,
  topic,
  image,
  featured = false,
}: ArticleCardProps) {
  return (
    <article className="group cursor-pointer py-6 md:py-8 border-b border-gray-100 last:border-b-0">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex-1 order-2 md:order-1">
          <div className="flex items-center gap-2 mb-3">
            <Avatar className="h-5 w-5">
              <AvatarImage src={author.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-xs bg-gray-200">{author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-700 font-medium">{author.name}</span>
            <span className="text-sm text-gray-500">in</span>
            <span className="text-sm text-gray-700 font-medium">{topic}</span>
          </div>

          <h2 className="font-bold text-gray-900 leading-tight mb-2 group-hover:text-gray-700 transition-colors text-lg md:text-xl">
            {title}
          </h2>

          <p className="hidden md:block text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">{excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{publishedAt}</span>
              <span>·</span>
              <span>{readTime}</span>
            </div>

            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" className="gap-1 text-gray-500 hover:text-gray-700 h-8 px-2">
                <Heart className="h-4 w-4" />
                <span className="text-sm">{claps}</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-1 text-gray-500 hover:text-gray-700 h-8 px-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">{responses}</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700 h-8 w-8">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700 h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {image && (
          <div className="flex-shrink-0 order-1 md:order-2">
            <img
              src={image || "/placeholder.svg"}
              alt=""
              className="w-full h-48 md:w-28 md:h-28 object-cover rounded"
            />
          </div>
        )}
      </div>
    </article>
  )
}
