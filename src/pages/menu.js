import React, { useRef } from 'react';

import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import Seo from "../components/seo"
import HeroMenu from '../components/HeroMenu'
import FullWidthSection from '../components/FullWidthSection';
import MenuCard from '../components/MenuCard'

function MenuPage() {
  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenVisible(halfPage);
  const isScrolling = useHasBeenVisible(preload);
  return(
    <Layout>
      <Seo title="Home" />
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
