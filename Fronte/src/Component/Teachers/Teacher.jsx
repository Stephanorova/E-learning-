import { BookOpen, Calendar, GraduationCap } from 'lucide-react'
import React from 'react'

const Teacher = () => {
  return (
    <div>
       <header className="mb-12 text-center">
      <div className="flex items-center justify-center mb-4">
        <GraduationCap className="w-12 h-12 text-indigo-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
         Our Teaching Team
      </h1>
      <p className="text-gray-600">
         Meet our passionate and experienced teachers who are committed to providing quality education to our students.
      </p>
    </header>
  <div className="space-y-4">
    <div className="bg-white rounded-xl shadow-lg p-4 flex items-center space-x-6 hover:bg-gray-50 transition-colors">
      <div className="flex-shrink-0">
        <img 
          src="/image/photo_2023-07-05_09-36-23-removebg-preview.png" 
          alt="" 
          className="w-20 h-20 rounded-full object-cover border-2 border-indigo-100"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Rico</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <BookOpen className="w-4 h-4 mr-2" />
            <span>Telecom</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>3 années d'expérience</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-lg p-4 flex items-center space-x-6 hover:bg-gray-50 transition-colors">
      <div className="flex-shrink-0">
        <img 
          src="/image/photo_2023-07-05_09-36-23-removebg-preview.png" 
          alt="" 
          className="w-20 h-20 rounded-full object-cover border-2 border-indigo-100"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Rico</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <BookOpen className="w-4 h-4 mr-2" />
            <span>Telecom</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>3 années d'expérience</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-lg p-4 flex items-center space-x-6 hover:bg-gray-50 transition-colors">
      <div className="flex-shrink-0">
        <img 
          src="/image/photo_2023-07-05_09-36-23-removebg-preview.png" 
          alt="" 
          className="w-20 h-20 rounded-full object-cover border-2 border-indigo-100"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Rico</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <BookOpen className="w-4 h-4 mr-2" />
            <span>Telecom</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>3 années d'expérience</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-lg p-4 flex items-center space-x-6 hover:bg-gray-50 transition-colors">
      <div className="flex-shrink-0">
        <img 
          src="/image/photo_2023-07-05_09-36-23-removebg-preview.png" 
          alt="" 
          className="w-20 h-20 rounded-full object-cover border-2 border-indigo-100"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Rico</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <BookOpen className="w-4 h-4 mr-2" />
            <span>Telecom</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>3 années d'expérience</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Teacher
