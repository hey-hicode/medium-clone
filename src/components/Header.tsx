import { Search, Edit, Bell, Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden mr-2 text-gray-600">
            <Menu className="h-5 w-5" />
          </Button>

          <svg width="45" height="25" viewBox="0 0 45 25" className="mr-2">
            <path
              d="M19.75 8.5c0-4.14-3.36-7.5-7.5-7.5S4.75 4.36 4.75 8.5v8c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5v-8zm-7.5 13.5c-3.03 0-5.5-2.47-5.5-5.5v-8c0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5v8c0 3.03-2.47 5.5-5.5 5.5z"
              fill="#000"
            />
            <path
              d="M32.25 8.5c0-2.07-1.68-3.75-3.75-3.75s-3.75 1.68-3.75 3.75v8c0 2.07 1.68 3.75 3.75 3.75s3.75-1.68 3.75-3.75v-8z"
              fill="#000"
            />
            <path
              d="M40.5 8.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v8c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5v-8z"
              fill="#000"
            />
          </svg>
          <span className="text-2xl font-bold tracking-tight">Medium</span>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search Medium"
              className="pl-10 bg-gray-50 border-0 rounded-full h-10 focus-visible:ring-1 focus-visible:ring-gray-300"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <Button variant="ghost" size="icon" className="md:hidden text-gray-600 hover:text-gray-900">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="sm" className="gap-2 text-gray-600 hover:text-gray-900">
            <Edit className="h-4 w-4" />
            <span className="hidden md:inline">Write</span>
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex text-gray-600 hover:text-gray-900">
            <Bell className="h-4 w-4" />
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
