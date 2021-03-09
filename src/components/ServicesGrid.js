import { Component } from 'react'
import { Link } from 'react-router-dom'

class ServicesGrid extends Component {
  render () {
    return (
      <div className="c-service-sector--grid">
        <div className="c-service-sector--grid__item" data-aos="fade-right">
          <div className="c-service-sector--grid__item--title">
            <h2>Decorative Wall Coatings</h2>
            <hr className="o-line" />
          </div>
          <Link to='/services/decorative-coatings'>
            <div className="c-service-sector--grid__item--image services--decorative-coatings" />
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>Visual Wall Decorations</h4>
          </div>
        </div>

        <div className="c-service-sector--grid__item" data-aos="fade-left">
          <div className="c-service-sector--grid__item--title">
            <h2>Protective &amp; Specialist Coatings</h2>
            <hr className="o-line" />
          </div>
          <Link to='/services/protective-coatings'>
            <div className="c-service-sector--grid__item--image services--protective-coatings" />
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>KNOWLEDGE &amp; EXPERTISE</h4>
          </div>
        </div>

        <div className="c-service-sector--grid__item" data-aos="fade-right">
          <div className="c-service-sector--grid__item--title">
            <h2>Painting</h2>
            <hr className="o-line" />
          </div>
          <Link to='/services/painting'>
            <div className="c-service-sector--grid__item--image services--painting" />
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>PROFESSIONAL PAINTING SERVICES</h4>
          </div>
        </div>

        <div className="c-service-sector--grid__item" data-aos="fade-left">
          <div className="c-service-sector--grid__item--title">
            <h2>Internal &amp; External Paint Spray</h2>
            <hr className="o-line" />
          </div>
          <Link to='/services/internal-external-paint-spray'>
            <div className="c-service-sector--grid__item--image services--internal-external-paint-spray" />
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>PROFESSIONAL PAINT SPRAYING</h4>
          </div>
        </div>

        <div className="c-service-sector--grid__item" data-aos="fade-right">
          <div className="c-service-sector--grid__item--title">
            <h2>Cladding Restoration</h2>
            <hr className="o-line" />
          </div>
          <Link to='/services/cladding-restoration'>
            <div className="c-service-sector--grid__item--image services--cladding-restoration" />
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>EXTERNAL REFURBISHMENTS</h4>
          </div>
        </div>

        <div className="c-service-sector--grid__item" data-aos="fade-left">
          <div className="c-service-sector--grid__item--title">
            <h2>Rendering &amp; Plastering</h2>
            <hr className="o-line" />
          </div>
          <Link to='/services/rendering-plastering'>
            <div className="c-service-sector--grid__item--image services--rendering-plastering" />
          </Link>
          <div className="c-service-sector--grid__item--footer">
            <h4>PRIOR TO PAINT REPAIRS</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default ServicesGrid