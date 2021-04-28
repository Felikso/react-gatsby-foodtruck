import React, { useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import Seo from "../components/seo"
//
import OfferGalleryWp from '../components/OfferGalleryWp'
//
import FullWidthSection from '../components/FullWidthSection';
import Video from '../assets/videos/pierogi1.mp4'
import StyledHero from '../components/HeroSections/StyledHero'


function GalleryPage() {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "pierogi-5.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageMobile = data.desktop.childImageSharp.fluid
  const imageDesktop = data.desktop.childImageSharp.fluid

  const sources = [
    imageMobile,
    {
      ...imageDesktop,
      media: `(min-width: 491px)`,
    },
  ]

  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenVisible(halfPage);
  const isScrolling = useHasBeenVisible(preload);



  return(
    <Layout>
      <Seo title="Home" />
      <StyledHero

      sources={sources}
      Video={Video}
      HeroPoster="https://th.bing.com/th/id/R579b4552f248f5f3b8c22ec8de678f6d?rik=CZn5ZpmoPRhhWA&riu=http%3a%2f%2f1.s.dziennik.pl%2fpliki%2f2465000%2f2465139-lew-900-665.jpg&ehk=rOGUdngXo%2b2ZE6G%2bXYh1k730AK3lbwEv%2fptsUHZ6DK4%3d&risl=&pid=ImgRaw"
      HeroTitle="Galeria"
      HeroMotto="Szybko, Smacznie, Świeżo"
      HeroBtnText="menu"
      HeroBtnPath="/menu"
      HeroHeight="60vh"
      HeroHeightMedia="100vh"
      
      
      
      />
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
