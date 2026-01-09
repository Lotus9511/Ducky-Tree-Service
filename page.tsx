import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { HeroSection } from "@/components/home/hero-section"
import { HowItWorks } from "@/components/home/how-it-works"
import { ServicesGrid } from "@/components/home/services-grid"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ReviewsPreview } from "@/components/home/reviews-preview"
import { ServiceAreasTeaser } from "@/components/home/service-areas-teaser"
import { CtaBand } from "@/components/home/cta-band"
import { StatsDivider } from "@/components/home/stats-divider"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Fixed parallax forest background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/lush-green-forest-canopy-aerial-view-sunlight-thro.jpg')",
        }}
      />
      <div className="fixed inset-0 bg-black/25 -z-10" />

      <SiteHeader />
      <main className="flex-1 pb-16 lg:pb-0">
        <HeroSection />
        <HowItWorks />
        <ServicesGrid />
        <StatsDivider />
        <WhyChooseUs />
        <ReviewsPreview />
        <ServiceAreasTeaser />
        <CtaBand />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </div>
  )
}
