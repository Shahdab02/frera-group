import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [searchParams] = useSearchParams()
  const product = searchParams.get('product')
  const category = searchParams.get('category')

  function handleSubmit(event) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`FRERA enquiry: ${data.get('subject')}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\n` +
        `Phone: ${data.get('phone')}\n` +
        `Email: ${data.get('email')}\n` +
        `Category: ${data.get('subject')}\n` +
        `Message: ${data.get('message')}`
    )

    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card p-4 p-lg-5">
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full name</label>
          <input
            className="form-control"
            name="name"
            required
            placeholder="Your name"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone number</label>
          <input
            className="form-control"
            name="phone"
            required
            type="tel"
            placeholder="Your phone number"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Email address</label>
          <input
            className="form-control"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Enquiry category</label>
          <select className="form-select" name="subject" defaultValue={category || 'General enquiry'}>
            <option>General enquiry</option>
            <option>Property</option>
            <option>Vehicles</option>
            <option>Scrap & Metals</option>
            <option>Industrial Products</option>
            <option>Business Services</option>
          </select>
        </div>

        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="5"
            name="message"
            required
            defaultValue={product ? `I'm interested in ${product}. Please share the latest details, pricing and availability.` : ''}
            placeholder="How can we help you?"
          />
        </div>

        <div className="col-12">
          <button className="btn btn-frera" type="submit">
            Send Enquiry <i className="bi bi-arrow-right ms-2" />
          </button>

          {sent && (
            <p className="small text-success mt-2 mb-0">
              Your email app should open with the enquiry. Configure the
              recipient email in ContactForm.jsx.
            </p>
          )}
        </div>
      </div>
    </form>
  )
}
