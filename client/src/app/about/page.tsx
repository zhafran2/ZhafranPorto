// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import pasphoto from '../../pasPhoto/FOTOKU.jpeg'
export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Tentang Saya</h1>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src={pasphoto.src}
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Nama Saya</h2>
              <h3 className="text-xl text-gray-600 mb-6">Web Developer</h3>
              <p className="text-lg mb-6">
                Saya adalah seorang web developer dengan pengalaman lebih dari 5 tahun dalam pengembangan aplikasi web.
                Saya memiliki keahlian dalam frontend dan backend development, dengan fokus pada framework modern
                seperti React dan Next.js.
              </p>
              <p className="text-lg mb-6">
                Latar belakang pendidikan saya adalah Sarjana Teknik Industri dari Universitas Indonesia.
                Saya Memiliki jiwa kepemimpinan, kolaborasi dalam tim, dan adaptif. saya juga menyenangi belajar hal-hal baru. 
                Saya memiliki pemahaman mengenai ilmu pemrograman javascript dan typescript pada backend dan React dan React Native pada 
                frontend.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Hubungi Saya
                </Link>
                <a href="/resume.pdf" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Pengalaman Kerja</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-1">Senior Web Developer</h3>
              <p className="text-gray-600 mb-3">Perusahaan XYZ • 2020 - Sekarang</p>
              <p className="text-lg">
                Memimpin pengembangan aplikasi web menggunakan React, Next.js, dan Node.js.
                Mengelola tim developer dan berkoordinasi dengan desainer dan stakeholder.
              </p>
            </div>
            <div className="mb-12 border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-1">Web Developer</h3>
              <p className="text-gray-600 mb-3">Startup ABC • 2018 - 2020</p>
              <p className="text-lg">
                Mengembangkan dan memelihara aplikasi web untuk klien menggunakan React dan Express.
                Bekerja dalam tim agile dan berpartisipasi dalam code review.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-1">Frontend Developer Intern</h3>
              <p className="text-gray-600 mb-3">Tech Company • 2017 - 2018</p>
              <p className="text-lg">
                Membantu mengembangkan komponen UI menggunakan React dan membantu dalam perbaikan bug.
                Belajar tentang proses pengembangan software dalam tim.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Pendidikan</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-1">Bachelor of Industrial Engineering</h3>
              <p className="text-gray-600 mb-3">Universitas Indonesia • 2018 - 2023</p>
              <p className="text-lg">
                Lulus dengan IPK 3.17/4.0. Fokus pada pengembangan Sistem dan pemecahan masalah.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-1">Sertifikasi Web Development</h3>
              <p className="text-gray-600 mb-3">Online Course • 2025</p>
              <p className="text-lg">
                Menyelesaikan kursus pengembangan web modern dan pembuatan app mobile dengan bahasa pemrograman Javascript yang mencakup fullstack.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}