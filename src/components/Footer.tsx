import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Toko Pandai</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <p>Jl. Raden Saleh 1 No 3A<br />Jakarta 10430, Indonesia</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+6281112015228" className="hover:text-white transition-colors">
                  +62 8111 2015 228
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@tokopandai.id" className="hover:text-white transition-colors">
                  info@tokopandai.id
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/point-of-services" className="hover:text-white transition-colors">
                  Point Of Services
                </Link>
              </li>
              <li>
                <Link href="/our-experiences" className="hover:text-white transition-colors">
                  Our Experiences
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/brief-history" className="hover:text-white transition-colors">
                  Brief History
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Feel Free to Contact Us</h3>
            <div className="space-y-2 text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@tokopandai.id" className="hover:text-white transition-colors">
                  info@tokopandai.id
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:cs@tokopandai.id" className="hover:text-white transition-colors">
                  cs@tokopandai.id
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Download Our App</h4>
              <a
                href="https://play.google.com/store/apps/details?id=com.tokopandai.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={70}
                  className="h-12 w-auto"
                  unoptimized
                />
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/tokopandai.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://id.linkedin.com/company/tokopandai-nusantara"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            Copyright © {new Date().getFullYear()} Tokopandai |{" "}
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

