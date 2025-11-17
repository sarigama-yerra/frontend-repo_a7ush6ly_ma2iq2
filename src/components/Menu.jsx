import { useEffect, useState } from 'react'

const sampleMenu = [
  { name: 'Signature Truffle Burger', description: 'A5 wagyu blend, truffle aioli, aged cheddar', price: 12.5, category: 'Burgers', is_drive_thru_friendly: true },
  { name: 'Grilled Ribeye', description: 'Herb butter, pommes purée, demi‑glace', price: 21, category: 'Mains', is_drive_thru_friendly: false },
  { name: 'Crispy Chicken Bites', description: 'Honey‑chili glaze, sesame', price: 6.5, category: 'Sides', is_drive_thru_friendly: true },
  { name: 'Cold Brew Coffee', description: 'Single‑origin, slow steeped', price: 3.5, category: 'Drinks', is_drive_thru_friendly: true },
]

function Menu() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [driveThruOnly, setDriveThruOnly] = useState(false)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const params = new URLSearchParams()
        if (filter !== 'All') params.set('category', filter)
        if (driveThruOnly) params.set('drive_thru_only', 'true')
        const res = await fetch(`${baseUrl}/menu?${params.toString()}`)
        if (!res.ok) throw new Error('Failed')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems(sampleMenu)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [filter, driveThruOnly])

  const categories = ['All', 'Burgers', 'Mains', 'Sides', 'Drinks', 'Dessert']

  return (
    <section id="menu" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Menu</h2>
            <p className="text-gray-600 mt-2">Elevated flavors. Everyday prices. Perfect for drive‑thru or dine‑in.</p>
          </div>
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="rounded border-gray-300" checked={driveThruOnly} onChange={e => setDriveThruOnly(e.target.checked)} />
              Drive‑thru friendly
            </label>
            <select value={filter} onChange={e => setFilter(e.target.value)} className="ml-2 rounded border-gray-300 text-sm">
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {(loading ? Array.from({length:6}) : items).map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
              {loading ? (
                <div className="space-y-3 animate-pulse">
                  <div className="h-40 bg-gray-200 rounded-lg" />
                  <div className="h-5 w-2/3 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-1/3 bg-gray-200 rounded" />
                </div>
              ) : (
                <>
                  <div className="h-40 rounded-lg bg-gray-50 ring-1 ring-gray-100 flex items-center justify-center text-gray-400 text-sm">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                    ) : 'Delicious preview'}
                  </div>
                  <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold">${item.price?.toFixed ? item.price.toFixed(2) : item.price}</span>
                    {item.is_drive_thru_friendly && (
                      <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">Drive‑thru</span>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
