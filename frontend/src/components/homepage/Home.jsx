import React from 'react'
import HeroSection from '../herosection'
import CategorySlider from '../designslider'
import WhyChooseUs from '../designslider/WhyChooseUs'
import TestimonialSlider from '../designslider/testimonial/TestimonialSlider'
import Stepper from '../designsteps'
import {DreamHomeCTA, HomeDecorVideoSection,ReferralBanner} from '../banner'
import FaqPage from '../faq'
import EstimateSection from '../estimate'
import TrustedPartnersSlider from '../designslider/partnersslider'

const Home = () => {
  return (
<>
<HeroSection/>
<CategorySlider/>
<WhyChooseUs/>

<HomeDecorVideoSection/>
<EstimateSection/>
<Stepper/>
{/* <ReferralBanner/> */}
<ReferralBanner/>
<TestimonialSlider/>
<TrustedPartnersSlider/>
<FaqPage/>
<DreamHomeCTA/>
</>  )
}

export default Home