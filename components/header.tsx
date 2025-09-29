import { Search, Edit, Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="sticky top-0 z-50  w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center w-full ">
          <Button variant="ghost" size="icon" className="md:hidden mr-2 text-gray-600">
            <Menu className="h-5 w-5" />
          </Button>


          <span className="text-2xl font-bold tracking-tight">Medium</span>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search Medium"
              className="pl-10 bg-gray-50 border-0 rounded-full h-10 focus-visible:ring-1 focus-visible:ring-gray-300"
            />
          </div>
        </div>

        </div>


        <div className="flex items-center  ">
          <Button variant="ghost" size="icon" className="md:hidden text-gray-600 hover:text-gray-900">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="sm" className="gap-2 text-gray-600 hover:text-gray-900">
            <Edit className="h-4 w-4" />
            <span className="hidden md:inline">Write</span>
          </Button>

          <Button variant="ghost" size="lg" className="hidden md:flex text-gray-600 hover:text-gray-900">
            <Bell className="h-10 w-10" />
          </Button>

          <Avatar className="h-8 w-8">
            <AvatarImage src="/diverse-user-avatars.png" />
            <AvatarFallback className="bg-gray-200 text-gray-600">U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
