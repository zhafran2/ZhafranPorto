import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Bagian Atas: Informasi dan Navigasi */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Kolom Portfolio */}
          <div className="max-w-md">
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="mb-4">
              Seseorang yang menyenangi dunia pemrograman dengan React dan Next.js sebagai platform frontend, bahasa
              pemrograman Javascript, Typescript, dan Python. Database yang
              dikuasai adalah SQL dan NoSQL berupa MongoDB.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/zhafran-m-irsyad-8a1345196/"
                className="hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
              <a href="https://github.com/zhafran2" className="hover:text-blue-400" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="https://instagram.com/zhafranm.irsyad" className="hover:text-fuchsia-600" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Kolom Navigasi */}
          <div className="mr-100">
            <h3 className="text-xl font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">Beranda</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">Tentang</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center">
          <p className="text-sm">&copy; {currentYear} Zhafran Mohamad Irsyad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
