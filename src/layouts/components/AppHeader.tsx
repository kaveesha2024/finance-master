import React from "react"
import { Search } from "lucide-react"

const AppHeader: React.FC = () => {
  return (
    <header
      id="header"
      className="flex h-20 w-full items-center justify-between border-b border-gray-200 bg-white px-5"
    >
      <div className="bg-container flex items-center justify-center rounded-md px-3 py-2">
        {/* icon */}
        <Search color="#8B8B8B" size={20} />
        {/* input field */}
        <input
          type="text"
          className="ml-3 w-[200px] border-none outline-none"
          placeholder="Search"
        />
      </div>
    </header>
  )
}

export default AppHeader
