import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/images/structure5_web.jpeg" 
            alt="Facundo Construction Civil Work" 
            fill 
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">The Builder Who Does It All</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From the ground up. Residential, Commercial, Civil.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative h-[600px]">
            <Image 
              src="/images/MiguelFacundo.jpeg" 
              alt="Miguel Facundo" 
              fill 
              className="object-cover rounded-sm shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Soup to Nuts Construction</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Miguel Facundo founded Facundo Construction with a simple philosophy: <strong>be the guy who can build anything.</strong>
              </p>
              <p>
                While many builders stay in their lane—only doing spec homes or small renovations—Facundo Construction thrives on complexity. We are one of the few firms in Houston with the in-house expertise to execute <strong>Residential, Commercial, and Civil</strong> projects simultaneously.
              </p>
              <p>
                When you hire us, you aren't just getting a general contractor who subcontracts everything and marks up the price. You are getting a builder who understands the structural integrity of a commercial foundation just as well as the fine millwork of a luxury kitchen.
              </p>
              <p>
                We handle the dirty work and the detail work. From the first pour of concrete to the final fixture installation, we control the quality. You aren't getting a middleman. You are getting a builder who takes ownership of the project from start to finish.
              </p>
            </div>
            
            <div className="mt-10">
              <Link href="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-sm font-semibold hover:bg-orange-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



