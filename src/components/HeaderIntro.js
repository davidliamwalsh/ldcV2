import { Component } from 'react'
import { Link } from 'react-router-dom'

class HeaderIntro extends Component {
  
  render () {
    return <div className="c-top" id="head-intro">
      <div className="c-header-intro">
        <div className="c-header-intro__container">
          <div className="c-header-intro__contact">
            <li className="c-header-intro__contact--inset">
              <Link to='tel:03303201070'>
              03303 201070
              </Link>
            </li>
            <li>|</li>
            <li className="c-header-intro__contact--inset">
              <Link to='mailto:info@ldcdecoratingcontractors.co.uk'>
              info@ldcdecoratingcontractors.co.uk
              </Link>
            </li>
          </div>
          <div className="c-header-intro__links">
            <li className="c-header-intro__links--link">
              <Link to='/services'>
              Services
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  }
}

export default HeaderIntro