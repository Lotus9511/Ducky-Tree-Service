"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, TreeDeciduous } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Reviews", href: "/reviews" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <TreeDeciduous className="h-8 w-8 text-primary" />
          <span className="font-serif text-xl font-bold text-foreground">Ducky&apos;s Tree Service</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <a href="tel:+15551234567" className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Phone className="h-4 w-4" />
            (555) 123-4567
          </a>
          <Button asChild>
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-border">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 px-3 py-2 text-base font-semibold text-foreground"
              >
                <Phone className="h-5 w-5" />
                (555) 123-4567
              </a>
              <Button asChild className="w-full">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
