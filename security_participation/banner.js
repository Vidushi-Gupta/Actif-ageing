import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = ({ siteTitle }) => (
  <>
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">Safety and Security</div>
          <div className="sub-heading">
            Click on the text to be redirected to the government site
          </div>
        </div>
      </div>
    </div>
    {/* <h3>Click on the text to be redirected to the government site</h3> */}
  </>
)

export default Banner
