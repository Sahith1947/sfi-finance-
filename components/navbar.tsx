"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-red-600">FlashFund</span>
            <span className="hidden sm:inline text-xl">Mortgages</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="#plans" className="hover:text-red-500 transition-colors">
              Plans
            </Link>
            <Link href="#calculator" className="hover:text-red-500 transition-colors">
              Calculator
            </Link>
            <Link href="#benefits" className="hover:text-red-500 transition-colors">
              Benefits
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 text-white">Start Investing</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <Link href="/" className="hover:text-red-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="#plans"
              className="hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Plans
            </Link>
            <Link
              href="#calculator"
              className="hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculator
            </Link>
            <Link
              href="#benefits"
              className="hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 text-white w-full" onClick={() => setIsMenuOpen(false)}>
              Start Investing
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
