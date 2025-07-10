"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function SearchForm() {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle search functionality heres
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 md:mt-0">
      <div className="relative">
        <input
          type="text"
          placeholder="Search our menu..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-2 pl-10 pr-4 rounded-md bg-amber-700 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-300" size={18} />
      </div>
    </form>
  )
}
