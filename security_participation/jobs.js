import * as React from "react"
import { useStaticQuery,graphql} from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMoneyBillWaveAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"
import {Helmet } from "react-helmet"

const Jobs = ({ siteTitle }) => (
    <>
    <Helmet>
        <script
  src="http://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
    </Helmet>
    <div className="jobs">
      <h3>Job Opportunities</h3>
    <article class="job-card">
      <div class="company-logo-img">
        <img src="https://s3-ap-southeast-1.amazonaws.com/hs.user-files/employer_logo/346/primetech-technology.png" />
      </div>
      <div class="job-title">Software Engineer</div>
      <div class="company-name">Hays</div>
      <div class="skills-container">
        <div class="skill">Photoshop</div>
        <div class="skill">Illustrator</div>
        <div class="skill">HTML</div>
      </div>
      <button class="apply">Apply</button>
      <a href="#"></a>
    </article>
    <article class="job-card">
      <div class="company-logo-img">
        <img src="https://s3-ap-southeast-1.amazonaws.com/hs.user-files/employer_logo/346/primetech-technology.png" />
      </div>
      <div class="job-title">Software Engineer</div>
      <div class="company-name">Hays</div>
      <div class="skills-container">
        <div class="skill">Photoshop</div>
        <div class="skill">Illustrator</div>
        <div class="skill">HTML</div>
      </div>
      <button class="apply">Apply</button>
      <a href="#"></a>
    </article>
    </div>
    
</>
)

export default Jobs