import React, { useRef } from 'react';

import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroMenu from '../components/HeroMenu'
import OfferIntro from "../components/OfferIntro"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"
import FullWidthSection from '../components/FullWidthSection';
import MenuCard from '../components/MenuCard'

function MenuPage() {
  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenVisible(halfPage);
  const isScrolling = useHasBeenVisible(preload);
  return(
    <Layout>
      <SEO title="Home" />
      <HeroMenu />
      <MenuCard/>
      {hasScrolled || isScrolling ? (
        <>

        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}

    </Layout>
  )
  

}

export default MenuPage
