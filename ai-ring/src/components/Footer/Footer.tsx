import { Twitter } from "lucide-react"
import logo from "@/assets/images/logo.png"

// Import the same navigation items from header
const navigation = [
  { name: "About us", href: "/" },
  { name: "Product", href: "#product" },
  { name: "Features", href: "#features" },

]

export function SiteFooter() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/5">
      <div className="container px-4 mx-auto">
        {/* Logo and Navigation Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <p className="text-[#8A8A93] font-light text-sm">
              The future of smart wearable technology
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-mono text-emerald-400">Navigation</h3>
            <nav className="grid grid-cols-1 gap-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#8A8A93] hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-mono text-emerald-400">Connect</h3>
            <div className="space-y-3">
             
              <div className="flex items-center space-x-3">
                <a
                  href="https://x.com/HealthRingAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-emerald-400/30 flex items-center justify-center hover:bg-emerald-400/10 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-mono text-emerald-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-[#8A8A93] text-sm">Email:</span>
                <a href="mailto:contact@healthring.ai" className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors">
                support@beehivelabs.io
                </a>
              </div>
             
            </div>
            <p className="text-[#8A8A93] text-xs font-light">
              Get in touch with our support team
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8A8A93] text-sm font-light">© 2024 All rights reserved</p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-[#8A8A93] hover:text-emerald-400 text-xs transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-[#8A8A93] hover:text-emerald-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

