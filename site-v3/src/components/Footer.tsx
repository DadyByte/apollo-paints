export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          <div>
            <span className="text-2xl font-extrabold tracking-tight text-white font-heading">
              apollo <span className="text-blue-500 uppercase tracking-widest text-lg font-black">PAINTS</span>
            </span>
            <p className="mt-6 text-slate-400 max-w-sm leading-relaxed font-light">
              Global leaders in high-performance industrial coatings, speciality epoxies, and advanced wood finishes.
            </p>
          </div>

          <div className="md:ml-auto">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-blue-400 transition-colors font-light hover:pl-2">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors font-light hover:pl-2">About Us</a></li>
              <li><a href="#industries" className="text-slate-400 hover:text-blue-400 transition-colors font-light hover:pl-2">Industries We Cater</a></li>
              <li><a href="#products" className="text-slate-400 hover:text-blue-400 transition-colors font-light hover:pl-2">Products</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors font-light hover:pl-2">Contact Us</a></li>
            </ul>
          </div>

          <div className="md:ml-auto">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors font-light hover:pl-2">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors font-light hover:pl-2">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center md:text-left text-slate-500 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Apollo Paints Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
