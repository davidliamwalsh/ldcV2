import { Component } from 'react'
import ipaf from '../static/accreditations/ipaf.jpeg'
import alcumus from '../static/accreditations/alcumus.jpg'
import chas from '../static/accreditations/chas.jpg'
import cscs from '../static/accreditations/cscs.jpg'
import ukata from '../static/accreditations/ukata.jpg'

class Accreditations extends Component {
  render () {
    return <>
      <div className="c-accreditations">
        <ul className="c-accreditations__items">
          <li className="c-accreditations__items--item" data-aos="fade">
            <img className="c-accreditations__items--item-img" src={ipaf} alt=""/ >
          </li>
          <li className="c-accreditations__items--item" data-aos="fade" data-aos-delay="400">
            <img className="c-accreditations__items--item-img" src={cscs} alt=""/>
          </li>
          <li className="c-accreditations__items--item" data-aos="fade" data-aos-delay="600">
            <img className="c-accreditations__items--item-img" src={alcumus} alt=""/>
          </li>
          <li className="c-accreditations__items--item" data-aos="fade" data-aos-delay="800">
            <img className="c-accreditations__items--item-img" src={chas} alt=""/>
          </li>
          <li className="c-accreditations__items--item" data-aos="fade" data-aos-delay="1000">
            <img className="c-accreditations__items--item-img" src={ukata} alt=""/>
          </li>
        </ul>
      </div>
    </>
  }
}

export default Accreditations