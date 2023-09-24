import Aboutus from '@/components/Aboutus'
import FAQ from '@/components/FAQ'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import GetStarted from '@/components/GetStarted'
import HeroSection from '@/components/HeroSection'
import MoreAbout from '@/components/MoreAbout'
import NavBar from '@/components/NavBar'
import OurVision from '@/components/OurVision'
import Pricing from '@/components/Pricing'

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Aboutus />
      <OurVision />
      <MoreAbout/>
      <Features />
      <GetStarted/>
      <Pricing/>
      <FAQ/>
      <Footer/>

    </>
  )
}
