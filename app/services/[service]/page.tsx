import { services, locations } from '@/lib/pseo-data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} Services in Houston | Facundo Construction`,
    description: service.shortDescription,
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <Image 
            src={service.image} 
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-gray-200">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">World-Class Craftsmanship</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {service.fullDescription}
            </p>
            <div className="bg-gray-50 p-8 rounded-sm border-l-4 border-orange-600">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">What We Offer</h3>
              <ul className="grid gap-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
             <div className="mb-10">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Our Service Areas</h3>
                <p className="text-gray-600 mb-6">
                  We provide premium {service.title.toLowerCase()} services across Houston's finest neighborhoods. Select your location to learn more.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {locations.map((loc) => (
                    <Link 
                      key={loc.slug}
                      href={`/services/${service.slug}/${loc.slug}`}
                      className="flex items-center p-3 rounded-sm hover:bg-gray-50 border border-gray-100 transition-all hover:shadow-md group"
                    >
                      <MapPin className="h-5 w-5 text-gray-400 group-hover:text-orange-600 mr-3 transition-colors" />
                      <span className="text-gray-700 group-hover:text-orange-600 font-medium">{loc.name}</span>
                    </Link>
                  ))}
                </div>
             </div>
             
             <div className="bg-gray-900 text-white p-8 rounded-sm text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-gray-400 mb-6">Contact Miguel Facundo today for a consultation.</p>
                <Link href="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-sm font-semibold transition-colors w-full">
                  Contact Us
                </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}



