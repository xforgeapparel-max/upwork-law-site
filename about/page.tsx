import Link from 'next/link'

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Justice & Integrity',
    desc: 'We uphold the highest ethical standards in every engagement, ensuring our counsel reflects both the letter and spirit of the law. Our reputation is built on trust — earned over two decades and thousands of mandates.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Precision & Excellence',
    desc: 'Legal complexity demands clarity. Our team dissects every dimension of your matter with surgical precision, delivering strategies that are not only legally sound but commercially intelligent.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Client Partnership',
    desc: 'We view every client relationship as a long-term partnership. Your success is our benchmark. We provide not just legal expertise but strategic counsel that aligns with your broader business objectives.',
  },
]

const whyUs = [
  { number: '01', title: 'Senior Partner Access', desc: 'Every client receives direct access to senior partners, not associates. Your matter is handled by those with the deepest expertise.' },
  { number: '02', title: 'Global Network', desc: 'Our network spans 30+ jurisdictions, enabling seamless cross-border legal strategy for internationally operating clients.' },
  { number: '03', title: 'Sector Specialisation', desc: 'Deep industry knowledge across financial services, real estate, technology, and life sciences enables context-aware counsel.' },
  { number: '04', title: 'Rapid Response', desc: 'Legal matters don\'t wait for business hours. Our senior team is available around the clock for urgent matters.' },
  { number: '05', title: 'Transparent Billing', desc: 'No hidden fees, no billable hour surprises. Our fee structures are agreed upfront and adhered to with strict discipline.' },
  { number: '06', title: 'Proven Track Record', desc: 'A 98% success rate across 500+ clients over 20 years speaks to the calibre and reliability of our advisory work.' },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="section-label mb-5">Our Firm</p>
          <h1 className="heading-xl text-white mb-6">
            About <span className="text-gold">Sterling</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="font-inter text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Two decades of elite legal advisory. Thousands of successful outcomes. One unwavering standard.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="section-label mb-5">Our Story</p>
            <h2 className="heading-lg text-navy mb-8">
              Built on Principle,<br />Driven by Excellence
            </h2>
            <div className="space-y-5 font-inter text-gray-500 text-sm leading-relaxed">
              <p>
                Sterling Legal Partners was founded in 2004 by Sir Edward Sterling, a former barrister of the Inner Temple with over 25 years of experience advising the UK's largest corporations. His vision was simple but demanding: to create a legal consultancy that combined the intellectual rigour of the finest chambers with the commercial acuity of a top-tier strategy firm.
              </p>
              <p>
                From its origins as a four-partner boutique in Gray's Inn, the firm has grown into a 50-attorney powerhouse headquartered in Canary Wharf, with affiliated practices in Frankfurt, Singapore, and Dubai. That growth has never compromised the founding principle: that every client deserves the very best.
              </p>
              <p>
                Today, Sterling Legal Partners advises FTSE 100 companies, sovereign wealth funds, and global private equity firms on their most consequential legal challenges. Our partners are recognised in Legal 500 and Chambers and Partners as leading individuals in their respective fields.
              </p>
              <p>
                We remain proudly independent. No institutional affiliations, no conflicts of interest, no compromises.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-navy p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 border border-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <p className="font-playfair text-5xl font-bold text-gold mb-3">2004</p>
              <p className="font-inter text-white/60 text-sm">Year of founding in London</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { v: '£2.4B+', l: 'Client assets under advisory' },
                { v: '30+', l: 'Jurisdictions served' },
                { v: 'Top 5', l: 'UK Legal 500 ranking' },
                { v: '100%', l: 'Partner-led engagements' },
              ].map((item) => (
                <div key={item.l} className="bg-gray-50 border border-gray-100 p-6">
                  <p className="font-playfair text-3xl font-bold text-navy mb-1">{item.v}</p>
                  <p className="font-inter text-xs text-gray-400">{item.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Stand For</p>
            <h2 className="heading-lg text-navy mb-5">Mission & Values</h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="font-inter text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Our work is guided by three foundational pillars that have defined Sterling since its inception.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val) => (
              <div key={val.title} className="bg-white p-10 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
                <div className="w-10 h-px bg-gold mb-5" />
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">{val.title}</h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Advantage</p>
            <h2 className="heading-lg text-white mb-5">
              Why Choose <span className="text-gold">Sterling</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.number} className="border border-white/10 p-8 hover:border-gold/30 hover:bg-white/5 transition-all duration-300 group">
                <p className="font-playfair text-4xl font-bold text-gold/30 mb-4 group-hover:text-gold/50 transition-colors duration-300">
                  {item.number}
                </p>
                <h4 className="font-playfair text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="font-inter text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/contact" className="btn-primary">
              Start Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
