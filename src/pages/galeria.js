import React, { useRef } from 'react';

import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import SEO from "../components/seo"
import Hero from '../components/Hero'

import OfferGallery from "../components/OfferGallery"
import OfferGalleryWp from "../components/OfferGalleryWp"
import FullWidthSection from '../components/FullWidthSection';


function GalleryPage() {
  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenVisible(halfPage);
  const isScrolling = useHasBeenVisible(preload);
  return(
    <Layout>
      <SEO title="Galeria" />
      <Hero />
      <OfferGalleryWp/>
      {hasScrolled || isScrolling ? (
        <>

        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}

    </Layout>
  )
  

}

export default GalleryPage
