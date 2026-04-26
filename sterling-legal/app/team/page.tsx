import Image from 'next/image'
import Link from 'next/link'

const team = [
  {
    name: 'Sir Edward Sterling',
    title: 'Founding Partner',
    specialty: 'Corporate Law & M&A',
    bio: 'Called to the bar in 1989, Sir Edward brings 35 years of commanding legal expertise. Former QC and head of chambers at Gray\'s Inn.',
    img: 'https://placehold.co/400x480/0A1628/C9A84C?text=ES',
  },
  {
    name: 'Victoria Hargreaves KC',
    title: 'Senior Partner',
    specialty: 'Mergers & Acquisitions',
    bio: 'Victoria has led over 150 major corporate transactions totalling in excess of £12 billion. Ranked Band 1 by Chambers & Partners.',
    img: 'https://placehold.co/400x480/0A1628/C9A84C?text=VH',
  },
  {
    name: 'Dr. Marcus Chen',
    title: 'Partner',
    specialty: 'Tax Advisory',
    bio: 'A PhD in international tax law from Oxford, Marcus has advised governments and multinationals across four continents on complex tax matters.',
    img: 'https://placehold.co/400x480/0A1628/C9A84C?text=MC',
  },
  {
    name: 'Isabelle Fontaine',
    title: 'Partner',
    specialty: 'Compliance & Risk',
    bio: 'Former Head of Legal at the FCA, Isabelle\'s regulatory insight is unmatched. She leads our financial services compliance practice.',
    img: 'https://placehold.co/400x480/0A1628/C9A84C?text=IF',
  },
  {
    name: 'James Thornton',
    title: 'Partner',
    specialty: 'Employment Law',
    bio: 'With 20 years at the employment bar, James has successfully defended blue-chip clients in hundreds of tribunal and High Court proceedings.',
    img: 'https://placehold.co/400x480/0A1628/C9A84C?text=JT',
  },
  {
    name: 'Priya Mehta',
    title: 'Senior Associate',
    specialty: 'Contract Management',
    bio: 'Priya specialises in complex commercial contracts and cross-border commercial disputes. A rising star recognised in Legal 500 2024.',
    img: 'https://placehold.co/400x480/0A1628/C9A84C?text=PM',
  },
]

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

export default function TeamPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="section-label mb-5">The People Behind the Work</p>
          <h1 className="heading-xl text-white mb-6">
            Our <span className="text-gold">Team</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="font-inter text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Our partners and senior associates represent the finest legal minds in the United Kingdom, united by an unwavering standard of excellence.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
              >
                {/* Photo */}
                <div className="relative overflow-hidden bg-navy-mid" style={{ aspectRatio: '4/4.8' }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div>
                      <p className="font-inter text-white/80 text-sm leading-relaxed mb-5">{member.bio}</p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-gold font-inter text-xs font-semibold border border-gold px-4 py-2 hover:bg-gold hover:text-navy transition-colors duration-200"
                      >
                        <LinkedInIcon />
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="bg-white p-7 border-t-2 border-gold">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-navy mb-1">{member.name}</h3>
                      <p className="font-inter text-gold text-xs font-semibold tracking-wide mb-1">{member.title}</p>
                      <p className="font-inter text-gray-400 text-xs">{member.specialty}</p>
                    </div>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-gold transition-colors duration-200 mt-1"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS BAND */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Credentials & Recognition</p>
            <h2 className="heading-md text-navy">Our Team's Distinctions</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Chambers & Partners', value: 'Band 1 Rated' },
              { label: 'Legal 500', value: 'Top Tier 2024' },
              { label: 'The Lawyer', value: 'Top 100 Firm' },
              { label: 'Law Society', value: 'Accredited' },
            ].map((cred) => (
              <div key={cred.label} className="bg-white p-8 text-center shadow-card">
                <p className="font-playfair text-lg font-bold text-navy mb-2">{cred.value}</p>
                <p className="font-inter text-xs text-gray-400">{cred.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-5">Careers at Sterling</p>
          <h2 className="heading-lg text-white mb-6">
            Join the <span className="text-gold">Sterling</span> Team
          </h2>
          <p className="font-inter text-white/60 text-sm leading-relaxed mb-10">
            We are always seeking exceptional legal talent. If you combine intellectual rigour with commercial acuity and an uncompromising standard of professionalism, we would welcome your enquiry.
          </p>
          <Link href="/contact" className="btn-primary">
            Express Interest
          </Link>
        </div>
      </section>
    </>
  )
}
