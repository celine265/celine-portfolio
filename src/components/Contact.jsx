import { motion } from 'framer-motion';
import { contactLinks } from '../constants/data';
import { FiSend } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <motion.p
          className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I&apos;m always open to discussing new opportunities, collaborations,
          and impactful technology projects.
        </motion.p>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-surface-800/70 backdrop-blur-md border border-surface-500/30 rounded-2xl p-8 sm:p-10 shadow-xl">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel={
                    link.label === 'Email'
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-surface-900/80 rounded-2xl p-6 border border-surface-600 group-hover:border-accent/30 transition-all duration-300 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <link.icon />
                    </div>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <div className="mt-8 pt-8 border-t border-surface-600 text-center">
              <a
                href="mailto:bulyarcelina@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium transition-all duration-200 shadow-lg shadow-accent/25"
              >
                <FiSend className="w-4 h-4" />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
