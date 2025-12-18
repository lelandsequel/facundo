import { locations, services } from '@/lib/pseo-data';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function LocationsIndexPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-900 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Locations We Serve</h1>
        <p className="text-xl font-light max-w-2xl mx-auto px-4">
          Building and remodeling across the Greater Houston area.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.slug} className="border border-gray-200 rounded-sm p-8 hover:shadow-lg transition-shadow bg-gray-50">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-serif font-bold text-gray-900">{location.name}</h2>
              </div>
              <p className="text-gray-600 mb-6 min-h-[60px]">
                Serving the {location.zipCodes.join(', ')} area. {location.name} is {location.description}
              </p>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 mb-2">Available Services:</h3>
                {services.map(service => (
                  <Link 
                    key={service.slug}
                    href={`/services/${service.slug}/${location.slug}`}
                    className="block text-gray-600 hover:text-orange-600 text-sm transition-colors py-1 border-b border-gray-100 last:border-0"
                  >
                    {service.title} in {location.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

