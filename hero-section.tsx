import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Shield, Clock, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black/40 backdrop-blur-sm">
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Professional Tree Removal & Tree Care
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl">
              Safe, clean, fast service from a local crew you can trust. We handle everything from routine trimming to
              emergency storm damage—with full cleanup included.
            </p>

            {/* Trust bullets */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <Shield className="h-5 w-5 text-primary" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <Clock className="h-5 w-5 text-primary" />
                Fast Scheduling
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <Sparkles className="h-5 w-5 text-primary" />
                Cleanup Included
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <Phone className="h-5 w-5 text-primary" />
                Free Estimates
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base bg-transparent border-white text-white hover:bg-white/10"
              >
                <a href="tel:+15551234567" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (555) 123-4567
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/professional-tree-service-worker-in-bucket-truck-c.jpg"
                alt="Ducky's Tree Service crew working on a tree removal job"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-card p-4 shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    5
                  </div>
                </div>
                <div>
                  <div className="flex text-accent">★★★★★</div>
                  <p className="text-sm text-muted-foreground">200+ Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
