import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12 border-b border-gray-100 pb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="font-serif text-2xl font-bold tracking-tighter text-gray-900">
                FACUNDO <span className="text-orange-600">CONSTRUCTION</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Building legacies in Houston for over 20 years. We specialize in custom homes, luxury remodeling, and commercial construction with an unwavering commitment to quality.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/custom-homes" className="text-gray-400 hover:text-orange-500 transition-colors">Custom Homes</Link></li>
              <li><Link href="/services/kitchen-remodeling" className="text-gray-400 hover:text-orange-500 transition-colors">Kitchen Remodeling</Link></li>
              <li><Link href="/services/bathroom-remodeling" className="text-gray-400 hover:text-orange-500 transition-colors">Bathroom Renovations</Link></li>
              <li><Link href="/services/home-additions" className="text-gray-400 hover:text-orange-500 transition-colors">Home Additions</Link></li>
              <li><Link href="/services/commercial" className="text-gray-400 hover:text-orange-500 transition-colors">Commercial</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-orange-500" />
                <a href="tel:2812357375" className="hover:text-white">(281) 235-7375</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-orange-500" />
                <a href="mailto:facundo.builders@outlook.com" className="hover:text-white">facundo.builders@outlook.com</a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-orange-500 mt-1" />
                <span>Garden Oaks,<br/>Houston, TX 77018</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Facundo Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


