import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { submitInquiry, SALES_EMAIL, SALES_PHONE } from '../lib/submitInquiry';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', gst: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitInquiry(`New enquiry from ${formData.name} — Apollo Paints website`, {
        Name: formData.name,
        Email: formData.email,
        GST: formData.gst || 'N/A',
        Query: formData.message,
      });
      setFormData({ name: '', email: '', gst: '', message: '' });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-px w-8 bg-blue-600"></div>
            <span className="text-blue-600 uppercase tracking-widest text-sm font-semibold">Contact</span>
          </motion.div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl font-heading">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl font-light">
            Interested in our products or looking for bulk manufacturing? Reach out to our sales and support team.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 lg:mb-0 space-y-10"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-slate-50 border border-slate-200 rounded-sm">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-slate-900 font-heading">Head Office & Factory</h3>
                <p className="mt-2 text-slate-600 leading-relaxed font-light">
                  Apollo Paints<br />
                  Village Jairampur<br />
                  Karnal, Haryana - 132001
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-slate-50 border border-slate-200 rounded-sm">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-slate-900 font-heading">Phone</h3>
                <p className="mt-2 text-slate-600 font-light">
                  +91 7494988779<br />
                  Mon-Sat, 9am to 6pm
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-slate-50 border border-slate-200 rounded-sm">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-slate-900 font-heading">Email</h3>
                <p className="mt-2 text-slate-600 font-light">
                  sales@apollopaintsglobal.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-8 border border-slate-200 rounded-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 uppercase tracking-widest mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-1 block w-full bg-white border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors rounded-sm placeholder-slate-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 uppercase tracking-widest mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="mt-1 block w-full bg-white border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors rounded-sm placeholder-slate-400"
                />
              </div>
              <div>
                <label htmlFor="gst" className="block text-sm font-medium text-slate-700 uppercase tracking-widest mb-2">GST Details (Optional)</label>
                <input
                  type="text"
                  id="gst"
                  value={formData.gst}
                  onChange={(e) => setFormData({...formData, gst: e.target.value})}
                  className="mt-1 block w-full bg-white border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors rounded-sm placeholder-slate-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="mt-1 block w-full bg-white border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none rounded-sm placeholder-slate-400"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex justify-center items-center px-8 py-4 bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 disabled:opacity-60 disabled:hover:bg-blue-600 rounded-sm transition-all duration-300 mt-4"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
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
      </div>
    </section>
  );
}
