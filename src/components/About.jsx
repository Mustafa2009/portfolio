import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { HiOutlineBookOpen, HiOutlineStar, HiOutlineAcademicCap, HiOutlineBadgeCheck } from 'react-icons/hi'

export default function About() {
  const [ref, inView] = useInView(0.15)

  const stats = [
    { icon: HiOutlineBookOpen, label: 'Publications', value: '37', color: 'from-violet-500 to-indigo-500' },
    { icon: HiOutlineStar, label: 'H-Index (Scholar)', value: '15', color: 'from-amber-500 to-orange-500' },
    { icon: HiOutlineBadgeCheck, label: 'Citations', value: '3,074', color: 'from-cyan-500 to-blue-500' },
    { icon: HiOutlineAcademicCap, label: 'H-Index (Scopus)', value: '12', color: 'from-emerald-500 to-teal-500' },
  ]

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0a0a1a] dark:via-[#0d0d22] dark:to-[#0a0a1a]" />
      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative aspect-[4/5] max-w-sm mx-auto glass-card overflow-hidden shadow-2xl">
                <img
                  src="/photo.png"
                  alt="Dr. Mustafa Ghaleb"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 rounded-2xl -z-10 rotate-6" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Mustafa Ghaleb is an <span className="font-semibold text-gray-900 dark:text-white">Assistant Professor</span> in the Department of Software Engineering at <span className="font-semibold text-gray-900 dark:text-white">Kocaeli University</span>, Turkiye.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Before joining Kocaeli University, he was a <span className="text-violet-600 dark:text-violet-400 font-medium">Postdoctoral Research Fellow</span> at the Interdisciplinary Research Center for Intelligent Secure Systems (IRC-ISS) at King Fahd University of Petroleum and Minerals (KFUPM) in Saudi Arabia. He obtained his M.Sc. and Ph.D. degrees in Computer Science from KFUPM.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Research interests include <span className="text-cyan-600 dark:text-cyan-400 font-medium">computer networks</span>, <span className="text-indigo-600 dark:text-indigo-400 font-medium">cybersecurity</span>, Internet of Things (IoT), distributed computing, NLP, trust modeling, and <span className="text-violet-600 dark:text-violet-400 font-medium">deep learning</span> applications in various domains.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="glass-card p-5 group hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-2xl font-extrabold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
