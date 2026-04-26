import Link from 'next/link'

const services = [
  {
    id: '01',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Corporate Law',
    shortDesc: 'Structuring, governance, and transactional counsel for corporations at every stage.',
    desc: 'From incorporation through to complex governance restructuring, our corporate law team advises on the full lifecycle of corporate entities. We handle board advisory, shareholder agreements, regulatory compliance, and cross-border structural matters with equal command.',
    areas: ['Board & Governance Advisory', 'Shareholder Agreements', 'Joint Ventures', 'Corporate Restructuring', 'Regulatory Filings', 'IPO Preparation'],
  },
  {
    id: '02',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Tax Advisory',
    shortDesc: 'Strategic tax planning and structuring that protects value and ensures compliance.',
    desc: 'Our tax advisory practice combines deep technical knowledge of UK and international tax law with sophisticated commercial insight. We design tax-efficient structures for corporate transactions, estates, and international operations — always within the bounds of full compliance.',
    areas: ['Corporate Tax Planning', 'International Tax Structuring', 'VAT Advisory', 'Estate & Succession Planning', 'Transfer Pricing', 'Tax Dispute Resolution'],
  },
  {
    id: '03',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Compliance & Risk Management',
    shortDesc: 'Proactive frameworks to shield your business from regulatory and operational risk.',
    desc: 'In an era of accelerating regulatory complexity, proactive compliance management is not optional — it is existential. Our team designs comprehensive compliance frameworks tailored to your industry, risk appetite, and operating footprint, then monitors and adapts them as regulations evolve.',
    areas: ['Regulatory Compliance Programmes', 'AML & KYC Frameworks', 'Data Protection (GDPR)', 'Financial Services Regulation', 'Internal Investigations', 'Risk Assessment & Mitigation'],
  },
  {
    id: '04',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Mergers & Acquisitions',
    shortDesc: 'End-to-end M&A counsel from deal strategy through post-completion integration.',
    desc: 'Sterling has advised on some of the UK's most significant transactions. Our M&A practice covers the full deal lifecycle: strategic advisory, target identification, due diligence, negotiation, documentation, regulatory clearance, and post-merger integration — delivering certainty at every stage.',
    areas: ['Deal Structuring & Strategy', 'Due Diligence', 'SPA & Transaction Documents', 'Regulatory Approvals', 'Vendor Advisory', 'Post-Merger Integration'],
  },
  {
    id: '05',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Employment Law',
    shortDesc: 'Protecting employers and employees in an increasingly complex HR landscape.',
    desc: 'Employment law is evolving rapidly. Our practice advises boards and HR teams on everything from senior executive contracts and incentive schemes to complex tribunal matters and workforce restructuring. We provide pragmatic, commercially sensible advice that protects your organisation while managing risk.',
    areas: ['Executive Contracts & Incentives', 'Redundancy & Restructuring', 'Employment Tribunal Defence', 'Discrimination & Harassment', 'TUPE Transfers', 'HR Policy & Handbook Drafting'],
  },
  {
    id: '06',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Contract Management',
    shortDesc: 'Drafting, review, and lifecycle management of commercial contracts.',
    desc: 'Commercial contracts form the backbone of every business relationship. Our contract management practice covers the full lifecycle — drafting, negotiation, review, dispute resolution, and renewal — ensuring your agreements are watertight, enforceable, and strategically aligned with your business interests.',
    areas: ['Commercial Contract Drafting', 'Contract Review & Negotiation', 'Framework Agreements', 'Dispute Resolution & Litigation', 'Contract Lifecycle Management', 'Template Library Creation'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="section-label mb-5">What We Do</p>
          <h1 className="heading-xl text-white mb-6">
            Our <span className="text-gold">Services</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="font-inter text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive legal advisory across six practice areas, delivered by some of the UK's most accomplished legal professionals.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.id} className="card-glass group overflow-hidden">
                <div className="p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-gold group-hover:scale-110 transition-transform duration-300">
                      {svc.icon}
                    </div>
                    <span className="font-inter text-4xl font-bold text-gray-100">{svc.id}</span>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-navy mb-3">{svc.title}</h3>
                  <p className="font-inter text-gold text-xs font-medium mb-4">{svc.shortDesc}</p>
                  <p className="font-inter text-gray-500 text-sm leading-relaxed mb-6">{svc.desc}</p>

                  <div className="border-t border-gray-100 pt-6">
                    <p className="font-inter text-xs text-gray-400 tracking-widest uppercase mb-3">Areas Covered</p>
                    <ul className="space-y-2">
                      {svc.areas.slice(0, 4).map((area) => (
                        <li key={area} className="flex items-center gap-2 font-inter text-xs text-gray-500">
                          <div className="w-4 h-px bg-gold flex-shrink-0" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-10 pb-8">
                  <Link href="/contact" className="btn-outline w-full justify-center text-xs">
                    Enquire About This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">How We Work</p>
            <h2 className="heading-lg text-navy mb-5">Our Process</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Consultation', desc: 'A confidential discussion with a senior partner to understand your matter and objectives.' },
              { step: '02', title: 'Assessment & Strategy', desc: 'We analyse your position comprehensively and develop a tailored legal strategy.' },
              { step: '03', title: 'Execution', desc: 'Our team implements the strategy with precision, keeping you informed at every stage.' },
              { step: '04', title: 'Resolution & Review', desc: 'We achieve your objectives and conduct a post-matter review to consolidate learning.' },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px border-t border-dashed border-gold/30 z-0" />
                )}
                <div className="relative bg-white p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <p className="font-inter text-5xl font-bold text-gold mb-4">{item.step}</p>
                  <h4 className="font-playfair text-lg font-bold text-navy mb-3">{item.title}</h4>
                  <p className="font-inter text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="heading-lg text-white mb-6">
            Discuss Your <span className="text-gold">Legal Matter</span>
          </h2>
          <p className="font-inter text-white/60 text-sm leading-relaxed mb-10">
            All enquiries are treated with absolute confidentiality. Our senior partners are ready to provide an initial assessment of your situation.
          </p>
          <Link href="/contact" className="btn-primary">
            Arrange a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
