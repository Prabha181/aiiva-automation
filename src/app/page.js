import AboutSection from "@/components/AboutSection"
import CtaSection from "@/components/CtaSection"
import Hero from "@/components/Hero"
import OurServices from "@/components/OurServices"


function page() {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <OurServices/>
      <CtaSection/>
    </div>
  )
}
export default page