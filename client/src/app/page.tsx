"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ChatBox from "./components/ChatBox";
import PasFoto from "../pasPhoto/FOTOKU.jpeg";
// Define the type for our tech categories
type TechCategory = "backend" | "frameworks" | "database" | "frontend" | "css";

// Define the type for a tech item
interface TechItem {
  name: string;
  logo: string;
}

// Define our tech logos with proper typing
const techLogos: Record<TechCategory, TechItem[]> = {
  backend: [
    {
      name: "Next.js",
      logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    },
    {
      name: "Express",
      logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    {
      name: "Socket.io",
      logo: "https://cdn.worldvectorlogo.com/logos/socket-io.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    { name: "Jest", logo: "https://cdn.worldvectorlogo.com/logos/jest-2.svg" },
    {
      name: "SuperTest",
      logo: "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",
    },
    {
      name: "Bcrypt",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgCCTUXWvBDUj9mGSAQeeIZKBGCwlrSa8EA&s",
    },
    {
      name: "JWT",
      logo: "https://cdn.worldvectorlogo.com/logos/jwtio-json-web-token.svg",
    },
    {
      name: "GraphQL",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98DxugSAuOVaFkvEL8Lz8Xxl-oCrSVx1dvg&s",
    },
    {
      name: "Apollo",
      logo: "https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg",
    },
  ],
  frameworks: [
    {
      name: "Sequelize",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kRdGLweCsKE4iXnFpzL628qQlxgAt_WraQ&s",
    },
    {
      name: "Mongoloquent",
      logo: "https://mongoloquent.com/img/mongoloquent.png",
    },
    {
      name: "DaisyUI",
      logo: "https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg",
    },
    { name: "Vite", logo: "https://cdn.worldvectorlogo.com/logos/vitejs.svg" },
  ],
  database: [
    {
      name: "MongoDB",
      logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    },
  ],
  frontend: [
    {
      name: "React.js",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    { name: "Redux", logo: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
    {
      name: "Socket.io",
      logo: "https://cdn.worldvectorlogo.com/logos/socket-io.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    },
    { name: "Chart.js", logo: "https://www.chartjs.org/img/chartjs-logo.svg" },
    {
      name: "Framer Motion",
      logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    },
    {
      name: "React Router",
      logo: "https://www.svgrepo.com/show/354262/react-router.svg",
    },
    {
      name: "React Native",
      logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    },
  ],
  css: [
    {
      name: "Tailwind CSS",
      logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },
  ],
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<TechCategory>("backend");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const categoryVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const photoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16"
          variants={containerVariants}
        >
          {/* Photo Section */}
          <motion.div
            className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
            variants={photoVariants}
          >
            <Image
              src={PasFoto.src}
              alt="Your Profile Photo"
              width={256}
              height={256}
              className="object-cover"
            />
          </motion.div>

          {/* Intro Text */}
          <motion.div className="md:w-2/3" variants={itemVariants}>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              variants={itemVariants}
            >
              Full Stack Developer
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-6"
              variants={itemVariants}
            >
              Specializing in modern web technologies for robust backends and
              dynamic frontends
            </motion.p>
            <motion.div className="flex gap-4" variants={itemVariants}>
              <Link href="/contact">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300">
                  Contact Me
                </button>
              </Link>
              <Link href={'/projects'}>
              <button className="px-6 py-3 border border-blue-500 hover:bg-blue-900/20 rounded-lg transition-colors duration-300">
                View Projects
              </button></Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div className="mb-12" variants={containerVariants}>
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h2>

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-10"
            variants={itemVariants}
          >
            {(Object.keys(techLogos) as TechCategory[]).map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full capitalize ${
                  selectedCategory === category
                    ? "bg-blue-600"
                    : "bg-gray-600 hover:bg-gray-500"
                } transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Logo Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
            variants={categoryVariants}
            key={selectedCategory}
            initial="hidden"
            animate="visible"
          >
            {techLogos[selectedCategory].map((tech) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors duration-300"
                whileHover={{ y: -5, scale: 1.03 }}
                variants={itemVariants}
              >
                <div className="w-16 h-16 relative mb-3 bg-white/10 rounded-lg p-2 flex items-center justify-center">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-sm font-medium text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Chat Widget */}
        <ChatBox />
      </motion.div>
    </div>
  );
}
