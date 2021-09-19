import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/styles.scss"
import {Helmet } from "react-helmet"
import Header from "../components/header"
import Banner from "../components/banner"
import Laws from "../components/laws"
import Assets from "../components/assests"
import Concessions from "../components/concession"
import Emergency from "../components/emergency"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
  <Helmet>
  <meta charSet="utf-8" />
          <title>Actif Ageing | Security</title>
          <link rel="canonical" />
  </Helmet>
  <div>
    <Header />
    <Banner />
    <Emergency />
    <Laws />  
    <Assets />
    <Concessions />
    <Footer />
    
  </div>
  </>
)

export default IndexPage
