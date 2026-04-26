import Link from 'next/link'

const services = [
  'Corporate Law',
  'Tax Advisory',
  'Compliance & Risk',
  'Mergers & Acquisitions',
  'Employment Law',
  'Contract Management',
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Our Team' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Top CTA Bar */}
      <div className="bg-gold-gradient">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-playfair text-navy text-xl font-bold">Ready to protect your interests?</p>
            <p className="font-inter text-navy/70 text-sm mt-1">Schedule a confidential consultation with our senior partners.</p>
          </div>
          <Link href="/contact" className="bg-navy text-white font-inter font-semibold text-sm tracking-wide px-8 py-4 hover:bg-navy-light transition-colors duration-300 whitespace-nowrap">
            Book Consultation →
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-playfair text-2xl text-white font-bold tracking-wide block">STERLING</span>
              <span className="font-inter text-[10px] text-gold tracking-[0.3em] uppercase">Legal Partners</span>
            </div>
            <p className="font-inter text-white/60 text-sm leading-relaxed">
              Delivering uncompromising legal excellence to corporations, institutions, and discerning clients since 2004.
            </p>
            <div className="mt-6 flex gap-3">
              {['in', 'tw', 'fb'].map((s) => (
                <div key={s} className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold text-white/50 text-xs font-mono cursor-pointer transition-all duration-200">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-inter text-sm text-white/60 hover:text-gold transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-5">Practice Areas</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="font-inter text-sm text-white/60 hover:text-gold transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-inter text-sm text-white/60 leading-relaxed">
                  1 Canada Square, Canary Wharf<br />London, E14 5AB, United Kingdom
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-inter text-sm text-white/60">+44 20 7946 0800</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-inter text-sm text-white/60">enquiries@sterlinglegal.co.uk</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-white/40">
            © {new Date().getFullYear()} Sterling Legal Partners LLP. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link key={item} href="#" className="font-inter text-xs text-white/40 hover:text-gold transition-colors duration-200">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
