import { Component } from 'react'
import { Link } from 'react-router-dom'
import johnstone from '../static/brands/johnstone.jpg'
import dulux from '../static/brands/dulux.jpg'
import crown from '../static/brands/crown.jpg'
import farrowball from '../static/brands/farrowball.jpg'
import glidden from '../static/brands/glidden.jpg'
import leyland from '../static/brands/leyland.jpg'
import macpherson from '../static/brands/macpherson.jpg'
import polycell from '../static/brands/polycell.jpg'
import sikkens from '../static/brands/sikkens.jpg'
import zoffany from '../static/brands/zoffany.jpg'

class ServicesBrands extends Component {
  render () {
    return <div className="c-services-brands">
      <div className="c-services-brands__item" data-aos="fade">
        <div className="c-services-brands__item--image">
          <Link to='//www.johnstonespaint.com/'>
            <img src={johnstone} alt=""/>  
          </Link>
        </div>
        <div className="c-services-brands__item--footer">
          <p>Johnstones offer unrivalled quality and reliability to help to transform the homes of people across the country.</p>
        </div>
      </div>
      <div className="c-services-brands__item" data-aos="fade">
        <div className="c-services-brands__item--image">
          <Link to='//www.crownpaints.co.uk/'>
            <img src={crown} alt=""/>  
          </Link>
        </div>
        <div className="c-services-brands__item--footer">
          <p>Crown Paints are a world leading coatings supplier to the decorative, protective, marine, container and yacht markets.</p>
        </div>
      </div>
      <div className="c-services-brands__item" data-aos="fade">
        <div className="c-services-brands__item--image">
          <Link to='//www.dulux.co.uk/'>
            <img src={dulux} alt=""/>  
          </Link>
        </div>
        <div className="c-services-brands__item--footer">
          <p>Johnstones products have been at the forefront of the UK paint market since 1890. They offer unrivalled quality</p>
        </div>
      </div>
      <div className="c-services-brands__item" data-aos="fade">
        <div className="c-services-brands__item--image">
          <Link to='//www.farrow-ball.com/'>
            <img src={farrowball} alt=""/> 
          </Link>
        </div>
        <div className="c-services-brands__item--footer">
          <p>Johnstones products have been at the forefront of the UK paint market since 1890. They offer unrivalled quality</p>
        </div>
      </div>
      <div className="c-services-brands__item" data-aos="fade">
        <div className="c-services-brands__item--image">
          <Link to='//www.glidden.com/'>
            <img src={glidden} alt=""/>  
          </Link>
        </div>
        <div className="c-services-brands__item--footer">
          <p>Johnstones products have been at the forefront of the UK paint market since 1890. They offer unrivalled quality</p>
        </div>
      </div>
      <div className="c-services-brands__item" data-aos="fade">
        <div className="c-services-brands__item--image">
          <Link to='//leylandtrade.com/'>
            <img src={leyland} alt=""/>  
          </Link>
        </div>
        <div className="c-services-brands__item--footer">
          <p>We've built up a strong reputation by delivering top quality paint for over 90 years..</p>
        </div>
      </div>
      <div className="c-services-brands__item" data-aos="fade">
        <div className="c-services-brands__item--image">
          <Link to='//www.macphersontrade.co.uk/'>
            <img src={macpherson} alt=""/> 
          </Link>
        </div>
        <div className="c-services-brands__item--footer">
          <p>Johnstones products have been at the forefront of the UK paint market since 1890. They offer unrivalled quality</p>
        </div>
      </div>
      <div className="c-services-brands__item" data-aos="fade">
        <div className="c-services-brands__item--image">
          <Link to='//www.polycell.co.uk/'>
            <img src={polycell} alt=""/> 
          </Link>
        </div>
        <div className="c-services-brands__item--footer">
          <p>Johnstones products have been at the forefront of the UK paint market since 1890. They offer unrivalled quality</p>
        </div>
      </div>
      <div className="c-services-brands__item" data-aos="fade">
        <div className="c-services-brands__item--image">
          <Link to='//www.sikkens.com/'>
            <img src={sikkens} alt=""/>  
          </Link>
        </div>
        <div className="c-services-brands__item--footer">
          <p>Johnstones products have been at the forefront of the UK paint market since 1890. They offer unrivalled quality</p>
        </div>
      </div>
      <div className="c-services-brands__item" data-aos="fade">
        <div className="c-services-brands__item--image">
          <Link to='//www.stylelibrary.com/zoffany/'>
            <img src={zoffany} alt=""/>  
          </Link>
        </div>
        <div className="c-services-brands__item--footer">
          <p>Johnstones products have been at the forefront of the UK paint market since 1890. They offer unrivalled quality</p>
        </div>
      </div>
    </div>
  }
}

export default ServicesBrands