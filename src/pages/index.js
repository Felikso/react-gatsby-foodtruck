import React from 'react';

import Layout from "../components/Layout/index.js"
import Seo from "../components/seo"
import Hero from '../components/Hero'
/* import OfferIntro from "../components/OfferIntro" */
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"
import FeaturedProductsBox from '../containers/FeaturedProductsBox';

function IndexPage() {


  return(
    <Layout>
      <Seo title="Home" />
      <Hero />

        <>
      <FeaturedProductsBox heading="Serdecznie polecamy" />
      <Testimonials />
      <Stats />
      <Email />
        </>


    </Layout>
  )
  

}

export default IndexPage
