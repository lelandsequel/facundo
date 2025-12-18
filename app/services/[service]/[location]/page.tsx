import { services, locations } from '@/lib/pseo-data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ service: string; location: string }> }): Promise<Metadata> {
  const { service: serviceSlug, location: locationSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  const location = locations.find((l) => l.slug === locationSlug);

  if (!service || !location) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} in ${location.name} | Facundo Construction`,
    description: `Professional ${service.title.toLowerCase()} services in ${location.name}. ${service.shortDescription}`,
  };
}

export async function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const location of locations) {
      params.push({
        service: service.slug,
        location: location.slug,
      });
    }
  }
  return params;
}

export default async function ServiceLocationPage({ params }: { params: Promise<{ service: string; location: string }> }) {
  const { service: serviceSlug, location: locationSlug } = await params;
  const service = services.find((s) => s.slug === serviceSlug);
  const location = locations.find((l) => l.slug === locationSlug);

  if (!service || !location) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image 
            src={service.image} 
            alt={`${service.title} in ${location.name}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Serving {location.name} ({location.zipCodes[0]})
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            {service.title} in {location.name}
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-gray-200">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="prose prose-lg text-gray-600">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Premier {service.title} for {location.name} Residents
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Facundo Construction, we understand the unique architectural requirements and zoning nuances of {location.name}. Whether you are looking to build a new custom estate or renovate a historic property, our team has the local expertise to guide you.
            </p>
            <p>
              {service.fullDescription}
            </p>
            <p>
              {location.name} is {location.description} We are proud to contribute to the beauty and value of this neighborhood with our construction services.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us in {location.name}?</h3>
            <ul className="space-y-4 not-prose">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                Deep Knowledge of {location.name} Building Codes
              </li>
            </ul>

            <div className="mt-10 p-6 bg-gray-50 border-l-4 border-orange-600 rounded-sm">
              <h4 className="font-bold text-gray-900 mb-2">Ready to discuss your project?</h4>
              <p className="mb-4">We offer complimentary consultations for {location.name} homeowners.</p>
              <div className="flex gap-4">
                <Link href="/contact" className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-sm font-semibold hover:bg-gray-800 transition-colors">
                  <Phone className="mr-2 h-4 w-4" /> Contact Us
                </Link>
                <Link href="/gallery" className="inline-flex items-center text-gray-900 font-semibold hover:text-orange-600 transition-colors px-6 py-3">
                  View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="sticky top-24">
             <div className="bg-gray-50 p-8 rounded-sm shadow-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif">Our Services in {location.name}</h3>
                <ul className="space-y-4">
                  {services.map((s) => (
                    <li key={s.id}>
                      <Link 
                        href={`/services/${s.slug}/${location.slug}`}
                        className={`block p-3 rounded-sm transition-colors ${s.slug === service.slug ? 'bg-orange-50 border border-orange-200 text-orange-800' : 'hover:bg-white hover:shadow-sm text-gray-600'}`}
                      >
                        <span className="font-semibold">{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
             </div>

             <div className="relative h-[400px] rounded-sm overflow-hidden shadow-lg">
                <Image 
                  src={service.image} 
                  alt="Service Detail" 
                  fill 
                  className="object-cover"
                />
             </div>
          </div>
        </div>

        {/* Nearby Locations */}
        <div className="mt-24 pt-10 border-t border-gray-100">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">Other Neighborhoods We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.filter(l => l.slug !== location.slug).map((loc) => (
              <Link 
                key={loc.slug} 
                href={`/services/${service.slug}/${loc.slug}`}
                className="text-gray-600 hover:text-orange-600 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium transition-colors border border-gray-200"
              >
                {service.title} in {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



