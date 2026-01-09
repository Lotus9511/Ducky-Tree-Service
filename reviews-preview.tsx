import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Ducky's team removed a massive oak that was threatening our roof. Fast, professional, and the cleanup was spotless. Highly recommend!",
    service: "Tree Removal",
  },
  {
    name: "Mike T.",
    rating: 5,
    text: "Called them for emergency storm damage. They were there within hours and had everything cleared by the end of the day. Lifesavers!",
    service: "Storm Damage",
  },
  {
    name: "Jennifer K.",
    rating: 5,
    text: "Best stump grinding service in the area. Fair price, quick work, and you couldn't even tell there was a stump there. Thank you!",
    service: "Stump Grinding",
  },
]

export function ReviewsPreview() {
  return (
    <section className="py-16 lg:py-24 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Customers Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-lg font-semibold text-white">5.0</span>
            <span className="text-white/70 ml-1">from 200+ reviews</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.name} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-white leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-white/70">{review.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            <Link href="/reviews">Read More Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
