import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', service: '', date: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address';
    if (!/^[0-9+()\-\s]{7,}$/.test(form.phone)) next.phone = 'Enter a valid phone number';
    if (!form.service) next.service = 'Select a service';
    if (!form.date) next.date = 'Choose a preferred date';
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      // Normally, send to backend or service like Formspree
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Book a Private Fitting</h2>
            <p className="mt-3 text-stone-600 dark:text-neutral-300">
              Tell us about your occasion and preferences. We will confirm your appointment and tailor the experience around you.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2"><Phone size={16} /> <span>+1 (555) 012-3456</span></div>
              <div className="flex items-center gap-2"><Mail size={16} /> <span>studio@elegantstitch.co</span></div>
              <div className="flex items-center gap-2"><MapPin size={16} /> <span>128 Atelier Lane, New York, NY</span></div>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden border border-stone-200 dark:border-neutral-800">
              <iframe
                title="Studio Location"
                src="https://www.google.com/maps?q=New%20York&output=embed"
                className="w-full h-56"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-950/60 backdrop-blur">
            <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  className={`mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition ${
                    errors.name ? 'border-red-500' : 'border-stone-300 dark:border-neutral-700'
                  }`}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  className={`mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition ${
                    errors.email ? 'border-red-500' : 'border-stone-300 dark:border-neutral-700'
                  }`}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm">Phone</label>
                <input
                  type="tel"
                  className={`mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition ${
                    errors.phone ? 'border-red-500' : 'border-stone-300 dark:border-neutral-700'
                  }`}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm">Service Type</label>
                <select
                  className={`mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition ${
                    errors.service ? 'border-red-500' : 'border-stone-300 dark:border-neutral-700'
                  }`}
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="" className="bg-white dark:bg-neutral-950">Select a service</option>
                  <option value="Custom Suits" className="bg-white dark:bg-neutral-950">Custom Suits</option>
                  <option value="Alterations" className="bg-white dark:bg-neutral-950">Alterations</option>
                  <option value="Bridal & Evening" className="bg-white dark:bg-neutral-950">Bridal & Evening</option>
                </select>
                {errors.service && <p className="text-xs text-red-600 mt-1">{errors.service}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm">Preferred Date</label>
                <div className="relative">
                  <input
                    type="date"
                    className={`mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition ${
                      errors.date ? 'border-red-500' : 'border-stone-300 dark:border-neutral-700'
                    }`}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                  <Calendar size={16} className="absolute right-3 top-3 text-stone-400" />
                </div>
                {errors.date && <p className="text-xs text-red-600 mt-1">{errors.date}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm">Message</label>
                <textarea
                  rows={4}
                  className={`mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition ${
                    errors.message ? 'border-red-500' : 'border-stone-300 dark:border-neutral-700'
                  }`}
                  placeholder="Share details: event, fit preferences, timeline..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <div className="sm:col-span-2 flex items-center justify-between">
                {submitted ? (
                  <span className="text-sm text-green-600">Thank you — we will be in touch shortly.</span>
                ) : (
                  <span className="text-xs text-stone-500 dark:text-neutral-400">We respond within one business day.</span>
                )}
                <button
                  type="submit"
                  className="rounded-full bg-amber-600 text-white px-5 py-2 text-sm font-medium hover:bg-amber-700 transition"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        <footer className="mt-20 border-t border-stone-200 dark:border-neutral-800 pt-8 pb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div>
              <div className="font-serif text-xl"><span className="font-semibold">Elegant</span> <span className="text-amber-600">Stitch</span></div>
              <p className="text-sm text-stone-600 dark:text-neutral-300 mt-2 max-w-sm">
                Couture craftsmanship, made personal. Book your fitting and experience tailoring at its finest.
              </p>
            </div>
            <div className="text-sm flex gap-6">
              <a href="#about" className="hover:text-amber-700 dark:hover:text-amber-400">About</a>
              <a href="#services" className="hover:text-amber-700 dark:hover:text-amber-400">Services</a>
              <a href="#portfolio" className="hover:text-amber-700 dark:hover:text-amber-400">Portfolio</a>
              <a href="#contact" className="hover:text-amber-700 dark:hover:text-amber-400">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-xs text-stone-500 dark:text-neutral-500">© {new Date().getFullYear()} Elegant Stitch. All rights reserved.</div>
        </footer>
      </div>

      <a
        href="https://wa.me/15550123456"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-4 py-3 shadow-lg hover:bg-green-700"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>
    </section>
  );
}
