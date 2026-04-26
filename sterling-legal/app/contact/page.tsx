'use client'

import { useState } from 'react'

const services = [
  'Corporate Law',
  'Tax Advisory',
  'Compliance & Risk Management',
  'Mergers & Acquisitions',
  'Employment Law',
  'Contract Management',
  'Other / Not Sure',
]

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Our Office',
    lines: ['1 Canada Square, Canary Wharf', 'London, E14 5AB', 'United Kingdom'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Phone',
    lines: ['+44 20 7946 0800', '+44 20 7946 0801 (urgent)'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    lines: ['enquiries@sterlinglegal.co.uk', 'partners@sterlinglegal.co.uk'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Office Hours',
    lines: ['Monday – Friday: 8:00 – 18:00', 'Urgent matters: 24/7'],
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSubmitted(true)
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="section-label mb-5">Get in Touch</p>
          <h1 className="heading-xl text-white mb-6">
            Contact <span className="text-gold">Us</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="font-inter text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            All enquiries are treated with absolute confidentiality. A senior partner will respond within one business day.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16">
          {/* FORM */}
          <div className="lg:col-span-3">
            <div className="mb-10">
              <p className="section-label mb-3">Send an Enquiry</p>
              <h2 className="heading-md text-navy mb-2">Arrange a Consultation</h2>
              <div className="w-12 h-px bg-gold mt-4" />
            </div>

            {submitted ? (
              <div className="bg-navy p-12 text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">Enquiry Received</h3>
                <p className="font-inter text-white/60 text-sm">
                  Thank you, {form.name}. A senior partner will be in touch within one business day. All matters are treated with complete confidentiality.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-inter text-xs text-gray-500 tracking-widest uppercase block mb-2">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-xs text-gray-500 tracking-widest uppercase block mb-2">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-inter text-xs text-gray-500 tracking-widest uppercase block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 20 0000 0000"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-xs text-gray-500 tracking-widest uppercase block mb-2">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-inter text-xs text-gray-500 tracking-widest uppercase block mb-2">
                    Your Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Please describe your legal matter in as much detail as you are comfortable sharing at this stage…"
                    className="input-field resize-none"
                  />
                </div>

                <div className="bg-gray-50 border border-gray-100 p-4 flex gap-3 items-start">
                  <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="font-inter text-xs text-gray-500 leading-relaxed">
                    All information submitted is protected by attorney-client privilege and treated with absolute confidentiality. Your details will never be shared with third parties.
                  </p>
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn-primary w-full justify-center"
                >
                  Submit Enquiry
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-10">
              <p className="section-label mb-3">Contact Details</p>
              <h2 className="heading-md text-navy mb-2">Find Us</h2>
              <div className="w-12 h-px bg-gold mt-4" />
            </div>

            {contactInfo.map((info) => (
              <div key={info.title} className="flex gap-5 p-6 bg-gray-50 border border-gray-100 hover:border-gold/30 hover:shadow-card transition-all duration-300 group">
                <div className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div>
                  <p className="font-inter text-xs text-gray-400 tracking-widest uppercase mb-2">{info.title}</p>
                  {info.lines.map((line) => (
                    <p key={line} className="font-inter text-sm text-navy leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP EMBED */}
      <section className="bg-gray-50 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full h-80 bg-navy-mid relative overflow-hidden shadow-card">
            {/* Map placeholder with styled appearance */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.612558!2d-0.02166!3d51.50506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602b0ba4d0c15%3A0xaa5f5879da2a3e5f!2sCanary%20Wharf!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sterling Legal Partners Location"
            />
            {/* Overlay badge */}
            <div className="absolute top-6 left-6 bg-navy p-4 shadow-lg">
              <p className="font-playfair text-white font-bold text-sm">Sterling Legal Partners</p>
              <p className="font-inter text-gold text-xs mt-1">1 Canada Square, Canary Wharf</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
