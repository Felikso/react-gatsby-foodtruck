import React, { useRef } from 'react';

import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import Seo from "../components/seo"

import HeroContact from '../components/HeroContact'


import FullWidthSection from '../components/FullWidthSection';
import ContactInfo from '../components/ContactInfo';


function ContactPage() {
  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenVisible(halfPage);
  const isScrolling = useHasBeenVisible(preload);
  return(
    <Layout>
      <Seo title="Home" />
      <HeroContact />
      <ContactInfo/>
      {hasScrolled || isScrolling ? (
        <>

        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}

    </Layout>
  )
  

}

export default ContactPage
