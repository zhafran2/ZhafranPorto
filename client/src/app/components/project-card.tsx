"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
  index: number
}

export function ProjectCard({ title, description, imageUrl, projectUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-48 sm:h-64">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium"
        >
          <span>Kunjungi Proyek</span>
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

