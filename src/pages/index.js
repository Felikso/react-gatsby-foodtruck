import React, { useRef } from 'react';

import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import SEO from "../components/seo"
import Hero from '../components/Hero'
/* import OfferIntro from "../components/OfferIntro" */
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"
import FullWidthSection from '../components/FullWidthSection';
import FeaturedProductsBox from '../containers/FeaturedProductsBox';

function IndexPage() {
  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenVisible(halfPage);
  const isScrolling = useHasBeenVisible(preload);
  return(
    <Layout>
      <SEO title="Home" />
      <Hero />
      {hasScrolled || isScrolling ? (
        <>
      <FeaturedProductsBox heading="Serdecznie polecamy" />
      <Testimonials />
      <Stats />
      <Email />
        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}

    </Layout>
  )
  

}

export default IndexPage
