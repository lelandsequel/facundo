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
                While many builders specialize in just one niche, Facundo Construction offers a complete, turnkey solution for any construction need. We don't just sub out the hard work; we understand it.
              </p>
              <p>
                From pouring complex concrete foundations for civil projects to installing the finest Italian marble in a luxury custom home, our team has the expertise to handle it all.
              </p>
              <p>
                <strong>Residential:</strong> We build legacies. Custom homes that define neighborhoods.
                <br/><strong>Commercial:</strong> We build businesses. Restaurants and offices that work.
                <br/><strong>Civil:</strong> We build infrastructure. Foundations and structures that last.
              </p>
              <p>
                When you hire Facundo Construction, you aren't getting a middleman. You are getting a builder who takes ownership of the project from soup to nuts.
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


