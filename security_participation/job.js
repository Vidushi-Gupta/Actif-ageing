import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoneyBillWaveAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Job = () => {
  const data = useStaticQuery(graphql`
    query {
      potRender: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="card__list row">
      <div className="headingg">
        <h3>Formal Work</h3>
      </div>

      <div className="card__box col-md-6 col-sm-12">
        <div className="card">
          <div className="card__img1">
            {/* <Img fluid={data.gardenRender.childImageSharp.fluid}/> */}
            <div className="card-img-overlay">
              <span className="badge badge-pill badge-danger"></span>{" "}
            </div>
          </div>
          <div className="card__content">
            <h4 className="card__title">
              <div className="job-title">
              <a target="_blank" href="https://www.linkedin.com/company/microsoft/jobs/">Senior Consultant</a>
              </div>
            </h4>
            <p className="card__text">
              <i className="fa fa-map-marker" aria-hidden="true"></i> New Delhi
            </p>
            <p className="card__description">
            The responsibilities of a senior consultant include assisting with drafting strategies, designing solutions using established processes, and contributing to client satisfaction.
            </p>
            <div className="card__bottom">
              <div className="options">
                <span className="date">
                  <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                  Microsoft
                </span>
                <span className="category">
                  <i className="fa fa-tag" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card__box col-md-6 col-sm-12">
        <div className="card">
          <div className="card__img">
            {/* <Img fluid={data.gardenRender.childImageSharp.fluid}/> */}
            <div className="card-img-overlay">
              <span className="badge badge-pill badge-danger"></span>{" "}
            </div>
          </div>
          <div className="card__content">
            <h4 className="card__title">
              <div className="job-title">
              <a target="_blank" href="https://www.linkedin.com/company/microsoft/jobs/" >Project Mentor</a>
              </div>
            </h4>
            <p className="card__text">
              <i className="fa fa-map-marker" aria-hidden="true"></i> Mumbai
            </p>
            <p className="card__description">
            A mentor assists more junior team members to create a long-term plan of where they would like to focus their career path and helps them to develop their professional abilities and also overcome challenges they may face.
            </p>
            <div className="card__bottom">
              <div className="options">
                <span className="date">
                  <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                  Microsoft
                </span>
                <span className="category">
                  <i className="fa fa-tag" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Job
