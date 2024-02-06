import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
<body className="bg-slate-100 h-screen flex items-center justify-center">
    <div className="text-center ">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-2xl mb-8">Something went wrong. Please try again later.</p>
        <Link to={'/'} className="bg-black text-white py-2 px-4 rounded-full inline-block hover:bg-slate-900 hover:text-white transition duration-300">Go Home</Link>
    </div>
</body>  )
}
