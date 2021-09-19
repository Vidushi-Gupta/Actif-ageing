import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <h1 class="logo">Actif Ageing</h1>
    <div class="menu-button">
      <h4>Menu-button</h4>
    </div>
    <nav>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#health">Health</a>
      <a href="#participation">Participation</a>
      <a href="https://fervent-borg-1ae553.netlify.app/">Security</a>
      <a href="#contact">Contact Us</a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
