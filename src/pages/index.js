import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import OfferIntro from "../components/OfferIntro"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  <OfferIntro heading="Serdecznie polecamy" />
  <Testimonials />
  <Stats />
  <Email />
  </Layout>
)

export default IndexPage
