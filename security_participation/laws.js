import * as React from "react"
import { useStaticQuery,graphql} from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGavel} from '@fortawesome/free-solid-svg-icons'

const Laws = ({ siteTitle }) => (
    <div className="laws">
        <div className="text">
            <h3>Constitutional Provisions</h3>
            <div className="button1">
                <FontAwesomeIcon icon={faGavel}/><a href="https://labour.gov.in/acts" target="_blank" rel="noopener noreferrer">
                Welfare of Labour, including conditions of work, provident funds, liability for workmen’s 
                compensation, invalidity and Old age pension and maternity Benefits. </a>
            </div>
            <div className="button1">
                 <FontAwesomeIcon icon={faGavel}   /><a href="https://niti.gov.in/planningcommission.gov.in/docs/aboutus/committee/wrkgrp/wg_soclscty.pdf" target="_blank" rel="noopener noreferrer">Old age pension, social security and social insurance, and economic and social planning.</a>
            </div>
            <div className="button1">
                 <FontAwesomeIcon icon={faGavel}   /><a href="https://www.constitutionofindia.net/constitution_of_india/directive_principles_of_state_policy/articles/Article%2041" target="_blank" rel="noopener noreferrer">The State shall, within the limits of its economic capacity and development, make effective provision for securing the right to work, to education and to public assistance in case of undeserved want.</a>
            </div>
            <div className="button1">
                 <FontAwesomeIcon icon={faGavel}   /><a href="https://www.constitutionofindia.net/constitution_of_india/directive_principles_of_state_policy/articles/Article%2041" target="_blank" rel="noopener noreferrer">The right of parents, without any means, to be supported by their children having sufficient means has been recognised by section 125 (1)(d) of the Code of Criminal Procedure 1973, and Section 20(1&3) of the Hindu Adoption and Maintenance Act, 1956.</a>
            </div>
            
        </div>
    </div>
)

export default Laws