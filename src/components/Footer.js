import { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  constructor (props) {
    super(props)

    this.footerClickFirst = this.footerClickFirst.bind(this)
    this.footerClickSecond = this.footerClickSecond.bind(this)
    this.state = {
      footerBarFirstOpen: false,
      footerBarSecondOpen: false
    }
  }

  footerClickFirst () {
    this.setState({ footerBarFirstOpen: !this.state.footerBarFirstOpen })
  }

  footerClickSecond () {
    this.setState({ footerBarSecondOpen: !this.state.footerBarSecondOpen })
  }

  renderFooterListFirst () {
    return this.state.footerBarFirstOpen ? 'footer-item-active-flex' : ''
  }

  renderFooterListSecond () {
    return this.state.footerBarSecondOpen ? 'footer-item-active' : ''
  }
  
  render () {
    return (
      <div className="c-footer__container">

        <div className="c-footer-inner__list display-footer-item">     
            <div className="c-footer-inner__list--body">
              <li className="c-footer-upper__list--item inner-item">
                <Link to='/'>
                Home
                </Link>
              </li>
              <li className="c-footer-upper__list--item inner-item">
                <Link to='/about'>
                About Us
                </Link>
              </li>
              <li className="c-footer-upper__list--item inner-item">
                <Link to='/services'>
                Services
                </Link>
              </li>
              <li className="c-footer-upper__list--item inner-item">
                <Link to='/sectors'>
                Sectors
                </Link>
              </li>
              <li className="c-footer-upper__list--item inner-item">
                <Link to='/testimonials'>
                Testimonials
                </Link>
              </li>
              <li className="c-footer-upper__list--item inner-item">
                <Link to='/careers'>
                Careers
                </Link>
              </li>
              <li className="c-footer-upper__list--item inner-item">
                <Link to='/contact'>
                Contact
                </Link>
              </li>
            </div>
          </div>

        <div className="c-footer-upper">
          <div className="c-footer-upper__list remove-footer-item">
            <div className="c-footer-upper__list--head">
              <h4 className="c-footer-upper__list--head-title">Links</h4>
              <hr className="o-line" />
              <span className="c-footer-upper__list--head-btn no-highlight" onClick={this.footerClickFirst}>+</span>
            </div>
            <div className={`c-footer-upper__list--body ${this.renderFooterListFirst()}`}>
              <li className="c-footer-upper__list--item">
                <Link to='/'>
                Home
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link to='/services'>
                Services
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link to='/sectors'>
                Sectors
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link to='/testimonials'>
                Testimonials
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link to='/about'>
                About Us
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link to='/contact'>
                Contact
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link to='/careers'>
                Careers
                </Link>
              </li>
            </div>
          </div>

          <div className="c-footer-upper__list">
            <div className="c-footer-upper__list--head">
              <h4 className="c-footer-upper__list--head-title">Services</h4>
              <hr className="o-line" />
              <span className="c-footer-upper__list--head-btn no-highlight" onClick={this.footerClickSecond}>+</span>
            </div>
            <div className={`c-footer-upper__list--body ${this.renderFooterListSecond()}`}>
              <li className="c-footer-upper__list--item">
                <Link to='/services/cladding-restoration'>
                Cladding &amp; Restoration
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link to='/services/decorative-coatings'>
                Decorative Coatings
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link to='/services/painting'>
                Painting
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link to='/services/internal-external-paint-spray'>
                Internal &amp; External
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link to='/services/protective-coatings'>
                Potective Coatings
                </Link>
              </li>
              <li className="c-footer-upper__list--item">
                <Link to='/services/rendering-plastering'>
                Rendering &amp; Plastering
                </Link>
              </li>
            </div>
          </div>

          <div className="c-footer-upper__list">
            <div className="c-footer-upper__list--head">
              <h4 className="c-footer-upper__list--head-title">Latest News</h4>
              <hr className="o-line" />
            </div>
            <div className={`c-footer-upper__list--body footer-item-active`}>
              
            </div>
          </div>

          <div className="c-footer-upper__list">
            <div className="c-footer-upper__list--head">
              <h4 className="c-footer-upper__list--head-title">Contact</h4>
              <hr className="o-line" />
            </div>
            <div className={`c-footer-upper__list--body footer-item-active`}>
              <li className="c-footer-upper__list--item c-footer-upper__list--item-lineheight">
                <p className="c-footer-upper__list--item__contact">
                  LDC Decorating Contractors Ltd<br />
                  Chamber 2<br />
                  Whitehall Chambers<br />
                  Halifax Road<br />
                  Hipperholme, Halifax<br />
                  HX3 8EN
                </p>
                <p>Tel: 03303 201070</p>
                <p className="c-footer-upper__list--item__contact">Office Hours: Mon-Fri 9am - 6pm</p>
                <p>VAT Number: 141654721</p>
                <p>Company Number: 8169972</p>
              </li>
            </div>
          </div>
        </div>

        <div className="c-footer-lower">
          <div className="c-footer-lower__container">
            <div className="c-footer-lower__copyright">
              <p>Copyright &copy; 2020 LDC Decorating Contractors Ltd. All rights reserved.</p>
            </div>
            <div className="c-footer-lower__list">
            <li className="c-footer-lower__list--item">
                <Link to={`${process.env.REACT_APP_BACKEND_URL}/admin`}>
                  Admin 
                </Link>
              </li>
              <li className="c-footer-lower__list--item">
                <Link to='/legal'>
                  Privacy Policy  
                </Link>
              </li>
              <li className="c-footer-lower__list--item">
                <Link to='/legal'>
                  Use of Cookies  
                </Link>
              </li>
              <li className="c-footer-lower__list--item">
                <Link to='/legal'>
                  T &amp; C 
                </Link>
              </li>
              <li className="c-footer-lower__list--item">
                <Link to='/legal'>
                  FAQ 
                </Link>
              </li>
            </div>
            <div className="c-footer-lower__promotion">
              <p className="c-footer-lower__promotion--text">
                Website by <Link to='//react-blogger.herokuapp.com/' className="c-footer-lower__promotion--text-link">
                  David Walsh 
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer