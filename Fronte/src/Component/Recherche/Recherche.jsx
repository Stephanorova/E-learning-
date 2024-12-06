import { Search } from 'lucide-react'
import React from 'react'

const Recherche = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
    <div className="flex items-center w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-black"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>
    </div>
    </div>
  )
}

export default Recherche
