import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/styles.scss"
import {Helmet } from "react-helmet"
import Header from "../components/header"
import Cards from "../components/card"
import Bannerp from "../components/banner-p"
import Job from "../components/job"
import Events from "../components/events"
import Footer from "../components/footer"

const SecondPage = () => (
  <>
  <Helmet>
  <meta charSet="utf-8" />
          <title>Actif Ageing | Participation</title>
          <link rel="canonical" />
  <script src="https://storage.googleapis.com/code.getmdl.io/1.0.2/material.min.js"></script>
  <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.2/material.blue-orange.min.css"></link>
  
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
  </Helmet>
  <main>
    <Header />
    <Bannerp />
    <Cards />
    <Job />
    <Events />
    <Footer />
  </main>
  </>
)

export default SecondPage
