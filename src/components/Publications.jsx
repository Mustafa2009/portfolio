import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { HiExternalLink } from 'react-icons/hi'

const publications = [
  {
    title: 'Contemporary smart hydroponics systems: Taxonomy, enabling technologies, and challenges',
    authors: 'Ahmed A., Alnawasrah R., Almadani B., Aliyu F., Ghaleb M. M. S.',
    journal: 'Internet of Things',
    vol: 'vol. 34, 2025',
    index: 'SCI-Expanded, Scopus',
    year: 2025,
  },
  {
    title: 'An OTP and watermarking based partial homomorphic approach to authenticated and integrated cloud computing',
    authors: 'Alshaikh M., Kara M., Binbeshr F., Ghaleb M. M. S.',
    journal: 'Cluster Computing',
    vol: 'vol. 28, no. 8, 2025',
    index: 'SCI-Expanded, Scopus',
    year: 2025,
  },
  {
    title: 'The Rise of Cognitive SOCs: A Systematic Literature Review on AI Approaches',
    authors: 'Binbeshr F., Imam M., Ghaleb M. M. S., Hamdan M., Rahim M. A., Hammoudeh M.',
    journal: 'IEEE Open Journal of the Computer Society',
    vol: 'vol. 6, pp. 360-379, 2025',
    index: 'ESCI, Scopus',
    year: 2025,
  },
  {
    title: 'Explainable AI for Lightweight Network Traffic Classification Using Depthwise Separable Convolutions',
    authors: 'Ghaleb M. M. S., Hamdan M., Barnawi A. Y., Gambo M., Danasabe A., Bello S., et al.',
    journal: 'IEEE Open Journal of the Computer Society',
    vol: 'vol. 6, pp. 908-920, 2025',
    index: 'ESCI, Scopus',
    year: 2025,
  },
  {
    title: 'UAV Path Planning and Trajectory Optimization: A Comprehensive Survey',
    authors: 'Sheltami T., Ahmed G., Ghaleb M. M. S., Mahmoud A.',
    journal: 'Arabian Journal for Science and Engineering',
    vol: '2025',
    index: 'SCI-Expanded, Scopus',
    year: 2025,
  },
  {
    title: 'Efficient white blood cell identification with hybrid inception-xception network',
    authors: 'Saleh R. A. A., Ghaleb M. M. S., Shafik W., Ertunç H. M.',
    journal: 'Journal of Supercomputing',
    vol: 'vol. 80, no. 17, pp. 25155-25187, 2024',
    index: 'SCI-Expanded, Scopus',
    year: 2024,
  },
  {
    title: 'Flood subsidence susceptibility mapping using persistent scatterer SAR interferometry technique coupled with novel metaheuristic approaches from Jeddah, Saudi Arabia',
    authors: 'Ghaleb M. M. S., et al.',
    journal: 'Scientific Reports',
    vol: '2024',
    index: 'SCI-Expanded, Scopus',
    year: 2024,
  },
  {
    title: 'Exaggeration-based fake cybersecurity news detection using ChatGPT',
    authors: 'Ghaleb M. M. S., et al.',
    journal: 'ACM CCS 3D-Sec Workshop',
    vol: '2025',
    index: 'Conference (Best Paper)',
    year: 2025,
  },
]

export default function Publications() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="publications" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0a0a1a] dark:via-[#0d0d22] dark:to-[#0a0a1a]" />
      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Recent <span className="gradient-text">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto mb-6" />
          <p className="section-subtitle">
            Selected recent publications — 37 total, including 25 WoS-indexed
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card p-5 group hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white leading-snug mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="italic text-violet-600 dark:text-violet-400 font-medium">{pub.journal}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-500 dark:text-gray-400">{pub.vol}</span>
                    <span className="text-gray-400">|</span>
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400">{pub.index}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://scholar.google.com/citations?user=XscwqRcAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All on Google Scholar
            <HiExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
