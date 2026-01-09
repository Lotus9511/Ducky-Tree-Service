"use client"

import Link from "next/link"
import { Phone, FileText } from "lucide-react"

export function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary border-t border-primary/20 shadow-lg">
      <div className="grid grid-cols-2 divide-x divide-primary-foreground/20">
        <a
          href="tel:+15551234567"
          className="flex items-center justify-center gap-2 py-4 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 py-4 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          <FileText className="h-5 w-5" />
          Get Quote
        </Link>
      </div>
    </div>
  )
}
