import { motion } from 'motion/react';
import { ShieldCheck, Factory, Leaf } from 'lucide-react';

export default function About() {
  const features = [
    {
      name: 'Advanced Manufacturing',
      description: 'State-of-the-art facilities ensuring consistent quality across all batches.',
      icon: Factory,
    },
    {
      name: 'Proven Durability',
      description: 'Engineered to withstand extreme weather, UV exposure, and heavy wear.',
      icon: ShieldCheck,
    },
    {
      name: 'Eco-Conscious Formulation',
      description: 'Low-VOC and environmentally compliant formulations for a safer tomorrow.',
      icon: Leaf,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl font-heading">
              About Apollo Paints
            </h2>
            <div className="h-1 w-20 bg-blue-600 mt-6 mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Apollo Paints is a premier manufacturer of industrial coatings, speciality resins, and wood finishes. Inspired by a drive for innovation and a commitment to quality, we formulate chemical solutions that protect metal substrates and enhance surfaces worldwide.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed font-light">
              From heavy-duty industrial applications to delicate wood restorations, our advanced polymer and epoxy formulations are engineered to withstand extreme environments, resist corrosion, and deliver uncompromising performance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 lg:mt-0"
          >
            <dl className="space-y-12">
              {features.map((feature) => (
                <div key={feature.name} className="relative flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-slate-50 text-blue-600">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <dt className="text-xl font-semibold text-slate-900 font-heading">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base text-slate-600 leading-relaxed font-light">
                      {feature.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
