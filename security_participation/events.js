import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoneyBillWaveAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar"

const Events = ({ siteTitle }) => (
  <div className="events">
    <h3>Community Events</h3>
    <div className="calendar">
      <ReactEmbeddedGoogleCalendar
        publicUrl="https://calendar.google.com/calendar/embed?src=b757ea6ehfjmih8ggmk9cej8vs%40group.calendar.google.com&ctz=Asia%2FKolkata"
        height="600px"
      />
    </div>
  </div>
)

export default Events
