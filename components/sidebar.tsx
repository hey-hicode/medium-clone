import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bookmark } from "lucide-react"

export function Sidebar() {
  const staffPicks = [
    {
      title: "How this brand strategist uses Medium to explore ideas, repurpose content, and land clients",
      author: "Just Brewer MD PhD",
      readTime: "4d ago",
    },
    {
      title: 'From "I Have To" to "I Get To": How One Word Change Rewires Your Brain',
      author: "Lina Nguyen",
      readTime: "5d ago",
    },
    {
      title: "Golden Design Lessons from Tokyo Metro",
      author: "See the full list",
      readTime: "Dec 3",
    },
  ]

  const recommendedTopics = ["Data Science", "React", "Coding", "Mental Health", "UX", "Python", "Productivity"]

  const whoToFollow = [
    {
      name: "Dr. Derek Austin 🥳",
      handle: "Teaches Life to Smile. Fol...",
      avatar: "/diverse-user-avatars.png",
    },
    {
      name: "ITNEXT",
      handle:
        "ITNEXT is a platform for IT developers & software engineers to share knowledge, connect, collaborate, learn and experience next-gen technologies.",
      avatar: "/alex-avatar.png",
    },
    {
      name: "Oliver Foster",
      handle: "Regularly published in the Better Programming publication",
      avatar: "/maya-avatar.jpg",
    },
  ]

  return (
    <aside className="w-80 space-y-8">
      <div>
        <h3 className="text-base font-medium text-gray-900 mb-4">Staff Picks</h3>
        <div className="space-y-4">
          {staffPicks.map((pick, index) => (
            <div key={index} className="cursor-pointer group">
              <div className="flex items-center pb-3 gap-3">
                <Avatar className="h-7 w-7 mt-0.5">
                  <AvatarImage src="/diverse-user-avatars.png" />
                  <AvatarFallback className="text-xs bg-gray-200">M</AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-700 font-medium">{pick.author}</span>

              </div>
              <div className="flex-1">
                  <h4 className="font-medium text-base leading-tight text-gray-900 group-hover:text-gray-700 transition-colors mt-1">
                    {pick.title}
                  </h4>
                  <span className="text-sm text-gray-500 mt-1 block">{pick.readTime}</span>
                </div>
            </div>
          ))}
        </div>
        <Button variant="link" className="p-0 h-auto text-sm text-gray-500 mt-4">
          See the full list
        </Button>
      </div>

      <div>
        <h3 className="text-base font-medium text-gray-900 mb-4">Recommended topics</h3>
        <div className="flex flex-wrap gap-2">
          {recommendedTopics.map((topic) => (
            <Button
              key={topic}
              variant="outline"
              size="sm"
              className="rounded-full bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 h-8 px-4 text-sm"
            >
              {topic}
            </Button>
          ))}
        </div>
        <Button variant="link" className="p-0 h-auto text-sm text-gray-500 mt-4">
          See more topics
        </Button>
      </div>

      <div>
        <h3 className="text-base font-medium text-gray-900 mb-4">Who to follow</h3>
        <div className="space-y-4">
          {whoToFollow.map((person, index) => (
            <div key={index} className="flex items-start gap-3">
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src={person.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-xs bg-gray-200">{person.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-base text-gray-900 truncate">{person.name}</span>
                  <Button
                    size="sm"
                    className="h-8 px-4 text-sm  border border-gray-200 rounded-full"
                  >
                    Follow
                  </Button>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{person.handle}</p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="link" className="p-0 h-auto text-sm text-gray-500 mt-4">
          See more suggestions
        </Button>
      </div>

      <div>
        <h3 className="text-base font-medium text-gray-900 mb-4">Reading list</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Click the{" "}
          <span className="inline-flex items-center mx-1">
            <Bookmark className="h-3 w-3" />
          </span>{" "}
          on any story to easily add it to your reading list or a custom list that you can share.
        </p>
      </div>
    </aside>
  )
}
