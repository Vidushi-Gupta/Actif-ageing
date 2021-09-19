import * as React from "react"
import { useStaticQuery,graphql} from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faVoteYea} from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"


const Assets = ({ siteTitle }) => (
    <div className="assets">
        <div className="text-assets">
            <h3>Government Policies and Schemes</h3>
            <div className="button2">
                <FontAwesomeIcon icon={faVoteYea}   /><a href="https://pib.gov.in/newsite/PrintRelease.aspx?relid=108092#:~:text=The%20National%20Policy%20on%20Older,the%20quality%20of%20their%20lives." target="_blank" rel="noopener noreferrer">National Policy for Older Persons</a>
            </div>
            <div className="button2">
                 <FontAwesomeIcon icon={faVoteYea}   /><a href="https://pib.gov.in/newsite/PrintRelease.aspx?relid=108092#:~:text=The%20National%20Policy%20on%20Older,the%20quality%20of%20their%20lives." target="_blank" rel="noopener noreferrer">National Council for Older Persons</a>
            </div>
            <div className="button2">
                 <FontAwesomeIcon icon={faVoteYea}   /><a href="https://socialjustice.nic.in/SchemeList/Send/43?mid=48565" target="_blank" rel="noopener noreferrer">Integrated Programme for Older Persons</a>
            </div>
            <div className="button2">
                 <FontAwesomeIcon icon={faVoteYea}   /><a href="https://legislative.gov.in/actsofparliamentfromtheyear/maintenance-and-welfare-parents-and-senior-citizens-act-2007" target="_blank" rel="noopener noreferrer">The Maintenance and Welfare of Parents and Senior Citizen Act, 2007</a>
            </div>
            <div className="button2">
                 <FontAwesomeIcon icon={faVoteYea}   /><a href="https://nhrc.nic.in/faqs/what-are-its-major-initiatives#:~:text=Monitoring%20the%20functioning%20of%20the,under%20a%20Supreme%20Court%20remit.&text=Promotion%20and%20protection%20of%20the%20rights%20of%20the%20disabled.&text=Promotion%20of%20human%20rights%20literacy,and%20more%20widely%20in%20society." target="_blank" rel="noopener noreferrer">Initiatives by National Human Rights Commission (NHRC)</a>
            </div>
            <div className="button2">
                 <FontAwesomeIcon icon={faVoteYea}   /><a href="https://www.un.org/en/observances/older-persons-day" target="_blank" rel="noopener noreferrer">Health Awareness Week for elderly people</a>
            </div>
        </div>
    </div>
)

export default Assets