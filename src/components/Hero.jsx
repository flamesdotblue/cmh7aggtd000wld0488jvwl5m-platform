import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const bgUrl =
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1974&auto=format&fit=crop';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bgUrl}
          alt="Tailoring in action"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 dark:from-black/70 dark:via-black/60 dark:to-black/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <span className="inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-1 text-xs tracking-wide text-white mb-6">
            Couture Tailoring • Bespoke Alterations • Bridal Atelier
          </span>
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl max-w-3xl leading-tight">
            Crafting Confidence, <span className="text-amber-400">One Stitch</span> at a Time
          </h1>
          <p className="text-white/90 max-w-2xl mt-5">
            Premium, handcrafted garments designed and tailored to your life. From timeless suits to exquisite bridal wear,
            every piece is cut with precision and finished with soul.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-white/90 text-stone-900 px-5 py-3 text-sm font-medium hover:bg-white"
            >
              Explore Creations <ChevronRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent text-white px-5 py-3 text-sm font-medium hover:bg-white/10"
            >
              Book a Fitting
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { k: 'years', v: '12+', label: 'Years of Craft' },
            { k: 'clients', v: '1.2k+', label: 'Fittings Perfected' },
            { k: 'bridal', v: '280+', label: 'Bridal Gowns' },
            { k: 'awards', v: '15', label: 'Industry Accolades' },
          ].map((item) => (
            <div key={item.k} className="rounded-xl bg-white/10 backdrop-blur border border-white/15 p-4 text-white">
              <div className="text-2xl font-semibold">{item.v}</div>
              <div className="text-xs tracking-wide opacity-80">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-xs tracking-widest">
        SCROLL
      </a>
    </section>
  );
}
