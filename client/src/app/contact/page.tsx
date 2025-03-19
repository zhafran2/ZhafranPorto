import ContactForm from "../components/contactform";

// app/contact/page.tsx

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Hubungi Saya</h1>
          <p className="text-xl text-center text-gray-600 mt-4">
            Tertarik untuk bekerja sama? Silakan hubungi saya melalui form di
            bawah ini
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
              <ContactForm />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <a
                    href="mailto:zhafranm.irsyad@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    zhafranm.irsyad@gmail.com
                  </a>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Telepon</h3>
                  <a
                    href="tel:+628123456789"
                    className="text-blue-600 hover:underline"
                  >
                    +62 821-6749-8763
                  </a>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Lokasi</h3>
                  <p>Jakarta, Indonesia</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Media Sosial</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/zhafran-m-irsyad-8a1345196/"
                      className="text-blue-600 hover:text-blue-800"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://github.com/zhafran2"
                      className="text-blue-600 hover:text-base-content"
                      aria-label="GitHub"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/zhafranm.irsyad"
                      className="text-blue-600 hover:text-blue-800"
                      aria-label="Instagram"
                    >
                      <span className="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 448 512"
                        >
                          {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
