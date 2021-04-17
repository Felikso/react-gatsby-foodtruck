import * as React from "react"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "../components/Footer"
import Navbar from '../components/Nav/Navbar';

const Layout = ({ children }) => {


  return (
    <>
    <GlobalStyle />
{/*       <Header  /> */}
      <Navbar />

        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
