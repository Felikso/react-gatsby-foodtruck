import React, { useRef } from 'react';

import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout"
import SEO from "../components/seo"
import StyledBackgroundHeroOfferSection from '../components/Backgrounds/StyledBackgroundHeroOfferSection'

import HeroOffer from '../components/HeroOffer'

import CardBoxGatsby from "../components/CardBoxGatsby"
import FullWidthSection from '../components/FullWidthSection';


function OfferPage() {
  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenVisible(halfPage);
  const isScrolling = useHasBeenVisible(preload);
  return(
    <Layout>
      <SEO title="Home" />
      <HeroOffer />
      <CardBoxGatsby/>
      {hasScrolled || isScrolling ? (
        <>

        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}

    </Layout>
  )
  

}

export default OfferPage
