import * as React from "react"

import { GlobalStyle } from "../styles/GlobalStyles"
import Footer from "../Footer/index.js"
import Navbar from '../Nav/Navbar';
import ScrollBtn from '../ScrollBtn'


const Layout = ({ children }) => {


  return (
    <>
    <GlobalStyle />
      <Navbar />

        <main>{children}</main>
        <ScrollBtn showBelow={250} />
      <Footer />
    </>
  )
}

export default Layout
