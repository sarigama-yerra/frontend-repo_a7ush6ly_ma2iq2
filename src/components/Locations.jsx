import { useEffect, useState } from 'react'

function Locations() {
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/locations`)
        const data = await res.json()
        setLocations(data.cities || [])
      } catch (e) {
        setLocations([
          { city: 'Lubumbashi', country: 'DR Congo' },
          { city: 'Johannesburg', country: 'South Africa' },
          { city: 'Ottawa', country: 'Canada' },
        ])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="locations" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight">Our Cities</h2>
        <p className="text-gray-600 mt-2">Luxury dining and drive‑thru convenience across three world cities.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {(loading ? [1,2,3] : locations).map((loc, i) => (
            <div key={i} className="p-6 rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
              {loading ? (
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
              ) : (
                <>
                  <h3 className="text-xl font-semibold">{loc.city}</h3>
                  <p className="text-gray-500">{loc.country}</p>
                  <p className="text-sm mt-3 text-gray-600">Drive‑thru • Dine‑in • Reservations</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Locations
