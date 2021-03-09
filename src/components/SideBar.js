import { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

class SideBar extends Component {
  render () {
    return <>
      <ul className="c-service-sector-table__main--sidebar--list">
        <h4 className="c-service-sector-table__main--sidebar--list-title">Services Provided</h4>
        <hr className="o-line" />
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link to='/services/decorative-coatings'>
            Decorative Coatings 
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link to='/services/protective-coatings'>
            Protective &amp; Specialist Coatings  
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link to='/services/internal-external-paint-spray'>
            Internal &amp; External Paint Spray 
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link to='/services/painting'>
            Painting  
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link to='/services/cladding-restoration'>
            Cladding Restoration  
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link to='/services/rendering-plastering'>
            Rendering &amp; Plastering  
          </Link>
        </li>
      </ul>

      <ul className="c-service-sector-table__main--sidebar--list">
        <h4 className="c-service-sector-table__main--sidebar--list-title">View More Sectors</h4>
        <hr className="o-line" />
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link to='/sectors/schools'>
            Schools &amp; Education 
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link to='/sectors/retail-shops'>
            Retail &amp; Fit Outs 
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link to='/sectors/factories-industrial'>
            Industrial  
          </Link>
        </li>
        <li className="c-service-sector-table__main--sidebar--list-item">
          <span className="c-service-sector-table__main--sidebar--list-item__icon"><FontAwesomeIcon icon={faChevronRight} /></span>
          <Link to='/sectors/offices'>
            Office  
          </Link>
        </li>
      </ul>
    </>
  }
}

export default SideBar