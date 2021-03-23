import { Component } from 'react'
import Slider from 'react-slick'
import SignupForm from './SignupForm'
import Banner from './Banner'

class Header extends Component {
  render () {

    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    }

    if (window.location.pathname === '/') {
      return (
        <div className="c-header">
          <Slider {...settings}>
            <div>
              <div className="c-header__slider--image c-header__first">
                <div className="c-form__container">
                  <SignupForm />
                  <div className="c-form__message">
                    <p>Keep up to date with our activities by signing up to our mailing list and receive alerts everytime we post a new news article</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="c-header__slider--image c-header__second">
                <div className="c-header__slider--image-container" data-aos="zoom-in">
                  <div className="c-header__slider--image-title c-header__slider--image-item">
                    <h2 className="c-header__slider--image-item__text">Residential Renovation</h2>
                  </div>
                  <div className="c-header__slider--image-main c-header__slider--image-item">
                    <h4 className="c-header__slider--image-item__text">Specialists</h4>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="c-header__slider--image c-header__third">
                <div className="c-header__slider--image-container" data-aos="zoom-in">
                  <div className="c-header__slider--image-title c-header__slider--image-item">
                    <h2 className="c-header__slider--image-item__text">Commercial Restoration</h2>
                  </div>
                  <div className="c-header__slider--image-main c-header__slider--image-item">
                    <h4 className="c-header__slider--image-item__text">Specialists</h4>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="c-header__slider--image c-header__forth">
                <div className="c-header__slider--image-container" data-aos="zoom-in">
                  <div className="c-header__slider--image-title c-header__slider--image-item">
                    <h2 className="c-header__slider--image-item__text">School Refurbishment</h2>
                  </div>
                  <div className="c-header__slider--image-main c-header__slider--image-item">
                    <h4 className="c-header__slider--image-item__text">Specialists</h4>
                  </div>
                </div>
              </div>
            </div>
            </Slider>
        </div>
      )
    } else {
      return (
        <>
          <Banner />
        </>
      )
     
    }
  }
}

export default Header