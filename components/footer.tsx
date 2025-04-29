import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-red-600">FlashFund</span> Mortgages
            </h3>
            <p className="text-gray-400 mb-4">
              Secure, high-yield investment opportunities backed by real estate mortgages.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-red-600">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-600">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-600">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-600">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#plans" className="text-gray-400 hover:text-red-600">
                  Investment Plans
                </Link>
              </li>
              <li>
                <Link href="#calculator" className="text-gray-400 hover:text-red-600">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-gray-400 hover:text-red-600">
                  Benefits
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-600">
                  Investment Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-600 mr-2" />
                <a href="mailto:info@flashfund.com" className="text-gray-400 hover:text-red-600">
                  info@flashfund.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-600 mr-2" />
                <a href="tel:+917305009034" className="text-gray-400 hover:text-red-600">
                  +91 7305 009 034
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FlashFund Mortgages. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: Investments involve risk. Past performance is not indicative of future returns.
          </p>
        </div>
      </div>
    </footer>
  )
}
