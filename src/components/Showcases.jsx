import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Shirt, Calendar, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Custom Suits',
    desc: 'Made-to-measure suits with floating canvases, hand-set sleeves, and impeccable drape.',
    image:
      'https://images.unsplash.com/photo-1520975922215-c0883fffe1d4?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Shirt,
    title: 'Alterations',
    desc: 'Precision alterations to refine fit: hems, waist, tapering, and full remastering.',
    image:
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Calendar,
    title: 'Bridal & Evening',
    desc: 'Couture bridal gowns and evening wear, crafted with delicate hand-finishing.',
    image:
      'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=2069&auto=format&fit=crop',
  },
];

const allPortfolio = [
  {
    id: 1,
    cat: 'Men',
    title: 'Midnight Tuxedo',
    src: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1974&auto=format&fit=crop',
    desc: 'Hand-tailored in Italian wool and silk lapels.',
  },
  {
    id: 2,
    cat: 'Women',
    title: 'Satin Column Dress',
    src: 'https://images.unsplash.com/photo-1610116305547-c1c7c12b37be?q=80&w=1970&auto=format&fit=crop',
    desc: 'Bias-cut satin with French seams and subtle train.',
  },
  {
    id: 3,
    cat: 'Bridal',
    title: 'Lace Bridal Gown',
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2069&auto=format&fit=crop',
    desc: 'Hand-appliquéd lace and corseted bodice.',
  },
  {
    id: 4,
    cat: 'Formal',
    title: 'Emerald Evening Gown',
    src: 'https://images.unsplash.com/photo-1520975922215-c0883fffe1d4?q=80&w=2070&auto=format&fit=crop',
    desc: 'Structured silhouette with couture finishing.',
  },
  {
    id: 5,
    cat: 'Men',
    title: 'Glen Plaid Suit',
    src: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1974&auto=format&fit=crop',
    desc: 'Canvassed jacket, horn buttons, and handpick stitching.',
  },
  {
    id: 6,
    cat: 'Women',
    title: 'Tailored Jumpsuit',
    src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2069&auto=format&fit=crop',
    desc: 'Minimalist lines with a sculpted waist.',
  },
];

const categories = ['All', 'Men', 'Women', 'Bridal', 'Formal'];

export default function Showcases() {
  const [tab, setTab] = useState('Services');
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const items = useMemo(() => {
    if (filter === 'All') return allPortfolio;
    return allPortfolio.filter((i) => i.cat === filter);
  }, [filter]);

  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-3xl md:text-4xl">Precision is my passion, fabric is my canvas.</h2>
            <p className="mt-4 text-stone-600 dark:text-neutral-300">
              At Elegant Stitch, garments are engineered around you. We tailor to lifestyle, posture, and movement, ensuring a
              silhouette that feels inevitable.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setTab('Services')}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  tab === 'Services'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'border-stone-300 dark:border-neutral-700 hover:bg-stone-100 dark:hover:bg-neutral-900'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setTab('Portfolio')}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  tab === 'Portfolio'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'border-stone-300 dark:border-neutral-700 hover:bg-stone-100 dark:hover:bg-neutral-900'
                }`}
              >
                Portfolio
              </button>
            </div>
          </motion.div>

          <motion.div id="services" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {tab === 'Services' ? (
              <div className="grid sm:grid-cols-2 gap-5">
                {services.map((s) => (
                  <motion.div
                    whileHover={{ y: -4 }}
                    key={s.title}
                    className="group relative overflow-hidden rounded-xl border border-stone-200 dark:border-neutral-800"
                  >
                    <img src={s.image} alt={s.title} className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-600/10 text-amber-700 dark:text-amber-400">
                          <s.icon size={18} />
                        </span>
                        <h3 className="font-medium">{s.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-stone-600 dark:text-neutral-300">{s.desc}</p>
                      <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-sm text-amber-700 dark:text-amber-400">
                        Book Service <ChevronRight size={16} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div id="portfolio">
                <div className="mb-4 flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setFilter(c)}
                      className={`px-3 py-1.5 rounded-full text-xs border transition ${
                        filter === c
                          ? 'bg-stone-900 text-white dark:bg-white dark:text-black border-transparent'
                          : 'border-stone-300 dark:border-neutral-700 hover:bg-stone-100 dark:hover:bg-neutral-900'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <AnimatePresence>
                    {items.map((p) => (
                      <motion.button
                        layout
                        key={p.id}
                        onClick={() => setLightbox(p)}
                        className="group relative overflow-hidden rounded-xl border border-stone-200 dark:border-neutral-800"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img src={p.src} alt={p.title} className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
                        <div className="absolute bottom-2 left-2 right-2 text-left opacity-0 group-hover:opacity-100 transition">
                          <div className="text-white text-sm font-medium">{p.title}</div>
                          <div className="text-white/80 text-xs">{p.cat}</div>
                        </div>
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-3xl w-full overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.title} className="w-full h-[50vh] object-cover" />
              <div className="p-5">
                <div className="font-serif text-xl">{lightbox.title}</div>
                <div className="text-sm text-stone-600 dark:text-neutral-300 mt-1">{lightbox.desc}</div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-stone-500 dark:text-neutral-400">{lightbox.cat}</span>
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm text-amber-700 dark:text-amber-400">
                    Book a Fitting <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
