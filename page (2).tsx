"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Phone, Mail, Clock, Shield, Sparkles, CheckCircle } from "lucide-react"

const services = [
  "Tree Removal",
  "Tree Trimming / Pruning",
  "Stump Grinding",
  "Emergency Service",
  "Storm Damage Cleanup",
  "Lot Clearing / Brush Removal",
  "Other",
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Fixed background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/wood-grain-texture-natural-oak-background.jpg')" }}
      />
      <div className="fixed inset-0 -z-10 bg-black/50" />

      <SiteHeader />
      <main className="flex-1 pb-16 lg:pb-0">
        {/* Hero */}
        <section className="bg-black/40 backdrop-blur-sm py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">Get a Free Quote</h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Ready to get started? Fill out the form below or give us a call. We respond to all inquiries within 24
              hours.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-black/40 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-8">Contact Information</h2>

                {/* Phone CTA */}
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-4 p-6 rounded-lg bg-primary text-primary-foreground mb-6 hover:bg-primary/90 transition-colors"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-foreground/80">Call us now</p>
                    <p className="text-2xl font-bold">(555) 123-4567</p>
                  </div>
                </a>

                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:info@duckystreeservice.com"
                    className="flex items-center gap-4 p-4 rounded-lg border border-white/20 bg-black/30 hover:bg-black/50 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-white/70">Email us</p>
                      <p className="font-semibold text-white">info@duckystreeservice.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg border border-white/20 bg-black/30">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-white/70">Business Hours</p>
                      <p className="font-semibold text-white">Mon-Sat: 7am - 6pm</p>
                      <p className="text-sm text-white/70">Emergency service available 24/7</p>
                    </div>
                  </div>
                </div>

                {/* Trust Points */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <Shield className="h-5 w-5 text-primary" />
                    Licensed & fully insured
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Complete cleanup included
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Free, no-obligation estimates
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="rounded-lg border border-white/20 bg-black/60 backdrop-blur-sm p-6 lg:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-white/70">
                      We&apos;ve received your request and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">
                          Phone *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-white">
                        Address or City/Town *
                      </Label>
                      <Input
                        id="address"
                        placeholder="123 Main St, Springfield"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-white">
                        Service Needed *
                      </Label>
                      <Select required>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase().replace(/ /g, "-")}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-white">
                        Tell us about your project *
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the tree(s), location, any access issues, urgency, etc."
                        rows={4}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-white">Preferred contact method</Label>
                      <RadioGroup defaultValue="phone" className="flex gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="contact-phone" className="border-white/50 text-primary" />
                          <Label htmlFor="contact-phone" className="font-normal text-white/80">
                            Phone
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="text" id="contact-text" className="border-white/50 text-primary" />
                          <Label htmlFor="contact-text" className="font-normal text-white/80">
                            Text
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="contact-email" className="border-white/50 text-primary" />
                          <Label htmlFor="contact-email" className="font-normal text-white/80">
                            Email
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Request Free Quote
                    </Button>

                    <p className="text-sm text-center text-white/60">
                      We typically respond within 24 hours. For emergencies, please call directly.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </div>
  )
}
