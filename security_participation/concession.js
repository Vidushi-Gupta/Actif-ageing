import * as React from "react"
import { useStaticQuery,graphql} from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMoneyBillWaveAlt} from '@fortawesome/free-solid-svg-icons'

const Concessions = ({ siteTitle }) => (
    <div className="laws">
        <div className="text">
            <h3>Concessions and Facilities</h3>
            <div className="button1">
                <FontAwesomeIcon icon={faMoneyBillWaveAlt}/><Link to="https://web.whatsapp.com/">Separate ticket counters for senior citizens at various Passenger Reservation System centres if the average demand per shift is more than 120 tickets</Link>
            </div>
            <div className="button1">
                 <FontAwesomeIcon icon={faMoneyBillWaveAlt}   /><Link to="https://web.whatsapp.com/">Separate ticket counters for senior citizens at various Passenger Reservation System centres if the average demand per shift is more than 120 tickets</Link>
            </div>
            <div className="button1">
                 <FontAwesomeIcon icon={faMoneyBillWaveAlt}   /><Link to="https://web.whatsapp.com/">40% and 50% concession in rail fare for male passengers aged 60 years and above and female passengers aged 58 years and above respectively.</Link>
            </div>
            <div className="button1">
                 <FontAwesomeIcon icon={faMoneyBillWaveAlt}   /><Link to="https://web.whatsapp.com/">Wheel chairs at stations for old age passengers</Link>
            </div>
            <div className="button1">
                 <FontAwesomeIcon icon={faMoneyBillWaveAlt}   /><Link to="https://web.whatsapp.com/">Senior Citizens Savings Scheme has been introduced by the Government through Post Offices in India which offers higher rate of interest on the deposits made by the senior citizen in post offices.</Link>
            </div>
            <div className="button1">
                 <FontAwesomeIcon icon={faMoneyBillWaveAlt}   /><Link to="https://web.whatsapp.com/">Income tax exemption for Senior Citizens of 60 years and above up to INR 2.50 lakh per annum.</Link>
            </div>
            <div className="button1">
                 <FontAwesomeIcon icon={faMoneyBillWaveAlt}   /><Link to="https://web.whatsapp.com/">Income tax exemption for Senior Citizens of 80 years and above up to INR 5.0 lakh per annum.</Link>
            </div>
            <div className="button1">
                 <FontAwesomeIcon icon={faMoneyBillWaveAlt}   /><Link to="https://web.whatsapp.com/">Deduction of INR 20,000 under Section 80D is allowed to an individual who pays medical insurance premium for his/ her parent or parents, who is a senior citizen.</Link>
            </div>
            <div className="button1">
                 <FontAwesomeIcon icon={faMoneyBillWaveAlt}   /><Link to="https://web.whatsapp.com/">An individual is eligible for a deduction of the amount spent or INR 60,000, whichever is less for medical treatment of a dependent senior citizen.</Link>
            </div>
            
        </div>
    </div>
)

export default Concessions