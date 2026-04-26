import Link from 'next/link'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Corporate Law',
    desc: 'Comprehensive legal frameworks for corporations navigating complex regulatory landscapes and governance challenges.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Tax Advisory',
    desc: 'Strategic tax structuring and advisory services that optimise liabilities while ensuring full regulatory compliance.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Compliance & Risk',
    desc: 'Proactive compliance management and risk mitigation strategies that protect your business from regulatory exposure.',
  },
]

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '500+', label: 'Clients Served' },
  { value: '98%', label: 'Success Rate' },
  { value: '50+', label: 'Expert Attorneys' },
]

const testimonials = [
  {
    quote: "Sterling Legal Partners transformed our corporate structure with exceptional precision. Their counsel during our £200M acquisition was indispensable — I cannot recommend them highly enough.",
    name: 'Jonathan Whitmore',
    role: 'CEO, Whitmore Capital Group',
    initials: 'JW',
  },
  {
    quote: "The tax advisory team's expertise saved our organisation over £4M in a single fiscal year. Their strategic thinking goes far beyond conventional legal advice — they are true business partners.",
    name: 'Helena Blackwood',
    role: 'CFO, Meridian Property Holdings',
    initials: 'HB',
  },
  {
    quote: "When faced with a complex cross-border compliance matter, Sterling's team delivered clarity and resolve. Their international network and depth of knowledge is unmatched in the industry.",
    name: 'Alistair Pemberton',
    role: 'Managing Director, Pemberton Group',
    initials: 'AP',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        
        {/* Diagonal gold accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-navy-mid to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-px h-64 bg-gold opacity-30" />
        <div className="absolute top-32 right-0 w-px h-96 bg-gold opacity-20" />

        {/* Decorative circle */}
        <div className="absolute top-20 right-20 w-96 h-96 border border-gold/10 rounded-full" />
        <div className="absolute top-32 right-32 w-72 h-72 border border-gold/10 rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-40 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-6 animate-fade-up">Trusted Legal Advisors Since 2004</p>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-up animate-delay-100">
              Excellence in<br />
              <span className="text-gold">Legal</span>{' '}
              Consulting
            </h1>
            <p className="font-inter text-white/70 text-lg leading-relaxed mb-10 max-w-xl animate-fade-up animate-delay-200">
              Sterling Legal Partners delivers elite legal counsel to corporations, institutions, and high-net-worth individuals. Where precision meets principle.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
              <Link href="/contact" className="btn-primary">
                Get Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats card */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
                >
                  <p className="font-playfair text-4xl font-bold text-gold mb-2">{stat.value}</p>
                  <p className="font-inter text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="font-inter text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Practice Areas</p>
            <h2 className="heading-lg text-navy mb-5">Our Core Services</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="card-glass group p-10">
                <div className="text-gold mb-6 transition-transform duration-300 group-hover:scale-110">
                  {svc.icon}
                </div>
                <h3 className="heading-sm text-navy mb-4">{svc.title}</h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed mb-6">{svc.desc}</p>
                <Link href="/services" className="btn-outline text-xs">
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS MOBILE + ABOUT STRIP */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-playfair text-5xl font-bold text-gold mb-2">{stat.value}</p>
                <div className="w-8 h-px bg-gold mx-auto mb-3" />
                <p className="font-inter text-sm text-white/60 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">About Sterling</p>
              <h2 className="heading-lg text-white mb-6">
                Two Decades of<br />
                <span className="text-gold">Uncompromising</span> Excellence
              </h2>
              <p className="font-inter text-white/60 text-sm leading-relaxed mb-6">
                Founded in 2004, Sterling Legal Partners has grown from a boutique consultancy to one of the United Kingdom's most respected legal advisory firms. Our partners bring collective expertise from the world's leading law schools and global legal institutions.
              </p>
              <p className="font-inter text-white/60 text-sm leading-relaxed mb-8">
                We serve clients across 30+ jurisdictions, offering seamless cross-border legal strategy backed by deep local knowledge and an unwavering commitment to client outcomes.
              </p>
              <Link href="/about" className="btn-primary">
                Our Story
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Precision', desc: 'Every detail matters. We approach each mandate with meticulous attention.' },
                { title: 'Integrity', desc: 'Unyielding ethical standards are the foundation of every client relationship.' },
                { title: 'Innovation', desc: 'Forward-thinking legal strategies that anticipate tomorrow\'s challenges.' },
                { title: 'Discretion', desc: 'Absolute confidentiality on every matter, without exception.' },
              ].map((pillar) => (
                <div key={pillar.title} className="bg-white/5 border border-white/10 p-6 hover:border-gold/30 transition-all duration-300">
                  <div className="w-8 h-px bg-gold mb-3" />
                  <h4 className="font-playfair text-white font-bold text-lg mb-2">{pillar.title}</h4>
                  <p className="font-inter text-white/50 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Client Testimonials</p>
            <h2 className="heading-lg text-navy mb-5">Trusted by Leaders</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-10 shadow-card hover:shadow-card-hover transition-all duration-300 group relative">
                <div className="absolute top-8 right-8 font-playfair text-6xl text-gold/20 leading-none group-hover:text-gold/30 transition-colors duration-300">
                  "
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-inter text-gray-600 text-sm leading-relaxed mb-8 italic">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-navy rounded-full flex items-center justify-center">
                    <span className="font-inter text-xs text-gold font-semibold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-navy text-sm">{t.name}</p>
                    <p className="font-inter text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-gold-gradient py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Begin Your Legal Journey
          </h2>
          <p className="font-inter text-navy/70 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a confidential consultation with one of our senior partners. We'll provide a clear assessment of your situation with no obligation.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-navy text-white font-inter font-semibold tracking-wide px-10 py-5 hover:bg-navy-light transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
            Request Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
