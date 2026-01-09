import Link from "next/link"
import { TreeDeciduous, Phone, Mail, MapPin } from "lucide-react"

const navigation = {
  services: [
    { name: "Tree Removal", href: "/services#tree-removal" },
    { name: "Tree Trimming", href: "/services#tree-trimming" },
    { name: "Stump Grinding", href: "/services#stump-grinding" },
    { name: "Storm Damage", href: "/services#storm-damage" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Contact", href: "/contact" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <TreeDeciduous className="h-8 w-8 text-primary-foreground" />
              <span className="font-serif text-xl font-bold">Ducky&apos;s Tree Service</span>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Professional tree care services you can trust. Licensed, insured, and committed to safety.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@duckystreeservice.com"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@duckystreeservice.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                Serving the Greater Metro Area
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            © {new Date().getFullYear()} Ducky&apos;s Tree Service. All rights reserved. Licensed & Insured.
          </p>
        </div>
      </div>
    </footer>
  )
}
