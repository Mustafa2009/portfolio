import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi'
import { SiGooglescholar } from 'react-icons/si'
import { FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa'
import { HiOutlinePaperAirplane } from 'react-icons/hi'

export default function Contact() {
  const [ref, inView] = useInView(0.1)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50 dark:from-[#0d0d22] dark:via-[#0a0a1a] dark:to-[#0a0a1a]" />
      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto mb-6" />
          <p className="section-subtitle">
            Interested in collaboration or research? Reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 space-y-5">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Contact Information</h3>
              {[
                { icon: HiMail, text: 'mustafa.ghaleb@kocaeli.edu.tr', href: 'mailto:mustafa.ghaleb@kocaeli.edu.tr' },
                { icon: HiLocationMarker, text: 'Izmit, Turkiye', href: null },
                { icon: HiPhone, text: '+90 538 215 59 20', href: 'tel:+905382155920' },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-950/50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium">
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{text}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="glass-card p-6">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Academic Profiles</h4>
              <div className="flex gap-3">
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
                    className="group w-11 h-11 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-violet-100 dark:hover:bg-violet-950/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 glass-card p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 outline-none transition-all text-sm placeholder:text-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 outline-none transition-all text-sm placeholder:text-gray-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 outline-none transition-all resize-none text-sm placeholder:text-gray-400"
                placeholder="Tell me about your research or collaboration idea..."
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                submitted
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5'
              }`}
            >
              {submitted ? (
                <>Sent Successfully!</>
              ) : (
                <>
                  Send Message
                  <HiOutlinePaperAirplane className="w-4 h-4 rotate-90" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
