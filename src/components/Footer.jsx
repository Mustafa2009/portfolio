import { SiGooglescholar } from 'react-icons/si'
import { FaLinkedin, FaGlobe } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-gray-100 dark:from-[#0a0a1a] dark:to-[#080818]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <span className="text-white font-bold text-xs">MG</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} Dr. Mustafa Ghaleb. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {[
            { icon: SiGooglescholar, href: 'https://scholar.google.com/citations?user=XscwqRcAAAAJ&hl=en&oi=ao', label: 'Google Scholar' },
            { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FaGlobe, href: 'https://avesis.kocaeli.edu.tr/mustafa.ghaleb', label: 'AVESIS' },
            { icon: FaGlobe, href: 'https://orcid.org/0000-0003-2842-6532', label: 'ORCID' },
            { icon: FaGlobe, href: 'https://www.scopus.com/authid/detail.uri?authorId=55994631000', label: 'Scopus' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-gray-200/50 dark:bg-white/5 flex items-center justify-center hover:bg-violet-100 dark:hover:bg-violet-950/50 transition-all duration-300 text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
