import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Hammer, Home, Ruler, Building2, HardHat } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/DSC_2911_livingroom_kitchen.jpeg"
            alt="Facundo Construction Luxury Home"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
            Residential. Commercial. Civil.<br/>
            <span className="text-orange-500">From Soup to Nuts.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-3xl mx-auto">
            We build it all. Turnkey construction services for any project, any scale.
            From the first shovel in the ground to the final coat of paint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-sm font-semibold transition-colors text-lg">
              Start Your Project
            </Link>
            <Link href="/gallery" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-sm font-semibold transition-colors text-lg">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-orange-600 font-bold tracking-wider uppercase mb-2">The Facundo Standard</h2>
              <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">Building Anything. Building Everything.</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Miguel Facundo is not just a home builder. He is a builder in the truest sense. 
                With over 20 years of experience in Houston, Facundo Construction handles every aspect of the build process. 
                Residential luxury estates, complex commercial build-outs, and heavy civil structural work.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We provide a true <strong>turnkey experience</strong>. You give us the vision; we handle the rest. 
                Permitting, site work, framing, finishes, and final delivery. We do it all, from soup to nuts.
              </p>
              <Link href="/about" className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center group">
                Meet Miguel Facundo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[600px] w-full">
              <Image 
                src="/images/FacundoHouse_41st_front-copy-1024x953.jpg"
                alt="Facundo Construction Project"
                fill
                className="object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Complete Construction Capabilities</h2>
            <p className="text-xl text-gray-600">Residential, Commercial, and Civil solutions under one roof.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <Home className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Residential</h3>
              <p className="text-gray-600 mb-6">Custom homes, luxury remodeling, and complex additions. We build your legacy.</p>
              <Link href="/services/custom-homes" className="text-orange-600 font-medium hover:underline">Learn more</Link>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <Building2 className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Commercial</h3>
              <p className="text-gray-600 mb-6">Restaurants, retail spaces, and office build-outs delivered on time and on budget.</p>
              <Link href="/services/commercial-construction" className="text-orange-600 font-medium hover:underline">Learn more</Link>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <HardHat className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Civil & Structural</h3>
              <p className="text-gray-600 mb-6">Foundations, drainage, and heavy structural work. We build the backbone of your project.</p>
              <Link href="/services/civil-construction" className="text-orange-600 font-medium hover:underline">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid (Quick Preview) */}
      <section className="py-2 bg-gray-900">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            "/images/IMG_8130+copy.jpg",
            "/images/IMG_5212+copy.JPG",
            "/images/1640+bath+%232+copy+2.jpeg",
            "/images/1640+loft+copy+2.jpeg"
          ].map((img, i) => (
            <div key={i} className="relative h-64 md:h-80 group cursor-pointer overflow-hidden">
              <Image src={img} alt="Gallery Project" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
            </div>
          ))}
        </div>
        <div className="text-center py-10">
          <Link href="/gallery" className="text-white border-b border-orange-500 hover:text-orange-500 transition-colors text-lg">
            View Full Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}


