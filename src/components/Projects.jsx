import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { HiAcademicCap } from 'react-icons/hi'

const projects = [
  {
    title: 'Building Smarter, Collaborative Cybersecurity Defenses',
    description:
      'Developing advanced collaborative cybersecurity defense mechanisms leveraging distributed intelligence and shared threat intelligence across networked systems.',
    tags: ['Cybersecurity', 'Collaborative Defense', 'AI'],
    role: 'Principal Investigator',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Coordinated GAN and GNN-Based Backdoor Attacks in Federated Learning',
    description:
      'Investigating vulnerabilities in federated learning systems through coordinated attacks using GANs and Graph Neural Networks for backdoor injection.',
    tags: ['Federated Learning', 'GAN', 'GNN', 'Security'],
    role: 'Co-PI',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Apollo – AI/ML Framework for Cyber Attack Education',
    description:
      'An AI/ML-powered framework delivering personalized education and training on cyber attacks, enabling adaptive learning paths for cybersecurity education.',
    tags: ['AI/ML', 'Education', 'Personalization'],
    role: 'Co-PI',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Disease Outbreak Notification System',
    description:
      'Federated database framework for disease outbreak information and notification systems using a web service approach for real-time public health monitoring.',
    tags: ['Web Services', 'Database', 'Public Health'],
    role: 'Researcher',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Massive Data Handling in Petrochemical Industries',
    description:
      'Scalable data handling and analytics solutions for the petrochemical industry, addressing big data storage, processing, and real-time analysis challenges.',
    tags: ['Big Data', 'Petrochemical', 'Analytics'],
    role: 'Researcher',
    gradient: 'from-pink-500 to-rose-500',
  },
]

export default function Projects() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0a0a1a] dark:via-[#0d0d22] dark:to-[#0a0a1a]" />
      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Funded <span className="gradient-text">Research</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto mb-6" />
          <p className="section-subtitle">
            Research projects with external funding and institutional support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card overflow-hidden hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                    <HiAcademicCap className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.role}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 rounded-lg font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
