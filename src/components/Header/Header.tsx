"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheets"
import { CartSheet } from "../cartSheet"
import logo from "@/assets/images/logo.png"
import { useState } from "react"




const navigation = [
  { name: "About us", href: "/" },
  { name: "Product", href: "#product" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Close the mobile menu
    setMobileMenuOpen(false)
    
    // If it's a hash link, handle it to prevent default scrolling behavior
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.getElementById(href.substring(1))
      if (element) {
        // Small delay to allow the menu to close before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between items-center gap-6 md:gap-10">
          <a href="/" className="hidden md:flex text-white">
           <img src={logo}/>
          </a>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-black">
              <div className="flex flex-col space-y-4 text-white">
                {navigation.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="hover:text-emerald-400 transition-colors"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-white">
            {navigation.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <a href={item.href} className="hover:text-emerald-400 transition-colors">
                  {item.name}
                </a>
                {index < navigation.length - 1 && <span className="ml-6 text-gray-400">|</span>}
              </div>
            ))}
          </nav>

          <CartSheet />
        </div>
      </div>
    </header>
  )
}

