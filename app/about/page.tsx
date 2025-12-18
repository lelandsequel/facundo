import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="relative py-24 bg-gray-900 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Story</h1>
        <p className="text-xl font-light max-w-2xl mx-auto px-4">
          Building Houston's finest homes with integrity and passion since 2004.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-lg mx-auto text-gray-700">
          <p className="lead text-xl md:text-2xl font-serif text-gray-900 leading-relaxed mb-8">
            Facundo Builders was established by Miguel Facundo with a simple mission: to build homes that stand the test of time, both structurally and aesthetically.
          </p>

          <Image 
            src="/images/MiguelFacundo.jpeg" 
            alt="Miguel Facundo" 
            width={800} 
            height={600} 
            className="rounded-sm shadow-lg my-10 w-full object-cover h-[500px]"
          />

          <h2 className="font-serif text-3xl font-bold text-gray-900 mt-12 mb-6">A Legacy of Excellence</h2>
          <p>
            For over 20 years, we have been a cornerstone of the Houston construction community. Starting in Garden Oaks and Oak Forest, we quickly established a reputation for reliability, transparency, and superior craftsmanship. Today, our portfolio spans the entire Greater Houston area, including River Oaks, Memorial, and The Heights.
          </p>
          <p>
            We believe that a home is more than just a structure; it's the backdrop for your life's most cherished memories. That's why we approach every project—whether it's a sprawling custom estate or a meticulous kitchen renovation—with the same level of dedication and attention to detail.
          </p>

          <h2 className="font-serif text-3xl font-bold text-gray-900 mt-12 mb-6">The Facundo Standard</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Uncompromising Quality:</strong> We use only the finest materials and work with trusted local artisans.</li>
            <li><strong>Transparent Communication:</strong> You will be kept informed at every stage of the construction process.</li>
            <li><strong>Personalized Service:</strong> Miguel Facundo is personally involved in every project to ensure your vision is realized.</li>
          </ul>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif font-bold mb-6">Start Your Journey With Us</h3>
            <Link href="/contact" className="bg-orange-600 text-white px-8 py-3 rounded-sm font-semibold hover:bg-orange-700 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

