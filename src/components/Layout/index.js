import * as React from "react"

import { GlobalStyle } from "../styles/GlobalStyles"
import Footer from "../Footer/index.js"
import Navbar from '../Nav/Navbar';

import scrollTo from 'gatsby-plugin-smoothscroll';

const Layout = ({ children }) => {


  return (
    <>
    <GlobalStyle />
<div id="top"></div>
      <Navbar />

        <main>{children}</main>
        <button id="scroll-btn" className={window.pageYOffset < 400 ? "display-none" : "display-block"} onClick={() => scrollTo('#top')}>My link</button>
      <Footer />
    </>
  )
}

export default Layout
