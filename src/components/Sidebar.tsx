import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

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
              <div className="flex items-start gap-3">
                <Avatar className="h-5 w-5 mt-0.5">
                  <AvatarImage src="/diverse-user-avatars.png" />
                  <AvatarFallback className="text-xs bg-gray-200">M</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <span className="text-sm text-gray-700 font-medium">{pick.author}</span>
                  <h4 className="font-medium text-base leading-tight text-gray-900 group-hover:text-gray-700 transition-colors mt-1">
                    {pick.title}
                  </h4>
                  <span className="text-sm text-gray-500 mt-1 block">{pick.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="link" className="p-0 h-auto text-sm text-green-600 hover:text-green-700 mt-4">
          See the full list
        </Button>
      </div>
    </aside>
  )
}
