import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] font-heading"
          >
            High-Performance Industrial Coatings.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-xl text-slate-600 max-w-2xl leading-relaxed font-light"
          >
            Apollo Paints is a global leader in high-performance industrial coatings, specialized wood finishes, advanced epoxies, and speciality resins. We engineer performance, durability and ease of application into our coating systems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-sm transition-all duration-300"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-sm transition-all duration-300"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
