import * as React from "react"

import { GlobalStyle } from "../styles/GlobalStyles"
import Footer from "../Footer"
import Navbar from '../Nav/Navbar';

const Layout = ({ children }) => {


  return (
    <>
    <GlobalStyle />

      <Navbar />

        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
