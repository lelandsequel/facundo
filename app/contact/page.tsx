import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
        <p className="text-xl font-light max-w-2xl mx-auto px-4">
          Ready to start your project? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                  <p className="text-gray-600 mb-1">Miguel Facundo</p>
                  <a href="tel:2812357375" className="text-xl font-bold text-orange-600 hover:text-orange-700">
                    (281) 235-7375
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                  <p className="text-gray-600 mb-1">For general inquiries and estimates</p>
                  <a href="mailto:facundo.builders@outlook.com" className="text-lg font-medium text-orange-600 hover:text-orange-700">
                    facundo.builders@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Service Area</h3>
                  <p className="text-gray-600">
                    Based in Garden Oaks (77018).<br />
                    Serving Houston, The Heights, River Oaks, Memorial, Bellaire, and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-sm shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" id="first-name" className="w-full border-gray-300 rounded-sm shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="last-name" className="w-full border-gray-300 rounded-sm shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full border-gray-300 rounded-sm shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" id="phone" className="w-full border-gray-300 rounded-sm shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border" />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                <select id="project" className="w-full border-gray-300 rounded-sm shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border">
                  <option>New Custom Home</option>
                  <option>Kitchen Remodel</option>
                  <option>Bathroom Remodel</option>
                  <option>Full Home Renovation</option>
                  <option>Commercial Project</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full border-gray-300 rounded-sm shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border"></textarea>
              </div>

              <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 rounded-sm hover:bg-orange-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

