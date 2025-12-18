import { services } from '@/lib/pseo-data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesIndexPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-900 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
        <p className="text-xl font-light max-w-2xl mx-auto px-4">
          Comprehensive construction solutions for residential and commercial projects.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-16">
          {services.map((service, i) => (
            <div key={service.slug} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 relative h-[400px] rounded-sm overflow-hidden shadow-xl">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.fullDescription}
                </p>
                <Link 
                  href={`/services/${service.slug}`} 
                  className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 text-lg group"
                >
                  Explore {service.title} 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

