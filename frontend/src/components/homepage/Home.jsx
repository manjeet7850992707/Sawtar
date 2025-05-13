import React from 'react'
import HeroSection from '../herosection'
import CategorySlider from '../designslider'
import WhyChooseUs from '../designslider/WhyChooseUs'
import TestimonialSlider from '../designslider/testimonial/TestimonialSlider'
import Stepper from '../designsteps'
import FaqPage from '../faq'
// import EstimateSection from '../estimate'
import TrustedPartnersSlider from '../designslider/partnersslider'
import HomeDesign from '../homedesign/HomeDesign'
import FourStepDesign from '../FourStepDesign/FourStepDesign'
import BookingBanner from '../banner/BookingBanner '
import ServiceSection from '../services/ServiceSection'
import SecureOptionsSection from '../services/SecureOptionsSection'
import InteriorEcommerceSection from '../ecommerce/InteriorEcommerceSection'
import EcommerceBanner from '../banner/EcommerceBanner'
import AIPoweredEcosystemSection from '../AIPoweredEcosystemSection'
import StepCarousel from '../StepCarousel'
import TrendSlider from '../designslider/TrendingSlider'

const Home = () => {
  return (
<>
<HeroSection/>
<AIPoweredEcosystemSection/>
<WhyChooseUs/>
<HomeDesign/>
<FourStepDesign/>
<StepCarousel/>

<BookingBanner/>
<ServiceSection/>
<SecureOptionsSection/>
{/* <CategorySlider/> */}
{/* <InteriorEcommerceSection/> */}

{/* <EstimateSection/> */}
{/* <Stepper/> */}
{/* <TestimonialSlider/> */}
{/* <TrustedPartnersSlider/> */}
{/* <FaqPage/> */}
<TrendSlider/>
<EcommerceBanner/>
</>  )
}

export default Home