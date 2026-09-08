import { motion, AnimatePresence } from 'motion/react';
import { Shield, Droplet, Layers, FlaskConical, X, Send, ChevronDown } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { submitInquiry, SALES_EMAIL, SALES_PHONE } from '../lib/submitInquiry';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const categories = [
  {
    name: 'Industrial Coatings',
    description: 'High-performance protection for metal substrates. Engineered to withstand corrosion, extreme weather, and harsh industrial environments.',
    icon: Shield,
    subProducts: ['Primers', 'Synthetic Enamel', 'PU Enamel', 'Automotive Finishes', 'Texture Finishes', 'Synthetic Putty']
  },
  {
    name: 'Wood Finishes',
    description: 'Advanced stains, varnishes, and sealers designed to protect and enhance the natural beauty and longevity of wood surfaces.',
    icon: Droplet,
    subProducts: ['Lacquer', 'Sealers']
  },
  {
    name: 'Speciality Epoxies',
    description: 'Heavy-duty epoxy coatings formulated for exceptional chemical resistance, mechanical strength, and seamless application.',
    icon: Layers,
    subProducts: ['3:1 Epoxy Systems', '2:1 Epoxy Systems']
  },
  {
    name: 'Speciality Resins',
    description: 'Custom-engineered polymer resins providing the fundamental building blocks for superior coatings and composite materials.',
    icon: FlaskConical,
    subProducts: ['Alkyds', 'Rosinated Alkyds', 'Uralkyds', 'CNSL', 'Epoxy Advance Systems']
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', gst: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const activeCategoryData = categories.find(c => c.name === activeCategory) || categories[0];

  const openInquiry = (product: string) => {
    setSelectedProduct(product);
    setStatus('idle');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitInquiry(
        `Product enquiry: ${selectedProduct || 'Products'} — Apollo Paints website`,
        {
          Product: selectedProduct || 'Products',
          Name: formData.name,
          Email: formData.email,
          GST: formData.gst || 'N/A',
          Query: formData.message,
        },
      );
      setFormData({ name: '', email: '', gst: '', message: '' });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="products" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-8 bg-blue-600"></div>
            <span className="text-blue-600 uppercase tracking-widest text-sm font-semibold">Our Expertise</span>
            <div className="h-px w-8 bg-blue-600"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl font-heading"
          >
            High-Performance Product Lines
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 font-light"
          >
            Engineered for absolute perfection. From heavy-duty metal protection to fine wood finishing, our chemistry delivers superior performance.
          </motion.p>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="w-full max-w-md md:hidden relative">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full appearance-none text-center bg-white border border-slate-300 px-6 py-4 text-slate-900 font-medium tracking-wide uppercase text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors rounded-sm shadow-sm cursor-pointer"
            >
              {categories.map(c => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map(c => (
              <button
                key={c.name}
                onClick={() => setActiveCategory(c.name)}
                className={`px-8 py-4 text-center text-sm font-semibold uppercase tracking-widest transition-all duration-300 rounded-sm border ${activeCategory === c.name ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'}`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 bg-white border border-slate-200 rounded-sm p-8 sm:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center justify-center h-16 w-16 bg-slate-50 border border-slate-200 mb-6 rounded-sm">
                <activeCategoryData.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">{activeCategoryData.name}</h3>
              <p className="text-slate-600 leading-relaxed font-light">{activeCategoryData.description}</p>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">Available Products</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeCategoryData.subProducts.map(sub => (
                  <button
                    key={sub}
                    onClick={() => openInquiry(`${activeCategoryData.name} - ${sub}`)}
                    className="flex items-center justify-between p-4 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-colors rounded-sm group text-left"
                  >
                    <span className="text-slate-700 font-medium group-hover:text-blue-700">{sub}</span>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Inquire</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-sm shadow-xl w-full max-w-lg overflow-hidden relative"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-900 font-heading pr-8">Inquire about {selectedProduct}</h3>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="text-slate-400 hover:text-slate-700 transition-colors absolute right-6 top-6"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-medium text-slate-700 uppercase tracking-widest mb-1">Full Name</label>
                  <input
                    type="text"
                    id="modal-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors rounded-sm placeholder-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-sm font-medium text-slate-700 uppercase tracking-widest mb-1">Email Address</label>
                  <input
                    type="email"
                    id="modal-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors rounded-sm placeholder-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="modal-gst" className="block text-sm font-medium text-slate-700 uppercase tracking-widest mb-1">GST Details (Optional)</label>
                  <input
                    type="text"
                    id="modal-gst"
                    value={formData.gst}
                    onChange={(e) => setFormData({...formData, gst: e.target.value})}
                    className="w-full bg-white border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors rounded-sm placeholder-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="modal-message" className="block text-sm font-medium text-slate-700 uppercase tracking-widest mb-1">Message</label>
                  <textarea
                    id="modal-message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none rounded-sm placeholder-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex justify-center items-center px-6 py-4 bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 disabled:opacity-60 disabled:hover:bg-blue-600 rounded-sm transition-all duration-300 mt-2"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
                  {status !== 'sending' && <Send className="ml-2 h-4 w-4" />}
                </button>

                {status === 'sent' && (
                  <p className="text-sm p-4 border border-blue-600 bg-blue-50 text-slate-900 rounded-sm">
                    Thanks — your enquiry is in. We'll be in touch shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm p-4 border border-red-600 bg-red-50 text-red-800 rounded-sm">
                    Something went wrong sending that. Please email{' '}
                    <a className="underline" href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a>{' '}
                    or call {SALES_PHONE}.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
