import { Header } from "./components/Header"
import { NavigationTabs } from "./components/NavigationTabs"
import { ArticleCard } from "./components/ArticleCard"
import { Sidebar } from "./components/Sidebar"
import { articlesData } from "./lib/articles-data"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NavigationTabs />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16">
          <main className="flex-1 max-w-none lg:max-w-2xl">
            <div className="space-y-0">
              {articlesData.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </main>

          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
