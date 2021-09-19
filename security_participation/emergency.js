import * as React from "react"
import { useStaticQuery,graphql} from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"
const Emergency = ({ siteTitle }) => (
    <div className="emergency">
        <div className="text-emergency">
            <h3>Emergency Numbers</h3>
            <div className="number">
                <FontAwesomeIcon icon={faPhoneAlt}   /><a>Police: 100</a>
            </div>
            <div className="number">
                 <FontAwesomeIcon icon={faPhoneAlt}   /><a>Fire: 101</a>
            </div>
            <div className="number">
                 <FontAwesomeIcon icon={faPhoneAlt}   /><a>Ambulance: 102</a>
            </div>
            <div className="number">
                 <FontAwesomeIcon icon={faPhoneAlt}   /><a>Senior Citizen Helpline: 14567</a>
            </div>
            <div className="number">
                 <FontAwesomeIcon icon={faPhoneAlt}   /><a>Women Helpline: 1091</a>
            </div>
            <div className="number">
                 <FontAwesomeIcon icon={faPhoneAlt}   /><a href="https://www.india.gov.in/topics/home-affairs-enforcement/police" target="_blank" rel="noopener noreferrer">Click for Telephone directory for all police stations.</a>
            </div>
            <div className="number">
                 <FontAwesomeIcon icon={faPhoneAlt}   /><a href="https://indianhelpline.com/" target="_blank" rel="noopener noreferrer">Other Important numbers in India.</a>
            </div>
        </div>
    </div>
)

export default Emergency