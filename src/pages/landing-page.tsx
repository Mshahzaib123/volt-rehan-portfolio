import AboutSection from "@/components/about-section/about-section"
import BlogSection from "@/components/blog-section/blog-section"
import ClientSection from "@/components/client-section/client-section"
import CtaSection from "@/components/cta-section/cta-section"
import HeroSection from "@/components/hero-section/hero-section"
import PricingSection from "@/components/pricing-section/pricing-section"
import ServicesSection from "@/components/services-section/services-section"
import TestimonialSection from "@/components/testimonial-section/testimonial-section"
import CaseStudySection from "@/components/case-study-section/case-study-section"
import TeamSection from "@/components/team-section/team-section"

const LandingPage = () => {
    return (
        <>
            <HeroSection/>
            <ServicesSection/>
            <ClientSection/>
            <AboutSection/>
            <PricingSection/>
            <TestimonialSection/>
            <TeamSection/>
            <CtaSection/>
            <BlogSection/>
            <CaseStudySection/>
        </>
    )
}

export default LandingPage
