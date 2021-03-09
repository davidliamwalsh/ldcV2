import { Component } from 'react'
import { Link } from 'react-router-dom'

class ClientServices extends Component {
  render () {
    return <>
      <div className="c-container">
        <div className="c-client-services">
          <div className="c-client-services__container">

            <Link to='/services'>
              <div className="c-client-services__card">
                <div className="c-client-services__card--image services--decorative-coatings" />
                <h6 className="c-client-services__card--title">Decorative Wall Coatings</h6>
              </div>
            </Link>

            <Link to='/services'>
              <div className="c-client-services__card">
                <div className="c-client-services__card--image services--protective-coatings" />
                <h6 className="c-client-services__card--title">Protective Coatings</h6>
              </div>
            </Link>

            <Link to='/services'>
              <div className="c-client-services__card">
                <div className="c-client-services__card--image services--painting" />
                <h6 className="c-client-services__card--title">Painting</h6>
              </div>
            </Link>

            <Link to='/services'>
              <div className="c-client-services__card">
                <div className="c-client-services__card--image services--cladding-restoration" />
                <h6 className="c-client-services__card--title">Cladding &amp; Restoration</h6>
              </div>
            </Link>

            <Link to='/services'>
              <div className="c-client-services__card">
                <div className="c-client-services__card--image services--rendering-plastering" />
                <h6 className="c-client-services__card--title">Rendering &amp; Plastering</h6>
              </div>
            </Link>

            <Link to='/services'>
              <div className="c-client-services__card">
                <div className="c-client-services__card--image services--internal-external-paint-spray" />
                <h6 className="c-client-services__card--title">Professional Paint Spray</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  }
}

export default ClientServices