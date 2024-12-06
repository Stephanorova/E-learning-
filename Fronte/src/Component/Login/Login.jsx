import React from 'react'

const Logine = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6">Login</h2>
    <form className="space-y-4">
      <div>
        <label className="block mb-1">Email</label>
        <input type="email" className="w-full p-2 border rounded focus:outline-none focus:border-black" />
      </div>
      <div>
        <label className="block mb-1">Password</label>
        <input type="password" className="w-full p-2 border rounded focus:outline-none focus:border-black" />
      </div>
      <button className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">Login</button>
    </form>
    <p className="mt-4 text-center">
      Don't have an account?{' '}
      <button
        className="text-black font-medium hover:underline"
      >
        Sign up
      </button>
    </p>
  </div>
  )
}

export default Logine
