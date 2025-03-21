"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Proyek Portofolio
        </motion.h1>

        <div className="space-y-24">
          <ProjectSection
            title="PINTERVIEW"
            descriptions={[
              "Halaman utama Pinterview - Platform untuk mempersiapkan wawancara teknis bagi para developer. Membantu pengguna berlatih coding, memperkuat konsep pemrograman, dan mengatur perjalanan pencarian kerja.",
              "Halaman login Pinterview dengan opsi masuk menggunakan email atau Google. Antarmuka yang bersih dan mudah digunakan untuk memulai perjalanan wawancara teknis Anda.",
              "Dashboard aplikasi pekerjaan yang menampilkan status lamaran dan kesiapan untuk setiap posisi. Lacak progres Anda dengan mudah dan lihat skill yang dibutuhkan.",
              "Halaman detail pekerjaan dengan persyaratan dan penilaian keterampilan. Lihat persyaratan spesifik dan persiapkan diri untuk wawancara dengan lebih baik.",
              "Form penambahan lowongan kerja dengan tips pencarian. Masukkan detail pekerjaan untuk mendapatkan pertanyaan wawancara yang relevan.",
              "Halaman pembelian kuota dengan berbagai paket sesuai kebutuhan. Mulai dari paket dasar 10 kuota hingga paket intensif 100 kuota untuk pencari kerja full-time.",
              "Halaman pembelian kuota dengan opsi pembayaran. Pilih paket yang sesuai dengan kebutuhan Anda untuk mengakses fitur premium.",
            ]}
            images={[
              "/images/pinterview-main.png",
              "/images/pinterview-login.png",
              "/images/pinterview-dashboard.png",
              "/images/pinterview-skill-assesment.png",
              "/images/pinterview-add-jobs.png",
              "/images/pinterview-purchase.png",
            ]}
            link="https://pinterview.vercel.app/"
            features={[
              "Latihan Teknis: Berlatih tantangan coding dan algoritma dengan pertanyaan wawancara nyata",
              "Penguasaan Konsep: Memperkuat pemahaman tentang konsep pemrograman dan pola desain",
              "Pelacak Aplikasi: Mengatur dan melacak lamaran pekerjaan dalam satu dashboard terpusat",
              "Sistem Kuota: Paket berbayar dengan harga terjangkau untuk mengakses fitur premium",
              "Penilaian Keterampilan: Evaluasi kemampuan teknis untuk berbagai bahasa dan teknologi",
            ]}
            technologies={["Next.js", "React", "Tailwind CSS", "Node.js"]}
            color="blue"
          />

          <ProjectSection
            title="ZAPZING"
            descriptions={[
              "Halaman pemilihan avatar ZapZing dengan karakter robot berwarna-warni. Pilih avatar favorit Anda dan masukkan username untuk memulai petualangan gaming.",
              "Lobby permainan ZapZing dengan opsi bergabung sebagai tim merah atau biru, atau bermain mode single player melawan AI. Antarmuka yang intuitif untuk memulai pertandingan.",
              "Gameplay ZapZing - Game multiplayer berbasis web yang menampilkan area permainan dengan progress bar dan karakter pemain. Kontrol menggunakan WASD untuk bergerak dan tombol panah untuk menyerang.",
            ]}
            images={[
              "/images/zapzing-avatar.png",
              "/images/zapzing-game-room.png",
              "/images/zapzing-game-play.png",
            ]}
            link="https://zapzing-8ddaf.web.app/"
            features={[
              "Mode Multiplayer: Bermain sebagai tim merah atau biru dalam pertandingan head-to-head",
              "Mode Single Player: Melawan AI dengan 4 pemain komputer",
              "Kustomisasi Avatar: Pilih karakter robot unik dengan desain yang berbeda",
              "Kontrol Intuitif: Gunakan WASD untuk bergerak dan tombol panah untuk menyerang",
              "Sistem Skor: Lacak kemajuan dengan bar status yang menunjukkan performa pemain",
            ]}
            technologies={[
              "Firebase",
              "JavaScript",
              "HTML5 Canvas",
              "CSS3",
              "Socket-io",
            ]}
            color="cyan"
          />
        </div>
      </div>
    </div>
  );
}

interface ProjectSectionProps {
  title: string;
  descriptions: string[];
  images: string[];
  link: string;
  features: string[];
  technologies: string[];
  color: "blue" | "cyan";
}

function ProjectSection({
  title,
  descriptions,
  images,
  link,
  features,
  technologies,
  color,
}: ProjectSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset loaded state when image changes
  useEffect(() => {
    setIsLoaded(false);
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Color classes based on the color prop
  const colorClasses = {
    blue: {
      gradient: "from-blue-50 to-blue-100",
      button: "bg-blue-600 hover:bg-blue-700",
      dot: "bg-blue-600",
      tag: "bg-blue-100 text-blue-800",
    },
    cyan: {
      gradient: "from-cyan-50 to-cyan-100",
      button: "bg-cyan-600 hover:bg-cyan-700",
      dot: "bg-cyan-600",
      tag: "bg-cyan-100 text-cyan-800",
    },
  }[color];

  return (
    <motion.section
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="md:grid md:grid-cols-2">
        <div className={`relative p-6 md:p-8 ${colorClasses.gradient}`}>
          {/* Laptop mockup container */}
          <div className="relative mx-auto" style={{ maxWidth: "500px" }}>
            {/* Laptop frame */}
            <div className="relative pt-5 rounded-t-xl bg-gray-800 border-8 border-gray-800 border-b-0">
              {/* Camera */}
              <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gray-700"></div>

              {/* Screen */}
              <div className="relative bg-white aspect-[16/10] rounded-sm overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${title} screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      onLoad={() => setIsLoaded(true)}
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Laptop base */}
            <div className="relative h-4 bg-gray-800 rounded-b-md">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-t-sm"></div>
            </div>

            {/* Laptop shadow */}
            <div className="relative h-1 mx-auto w-4/5 bg-gray-800 opacity-50 rounded-b-full blur-sm"></div>

            {/* Image indicators */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentImageIndex
                      ? colorClasses.dot
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <motion.h2
              className="text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Kunjungi</span>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          <div className="min-h-[120px] mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentImageIndex}
                className="text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {descriptions[currentImageIndex] || ""}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Fitur Utama:
            </h3>
            <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-700">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Teknologi:
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className={`px-3 py-1 ${colorClasses.tag} rounded-full text-sm`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
