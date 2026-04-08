import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { BiTrophy } from 'react-icons/bi'
import { FiAward } from 'react-icons/fi'
import { HiOutlineLightBulb, HiOutlineDocumentText } from 'react-icons/hi'

const awards = [
  {
    icon: BiTrophy,
    title: 'Best Paper Award',
    detail: '3D-Sec Workshop at ACM CCS 2025, Taipei, Taiwan',
    subtitle: '"Exaggeration-based Fake Cybersecurity News Detection"',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: BiTrophy,
    title: 'Bronze Medal',
    detail: 'International Exhibition of Inventions Geneva',
    subtitle: '"Data Intelligence Model for Flood Mapping"',
    gradient: 'from-amber-600 to-yellow-500',
  },
  {
    icon: BiTrophy,
    title: 'Silver Prize',
    detail: '2025 Belt & Road and BRICS Competition, Guangzhou, China',
    subtitle: '"MSA-FS: Memo Search Algorithm-Based Feature Selection"',
    gradient: 'from-gray-400 to-gray-500',
  },
  {
    icon: FiAward,
    title: 'Patent Submitted',
    detail: '#US63/748845',
    subtitle: '"Hybrid AI System for Flood Susceptibility Mapping"',
    gradient: 'from-violet-500 to-indigo-500',
  },
]

const highlights = [
  {
    icon: HiOutlineDocumentText,
    value: '37',
    label: 'Publications',
  },
  {
    icon: HiOutlineDocumentText,
    value: '3,074',
    label: 'Citations (Scholar)',
  },
  {
    icon: HiOutlineLightBulb,
    value: '15',
    label: 'H-Index (Scholar)',
  },
  {
    icon: HiOutlineLightBulb,
    value: '12',
    label: 'H-Index (Scopus)',
  },
]

export default function Awards() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="awards" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0a0a1a] dark:via-[#0d0d22] dark:to-[#0a0a1a]" />
      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto mb-6" />
          <p className="section-subtitle">
            Recognition for research excellence and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map((award, i) => (
            <motion.div
              key={award.title + award.detail}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${award.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <award.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{award.title}</h3>
                  <p className="text-sm text-violet-600 dark:text-violet-400 font-medium mb-1">{award.detail}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 italic">{award.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-14"
        >
          {highlights.map((h) => (
            <div key={h.label} className="flex items-center gap-3 px-6 py-3 glass-card">
              <h.icon className="w-5 h-5 text-violet-500" />
              <div>
                <span className="text-xl font-extrabold text-gray-900 dark:text-white">{h.value}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{h.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
