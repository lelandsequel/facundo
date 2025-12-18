import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function GalleryPage() {
  // Server-side: Read images from public/images
  // We'll filter for jpg/png and maybe limit to 50 for now
  const imageDir = path.join(process.cwd(), 'public/images');
  let images = [];
  
  try {
    const files = fs.readdirSync(imageDir);
    images = files
      .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
      .filter(file => !file.includes('Screenshot')) // Filter out screenshots if desired, maybe keep them if they are good
      .slice(0, 50) // Limit for performance
      .map(file => `/images/${file}`);
  } catch (e) {
    console.error(e);
    images = ["/images/DSC_2911_livingroom_kitchen.jpeg"]; // Fallback
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-900 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Portfolio</h1>
        <p className="text-xl font-light max-w-2xl mx-auto px-4">
          A showcase of our finest custom homes and renovations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-[4/3] group overflow-hidden rounded-sm bg-gray-100 cursor-pointer">
              <Image 
                src={src} 
                alt={`Project ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

