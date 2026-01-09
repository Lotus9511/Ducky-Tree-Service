import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { CtaBand } from "@/components/home/cta-band"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink } from "lucide-react"

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Ducky's team removed a massive oak that was threatening our roof. Fast, professional, and the cleanup was spotless. They went above and beyond to protect our flower beds. Highly recommend!",
    service: "Tree Removal",
    date: "2 weeks ago",
  },
  {
    name: "Mike T.",
    rating: 5,
    text: "Called them for emergency storm damage. They were there within hours and had everything cleared by the end of the day. The crew was courteous and efficient. True lifesavers!",
    service: "Storm Damage",
    date: "1 month ago",
  },
  {
    name: "Jennifer K.",
    rating: 5,
    text: "Best stump grinding service in the area. Fair price, quick work, and you couldn't even tell there was a stump there. Thank you!",
    service: "Stump Grinding",
    date: "1 month ago",
  },
  {
    name: "Robert L.",
    rating: 5,
    text: "Had three large trees trimmed. The team was professional, on time, and cleaned up better than I expected. Will definitely use again for regular maintenance.",
    service: "Tree Trimming",
    date: "2 months ago",
  },
  {
    name: "Amanda P.",
    rating: 5,
    text: "Needed a hazardous tree removed near our fence. They were careful, communicated every step, and left no damage to the fence or yard. Excellent work!",
    service: "Tree Removal",
    date: "2 months ago",
  },
  {
    name: "David H.",
    rating: 5,
    text: "Great experience from start to finish. Quote was fair, scheduling was easy, and the work was top-notch. These guys know what they're doing.",
    service: "Tree Trimming",
    date: "3 months ago",
  },
  {
    name: "Lisa R.",
    rating: 5,
    text: "Emergency call on a Sunday after a big storm. They came out right away and handled a huge fallen limb blocking our driveway. So grateful for their quick response!",
    service: "Emergency Service",
    date: "3 months ago",
  },
  {
    name: "James W.",
    rating: 5,
    text: "Used Ducky's for lot clearing before building our new garage. They cleared everything efficiently and the price was exactly as quoted. No surprises, just great service.",
    service: "Lot Clearing",
    date: "4 months ago",
  },
  {
    name: "Patricia C.",
    rating: 5,
    text: "The crew was polite, hardworking, and respectful of our property. They even helped us decide which branches needed trimming vs. which to leave. Real professionals!",
    service: "Tree Trimming",
    date: "4 months ago",
  },
  {
    name: "Thomas B.",
    rating: 5,
    text: "Had 5 stumps ground down in one visit. Fast, clean, and the price was very reasonable. Already recommended them to two neighbors.",
    service: "Stump Grinding",
    date: "5 months ago",
  },
]

export default function ReviewsPage() {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/tree-bark-texture-natural-wood-pattern-close-up.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 pb-16 lg:pb-0">
          {/* Hero */}
          <section className="bg-black/40 backdrop-blur-sm py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">Customer Reviews</h1>
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-white ml-2">5.0</span>
              </div>
              <p className="mt-2 text-white/70">Based on 200+ reviews</p>
              <div className="mt-8">
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Read More on Google
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Reviews Grid */}
          <section className="py-16 lg:py-24 bg-black/40 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="grid gap-6 md:grid-cols-2">
                {reviews.map((review, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                        <span className="text-sm text-white/60">{review.date}</span>
                      </div>
                      <p className="text-white leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                      <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-white">{review.name}</p>
                          <p className="text-sm text-white/70">{review.service}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <CtaBand />
        </main>
        <SiteFooter />
        <MobileCtaBar />
      </div>
    </div>
  )
}
