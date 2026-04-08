import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineAcademicCap } from 'react-icons/hi'
import { SiGooglescholar } from 'react-icons/si'
import { FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa'

function FloatingShape({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      <div className="absolute inset-0 mesh-gradient" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape
          className="top-[15%] left-[10%] w-72 h-72 bg-violet-300/20 dark:bg-violet-600/10 rounded-full blur-3xl"
          delay={0}
        />
        <FloatingShape
          className="bottom-[15%] right-[10%] w-96 h-96 bg-cyan-300/20 dark:bg-cyan-600/10 rounded-full blur-3xl"
          delay={2}
        />
        <FloatingShape
          className="top-[50%] left-[50%] w-64 h-64 bg-pink-300/15 dark:bg-pink-600/10 rounded-full blur-3xl"
          delay={4}
        />

        <div className="absolute top-20 right-[20%] w-2 h-2 bg-violet-400/60 rounded-full animate-pulse-slow" />
        <div className="absolute top-[40%] left-[15%] w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] right-[30%] w-1 h-1 bg-pink-400/60 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] left-[40%] w-1.5 h-1.5 bg-indigo-400/40 rounded-full animate-pulse-slow" style={{ animationDelay: '3s' }} />

        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-100/80 dark:bg-violet-950/50 border border-violet-200/50 dark:border-violet-800/30 mb-8"
          >
            <HiOutlineAcademicCap className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Assistant Professor of Software Engineering</span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              Dr.{' '}
              <span className="gradient-text">Mustafa</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="block gradient-text-alt"
            >
              Ghaleb
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {['Computer Networks', 'Cybersecurity', 'IoT', 'Deep Learning', 'NLP', 'Trust Modeling'].map((tag, i) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-sm font-medium rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Kocaeli University, Turkiye — Researching computer networks, cybersecurity, IoT, and deep learning applications
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a href="#projects" className="btn-primary">
            View Research
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: SiGooglescholar, href: 'https://scholar.google.com/citations?user=XscwqRcAAAAJ&hl=en&oi=ao', label: 'Google Scholar' },
            { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
            { icon: FaGlobe, href: 'https://avesis.kocaeli.edu.tr/mustafa.ghaleb', label: 'AVESIS Profile' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group p-3 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-1 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase">Scroll</span>
        <HiArrowDown className="w-4 h-4 text-gray-400" />
      </motion.div>
    </section>
  )
}
