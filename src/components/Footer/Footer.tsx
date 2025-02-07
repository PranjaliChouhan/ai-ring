import { Facebook, Youtube, Instagram, WebcamIcon as Skype, Send, PhoneIcon as WhatsApp } from "lucide-react"
import logo from "@/assets/images/logo.png"
export function SiteFooter() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {/* Navigation Section */}
        <div>
          <h3 className="text-xl font-normal mb-8 font-mono">Navigation</h3>
          <nav className="space-y-6">
            {["Home", "How to", "Feature", "Shop", "Product"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block text-[#8A8A93] hover:text-[#00FFA9] transition-colors duration-200 font-light"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-normal mb-8 font-mono">Contact us</h3>
          <div className="space-y-6">
            <p className="text-[#8A8A93] font-light">+38 0138 92 89</p>
            <p className="text-[#8A8A93] font-light">+38 0138 92 89</p>
            <p className="text-[#8A8A93] font-light">email@gmail.com</p>
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-xl font-normal mb-8 font-mono">Follow us</h3>
          <div className="flex gap-4">
            {[
              { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
              { icon: <span className="text-sm font-semibold">G+</span>, label: "Google Plus" },
              { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
              { icon: <Youtube className="w-5 h-5" />, label: "Youtube" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-full border border-[#00FFA9]/30 flex items-center justify-center hover:bg-[#00FFA9]/10 transition-all duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Let's Chat Section */}
        <div>
          <h3 className="text-xl font-normal mb-8 font-mono">Let's chat</h3>
          <div className="flex gap-4">
            {[
              { icon: <Skype className="w-5 h-5" />, label: "Skype" },
              { icon: <Send className="w-5 h-5" />, label: "Telegram" },
              { icon: <WhatsApp className="w-5 h-5" />, label: "WhatsApp" },
            ].map((chat) => (
              <a
                key={chat.label}
                href="#"
                className="w-10 h-10 rounded-full border border-[#00FFA9]/30 flex items-center justify-center hover:bg-[#00FFA9]/10 transition-all duration-200"
                aria-label={chat.label}
              >
                {chat.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
        <p className="text-[#8A8A93] font-light">© 2025</p>
       <img src={logo}/>
      </div>
    </footer>
  )
}

