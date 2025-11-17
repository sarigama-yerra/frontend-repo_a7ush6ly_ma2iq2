import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight">Flavor Factory</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#locations" className="hover:text-blue-600 transition-colors">Locations</a>
          <a href="#menu" className="hover:text-blue-600 transition-colors">Menu</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          <a href="/test" className="px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">System Check</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100">
          <span className="sr-only">Toggle menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 px-4 pb-4">
          <div className="flex flex-col gap-3 pt-3">
            <a onClick={() => setOpen(false)} href="#locations" className="py-2">Locations</a>
            <a onClick={() => setOpen(false)} href="#menu" className="py-2">Menu</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2">Contact</a>
            <a onClick={() => setOpen(false)} href="/test" className="py-2">System Check</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
