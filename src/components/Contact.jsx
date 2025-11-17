import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          message: payload.message,
          location: payload.location || undefined,
          guests: payload.guests ? Number(payload.guests) : undefined,
        })
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ ok: true, msg: 'Thanks! We will get back to you shortly.' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, msg: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
        <p className="text-gray-600 mt-2">Questions, reservations, or events—send us a message.</p>
        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-lg border border-gray-300 px-4 py-3" />
            <input name="email" required type="email" placeholder="Email address" className="w-full rounded-lg border border-gray-300 px-4 py-3" />
            <select name="location" className="w-full rounded-lg border border-gray-300 px-4 py-3">
              <option value="">Preferred location (optional)</option>
              <option>Lubumbashi</option>
              <option>Johannesburg</option>
              <option>Ottawa</option>
            </select>
            <input name="guests" type="number" min="1" placeholder="Guests (for reservation)" className="w-full rounded-lg border border-gray-300 px-4 py-3" />
          </div>
          <div className="flex flex-col">
            <textarea name="message" required rows="7" placeholder="Your message" className="w-full rounded-lg border border-gray-300 px-4 py-3" />
            <button disabled={loading} className="mt-4 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60">
              {loading ? 'Sending...' : 'Send message'}
            </button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
