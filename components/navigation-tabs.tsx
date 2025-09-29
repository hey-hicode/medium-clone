"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NavigationTabs() {
  const [activeTab, setActiveTab] = useState("for-you")

  const tabs = [
    { id: "for-you", label: "For you" },
    { id: "featured", label: "Featured" },
  ]

  return (
    <div className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <nav className="flex gap-6 md:gap-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              className={`relative px-0 py-3 md:py-4 font-normal hover:bg-transparent text-sm ${
                activeTab === tab.id
                  ? "text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  )
}
