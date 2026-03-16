import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-text-secondary block">
            Contact
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-4 text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
            Available for freelance projects, collaborations, and creative partnerships.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-14 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-medium tracking-wider uppercase text-text-secondary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 bg-white border border-border rounded-lg text-sm
                           transition-all duration-300
                           focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium tracking-wider uppercase text-text-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 bg-white border border-border rounded-lg text-sm
                           transition-all duration-300
                           focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium tracking-wider uppercase text-text-secondary mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3.5 bg-white border border-border rounded-lg text-sm resize-none
                         transition-all duration-300
                         focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              data-hover
              className="px-10 py-4 bg-accent text-bg text-sm font-medium tracking-wider uppercase
                         transition-all duration-300
                         hover:bg-text-secondary hover:px-14 hover:shadow-xl
                         active:scale-95"
            >
              {submitted ? '✓ Sent!' : 'Send Message'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
