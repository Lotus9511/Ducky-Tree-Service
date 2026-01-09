import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CtaBand() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Need a Quote Today?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Get a free, no-obligation estimate for your tree service needs. We respond fast and work around your schedule.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" asChild className="text-base">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-base bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="tel:+15551234567" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
