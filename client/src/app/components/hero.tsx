// components/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">
              <span className="block">Halo, Saya Zhafran Mohamad Irsyad</span>
              <span className="block text-yellow-300">Fullstack Web Developer</span>
            </h1>
            <p className="text-xl mb-8">
              Saya membangun aplikasi web modern dengan fokus pada pengalaman pengguna, 
              performa, dan kode yang bersih. saya juga bisa bekerja dalam tim maupun pribadi. 
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition">
                Lihat Proyek
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-white text-white rounded-md hover:bg-blue-700 transition">
                Hubungi Saya
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 bg-white rounded-full overflow-hidden border-8 border-white shadow-lg">
              {/* Ganti dengan Image component dan path gambar profil Anda */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}