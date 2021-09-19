import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoneyBillWaveAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const Cards = ({ siteTitle }) => (
  // <!-- Square card -->
  <div className="card-section">
    <div className="textt">



      <h3>Life-long learning and Education Opportunities</h3>
    </div>

    <div className="mdl-card mdl-shadow--2dp demo-card-square">
      <div className="mdl-card__title1 mdl-card--expand">
        <h2 className="mdl-card__title-text"></h2>
      </div>
      <div className="mdl-color-text--blue-700 mdl-card__supporting-text">
        Centre for Lifelong learning, Tata Institute of Social Sciences
      </div>
      <div className="mdl-card__supporting-text">
        By promoting the philosophy of lifelong learning, the CLL would maximise
        the capacities and potential of adult learners to contribute
        meaningfully as citizens.
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <a className="mdl-button mdl-button--accent mdl-js-button mdl-js-ripple-effect">
          <a
            href="https://www.tiss.edu/view/6/mumbai-campus/centre-for-lifelong-learning-2/about-us-12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Course
          </a>
        </a>
      </div>
    </div>

    <div className="mdl-card mdl-shadow--2dp demo-card-square">
      <div className="mdl-card__title2 mdl-card--expand">
        <h2 className="mdl-card__title-text"></h2>
      </div>
      <div className="mdl-color-text--blue-700 mdl-card__supporting-text">
        Institute of lifelong learning, Delhi University
      </div>
      <div className="mdl-card__supporting-text">
        The Institute of Lifelong Learning (ILLL) is dedicated to the cause of
        those who believe that learning is neither age-bound nor
        classroom-bound; rather it takes place throughout life in all kinds of
        situations.
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <a className="mdl-button mdl-button--accent mdl-js-button mdl-js-ripple-effect">
          <a
            href="http://illl.du.ac.in/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Course
          </a>
        </a>
      </div>
    </div>

    <div className="mdl-card mdl-shadow--2dp demo-card-square">
      <div className="mdl-card__title3 mdl-card--expand">
        <h2 className="mdl-card__title-text"></h2>
      </div>
      <div className="mdl-color-text--blue-700 mdl-card__supporting-text">
        International Institute of Adult and Lifelong Education
      </div>
      <div className="mdl-card__supporting-text">
        The Institute strives to professionalize adult education by
        strengthening and promoting it as a distinct but distinguished field of
        practice and discipline of study.
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <a className="mdl-button mdl-button--accent mdl-js-button mdl-js-ripple-effect">
          <a
            href="https://www.iiale.org/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Course
          </a>
        </a>
      </div>
    </div>
  </div>
)

export default Cards
