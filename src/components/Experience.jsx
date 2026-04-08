import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    role: 'Assistant Professor',
    company: 'Department of Software Engineering, Kocaeli University, Turkiye',
    period: 'Oct 2025 – Present',
    description:
      'Teaching YZM507 (Big Distributed Application Development), YZM212 (Database Management Systems), and YZM210 (Algorithm Analysis). Leading research in AI/ML, cybersecurity, and IoT.',
    type: 'work',
  },
  {
    role: 'Instructor',
    company: 'King Fahd University of Petroleum & Minerals (KFUPM), KSA',
    period: '2023 – 2025',
    description:
      'Taught graduate and undergraduate courses: Big Data Analytics (9.52/10), Data Science (9.1/10), Artificial Intelligence (9.01/10), Computer Networks (8.8/10).',
    type: 'work',
  },
  {
    role: 'Postdoctoral Researcher',
    company: 'IRC for Intelligent Secure Systems (IRC-ISS), KFUPM',
    period: '2022 – 2025',
    description:
      'Conducted research on cybersecurity, federated learning, and IoT security. Supported funded projects and co-authored peer-reviewed publications.',
    type: 'work',
  },
  {
    role: 'Ph.D., Computer Science',
    company: 'College of Computing and Mathematics, KFUPM (QS Rank #67)',
    period: '2015 – 2021',
    description:
      'Thesis: "Trust modelling for IoT environments." GPA: 3.68/4.00. Research on IoT trust models and security frameworks.',
    type: 'education',
  },
  {
    role: 'M.Sc., Computer Science',
    company: 'College of Computing and Mathematics, KFUPM (QS Rank #67)',
    period: '2011 – 2015',
    description:
      'Thesis: "Federated database framework for disease outbreak notification systems." GPA: 3.4/4.00.',
    type: 'education',
  },
  {
    role: 'Bachelor in Education, Computer',
    company: 'King Khaled University, Abha, KSA (QS Rank #535)',
    period: '2002 – 2007',
    description:
      'GPA: 4.99/5.00 (Excellent). Graduated with top honors.',
    type: 'education',
  },
]

export default function Experience() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#0d0d22] dark:via-[#0a0a1a] dark:to-[#0d0d22]" />
      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto mb-6" />
          <p className="section-subtitle">Experience and education</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-indigo-500/30 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const Icon = exp.type === 'work' ? HiBriefcase : HiAcademicCap
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={exp.role + exp.period}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-6 md:left-1/2 w-10 h-10 -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30 ring-4 ring-white dark:ring-[#0a0a1a]">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-14' : 'md:pl-14'}`}>
                    <div className="glass-card p-6 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 mb-2">
                        {exp.period}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.company}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
