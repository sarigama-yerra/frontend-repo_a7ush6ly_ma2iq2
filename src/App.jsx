import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Locations from './components/Locations'
import Menu from './components/Menu'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Locations />
      <Menu />
      <Contact />
      <footer className="py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Flavor Factory. All rights reserved.</p>
          <p>Drive‑thru • Luxury dining • Affordable prices</p>
        </div>
      </footer>
    </div>
  )
}

export default App
