"use client"

import { useState } from "react"

export function NavigationTabs() {
  const [activeTab, setActiveTab] = useState("for-you")

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <nav className="flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab("for-you")}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === "for-you"
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            For you
          </button>
          <button
            onClick={() => setActiveTab("featured")}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === "featured"
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Featured
          </button>
        </nav>
      </div>
    </div>
  )
}
