import { motion } from 'framer-motion'
import { useInView } from './useInView'
import {
  FaPython,
  FaJava,
  FaLinux,
  FaNetworkWired,
} from 'react-icons/fa'
import {
  SiPytorch,
  SiTensorflow,
  SiCplusplus,
  SiWireshark,
  SiScikitlearn,
  SiPandas,
  SiJupyter,
  SiGooglecolab,
} from 'react-icons/si'
import {
  HiCode,
  HiDatabase,
  HiShieldCheck,
  HiChip,
} from 'react-icons/hi'
import { BsGearFill, BsGraphUp } from 'react-icons/bs'

const categories = [
  {
    name: 'Programming',
    skills: [
      { name: 'Python', icon: FaPython, color: '#3776AB', level: 95 },
      { name: 'Java', icon: FaJava, color: '#ED8B00', level: 82 },
      { name: 'C/C++', icon: SiCplusplus, color: '#00599C', level: 80 },
      { name: 'Bash', icon: HiCode, color: '#4EAA25', level: 78 },
    ],
  },
  {
    name: 'AI / ML',
    skills: [
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', level: 90 },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', level: 88 },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E', level: 92 },
      { name: 'Jupyter', icon: SiJupyter, color: '#F37626', level: 88 },
      { name: 'Pandas', icon: SiPandas, color: '#150458', level: 85 },
      { name: 'Google Colab', icon: SiGooglecolab, color: '#F9AB00', level: 85 },
    ],
  },
  {
    name: 'Security & Networking',
    skills: [
      { name: 'Cybersecurity', icon: HiShieldCheck, color: '#10B981', level: 88 },
      { name: 'Wireshark', icon: SiWireshark, color: '#1679A7', level: 80 },
      { name: 'TCP/IP', icon: FaNetworkWired, color: '#0EA5E9', level: 82 },
      { name: 'Federated Learning', icon: HiChip, color: '#8B5CF6', level: 90 },
    ],
  },
  {
    name: 'Platforms & Tools',
    skills: [
      { name: 'Linux', icon: FaLinux, color: '#FCC624', level: 90 },
      { name: 'Databases', icon: HiDatabase, color: '#336791', level: 85 },
      { name: 'SPSS', icon: BsGraphUp, color: '#1E88E5', level: 78 },
      { name: 'Simulation', icon: BsGearFill, color: '#6366F1', level: 80 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#0d0d22] dark:via-[#0a0a1a] dark:to-[#0d0d22]" />
      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto mb-6" />
          <p className="section-subtitle">
            Programming languages, frameworks, and research tools
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, ci) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-gradient-to-r from-violet-500 to-transparent rounded-full" />
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + ci * 0.1 + i * 0.05 }}
                    className="group glass-card p-5 text-center hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative mx-auto w-12 h-12 mb-3">
                      <div
                        className="absolute inset-0 rounded-xl opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{ backgroundColor: skill.color }}
                      />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <skill.icon
                          className="w-7 h-7 transition-transform group-hover:scale-110"
                          style={{ color: skill.color }}
                        />
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">{skill.name}</h4>
                    <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.6 + ci * 0.1 + i * 0.05 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
