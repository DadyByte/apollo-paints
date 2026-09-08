import { motion } from 'motion/react';
import { Tractor, Factory, Archive, Wind, Settings, Sofa } from 'lucide-react';

const industries = [
  {
    name: 'Agriculture Implements',
    description: 'Durable coatings for farming machinery designed to withstand harsh outdoor conditions.',
    icon: Tractor,
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'PEB Manufacturing',
    description: 'High-performance protection for Pre-Engineered Buildings and structural steel.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1565642055615-5b4859a85786?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Metal Cabinets & Racks',
    description: 'Smooth, resilient finishes for storage systems and industrial cabinetry.',
    icon: Archive,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Almirahs & Coolers',
    description: 'Corrosion-resistant and aesthetically pleasing coatings for domestic and commercial appliances.',
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Motors & Pumps',
    description: 'Excellent corrosion resistance, durability, adhesion, and an attractive finish for motors, pumps.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Wood Furniture',
    description: 'Advanced sealers and lacquers that enhance and protect the natural beauty of wood.',
    icon: Sofa,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-8 bg-blue-600"></div>
            <span className="text-blue-600 uppercase tracking-widest text-sm font-semibold">Our Markets</span>
            <div className="h-px w-8 bg-blue-600"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl font-heading"
          >
            Industries We Cater
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-200 hover:border-blue-500 transition-colors group flex flex-col h-full rounded-sm overflow-hidden"
            >
              <div className="h-48 w-full overflow-hidden relative bg-slate-200">
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col relative">
                <div className="flex items-center justify-center h-12 w-12 bg-white shadow-sm border border-slate-100 group-hover:border-blue-200 transition-colors rounded-sm absolute -top-6 right-8">
                  <industry.icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-heading mt-2">{industry.name}</h3>
                <p className="text-slate-600 leading-relaxed font-light flex-grow">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
