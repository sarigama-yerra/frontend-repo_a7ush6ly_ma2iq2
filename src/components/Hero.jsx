function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Flavor Factory
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A luxury dining experience with a drive‑thru twist. Based in Lubumbashi, Johannesburg and Ottawa,
            serving elevated flavors at affordable prices.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">View Menu</a>
            <a href="#locations" className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 font-semibold">Find a Location</a>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            Drive‑thru available at all locations • Open 7 days
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
      </div>
    </section>
  )
}

export default Hero
