import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_zz5l0eo';
const TEMPLATE_ID = 'template_ki5caqw';
const PUBLIC_KEY = 'yus7xgIE2q8EMen15';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-text-secondary block"
        >
          Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Let's Work Together
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
           <div className="md:col-span-4 italic text-text-secondary text-sm leading-relaxed border-l border-border pl-6">
             Available for freelance projects, collaborations, and creative partnerships.
             <div className="mt-12">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-4">Direct Email</p>
            <a
              href="mailto:hello@junaidmirza.com"
              className="text-lg md:text-xl font-normal tracking-tight hover:opacity-50 transition-opacity underline underline-offset-8 decoration-white/10"
            >
              hello@junaidmirza.com
            </a>
          </div>
             <div className="mt-8 flex flex-col gap-4 non-italic font-bold tracking-[0.1em] uppercase text-[10px]">
               <a href="https://www.linkedin.com/in/junaid-bro/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline underline-offset-4 decoration-border">LinkedIn</a>
               <a href="#" className="hover:text-accent transition-colors underline underline-offset-4 decoration-border">Awwwards</a>
             </div>
           </div>

           <motion.form
             onSubmit={handleSubmit}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 0.7 }}
             className="md:col-span-8 space-y-10"
           >
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
               <div className="group">
                 <label htmlFor="name" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-text-secondary mb-3 group-focus-within:text-accent transition-colors">
                   Name
                 </label>
                 <input
                   type="text"
                   id="name"
                   name="name"
                   value={form.name}
                   onChange={handleChange}
                   required
                   className="w-full bg-transparent border-b border-border py-2 text-sm focus:outline-none focus:border-accent transition-all duration-300"
                   placeholder="Enter your name"
                 />
               </div>
               <div className="group">
                 <label htmlFor="email" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-text-secondary mb-3 group-focus-within:text-accent transition-colors">
                   Email
                 </label>
                 <input
                   type="email"
                   id="email"
                   name="email"
                   value={form.email}
                   onChange={handleChange}
                   required
                   className="w-full bg-transparent border-b border-border py-2 text-sm focus:outline-none focus:border-accent transition-all duration-300"
                   placeholder="your@email.com"
                 />
               </div>
             </div>

             <div className="group">
               <label htmlFor="message" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-text-secondary mb-3 group-focus-within:text-accent transition-colors">
                 Message
               </label>
               <textarea
                 id="message"
                 name="message"
                 value={form.message}
                 onChange={handleChange}
                 required
                 rows={4}
                 className="w-full bg-transparent border-b border-border py-2 text-sm resize-none focus:outline-none focus:border-accent transition-all duration-300"
                 placeholder="How can I help you?"
               />
             </div>

             <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase disabled:opacity-50"
                >
                  <span>{submitted ? '✓ Sent' : loading ? 'Sending...' : 'Send Inquiry'}</span>
                  <div className="w-12 h-[1px] bg-accent group-hover:w-24 transition-all duration-500" />
                </button>
             </div>
           </motion.form>
        </div>
      </div>
    </section>
  );
}
