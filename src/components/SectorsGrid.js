import { Component } from 'react'
import { Link } from 'react-router-dom'

class SectorsGrid extends Component {
  render () {
    return (
      <div className="c-service-sector--grid">
        <div className="c-service-sector--grid__item" data-aos="fade-right">
          <div className="c-service-sector--grid__item--title">
            <h2>Retail &amp; Shop Fitting</h2>
            <hr className="o-line" />
          </div>
          <Link to='/sectors/retail-shops'>
            <div className="c-service-sector--grid__item--image sectors--retail" />
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>MAKE YOUR BUSINESS STAND OUT</h4>
          </div>
        </div>

        <div className="c-service-sector--grid__item" data-aos="fade-left">
          <div className="c-service-sector--grid__item--title">
            <h2>Factories &amp; Industrial</h2>
            <hr className="o-line" />
          </div>
          <Link to='/sectors/factories-industrial'>
            <div className="c-service-sector--grid__item--image sectors--factories" />
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>INTERIOR &amp; EXTERIOR REFURBISHMENTS</h4>
          </div>
        </div>

        <div className="c-service-sector--grid__item" data-aos="fade-right">
          <div className="c-service-sector--grid__item--title">
            <h2>Schools</h2>
            <hr className="o-line" />
          </div>
          <Link to='/sectors/schools'>
            <div className="c-service-sector--grid__item--image sectors--schools" />
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>EDUCATION REDECORATION SPECIALISTS</h4>
          </div>
        </div>

        <div className="c-service-sector--grid__item" data-aos="fade-left">
          <div className="c-service-sector--grid__item--title">
            <h2>Office Space</h2>
            <hr className="o-line" />
          </div>
          <Link to='/sectors/offices'>
            <div className="c-service-sector--grid__item--image sectors--offices" />
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>OFFICE REDECORATION SERVICES</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default SectorsGrid