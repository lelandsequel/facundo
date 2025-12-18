import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Hammer, Home, Ruler } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/DSC_2911_livingroom_kitchen.jpeg" // Using one of the best scraped images
            alt="Luxury Custom Home Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg">
            Build Your Dream in Houston
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto drop-shadow-md text-gray-100">
            Premier custom home building and luxury remodeling in Garden Oaks, The Heights, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-sm text-lg font-semibold transition-all hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link 
              href="/gallery" 
              className="bg-white/10 backdrop-blur-sm border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-sm text-lg font-semibold transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Expertise</h2>
            <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              With over 20 years of experience, we deliver excellence in every beam, brick, and blueprint.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Home Building",
                description: "From concept to keys, we build bespoke homes that reflect your lifestyle and legacy.",
                icon: Home,
                image: "/images/DSC_2925_masterbed.jpeg",
                link: "/services/custom-homes"
              },
              {
                title: "Luxury Remodeling",
                description: "Transforming existing spaces into modern masterpieces. Kitchens, baths, and full-home renovations.",
                icon: Hammer,
                image: "/images/Kitchen-copy_SM.jpeg",
                link: "/services/remodeling"
              },
              {
                title: "Commercial Construction",
                description: "Reliable commercial build-outs and construction services for businesses in Houston.",
                icon: Ruler,
                image: "/images/3.png", // Using the icon/image from old site for commercial if it fits, or better yet a project image
                link: "/services/commercial"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white shadow-lg overflow-hidden rounded-sm hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <service.icon className="absolute bottom-4 left-4 h-8 w-8 text-white" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href={service.link} className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
              <Image 
                src="/images/FacundoHouse_41st_front-copy-1024x953.jpg" 
                alt="Miguel Facundo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Building with Integrity & Passion
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Facundo Builders has been one of Houston’s leading home builders for over two decades. We take pride in the fact that we have been able to provide continued quality in home building and remodeling to this wonderful city.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In addition to a variety of custom homes being built in Oak Forest & Garden Oaks, we have expanded our reach to Bellaire, Memorial, River Oaks, Galveston, Friendswood, and Richmond.
              </p>
              <div className="flex items-center gap-4">
                <Link 
                  href="/about" 
                  className="bg-gray-900 text-white px-8 py-3 rounded-sm font-semibold hover:bg-gray-800 transition-colors"
                >
                  Our Story
                </Link>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Contact Miguel</span>
                  <a href="tel:2812357375" className="text-xl font-bold text-orange-600 hover:text-orange-700 font-serif">
                    (281) 235-7375
                  </a>
                </div>
              </div>
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

