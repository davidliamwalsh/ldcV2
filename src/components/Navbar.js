import { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../static/ldc-logo.png'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.burgerClick = this.burgerClick.bind(this)
    this.state = {
      navBarOpen: false
    }
  }
  
  burgerClick () {
    this.setState({ navBarOpen: !this.state.navBarOpen })
    document.body.classList.toggle("hidden")
  }
  
  renderBurgerMenu () {
    return this.state.navBarOpen ? 'c-navbar--open' : ''
  }

  addFadeMenu () {
    return this.state.navBarOpen ? 'fade' : ''
  }

  renderTransparantNavBar () {
    return window.location.pathname === '/' ? 'c-nav-home' : ''
  }

  burgerRotateTop () {
    return this.state.navBarOpen ? 'c-navbar__burger-top' : ''
  }

  burgerRotateMiddle () {
    return this.state.navBarOpen ? 'c-navbar__burger-middle' : ''
  }

  burgerRotateBottom () {
    return this.state.navBarOpen ? 'c-navbar__burger-bottom' : ''
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handeleScroll);
  }

  handeleScroll() {
    if (window.pageYOffset > 600) {
      document.getElementById("nav").classList.add("c-nav__scroll-down"); 
    } else {
      document.getElementById("nav").classList.remove("c-nav__scroll-down");
    }
  }

  render () {
    
    return (
      <div className={`c-nav ${this.renderTransparantNavBar()}`} id="nav">
        <div className={`c-navbar`}>
          <div className="c-navbar__logo">
            <Link to="/">
            <img className="c-navbar__logo--hero" src={logo} alt="" />
            </Link>
          </div>
          <div className="c-navbar__burger" onClick={this.burgerClick}>
            <div className={`c-navbar__burger-line--top ${this.burgerRotateTop()}`}></div>
            <div className={`c-navbar__burger-line--middle ${this.burgerRotateMiddle()}`}></div>
            <div className={`c-navbar__burger-line--bottom ${this.burgerRotateBottom()}`}></div>
          </div>
          <div className={`c-navbar__links ${this.renderBurgerMenu()}`}>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <Link to='/'>
              Home
              </Link>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <Link to='/about'>
              About
              </Link>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <Link to='/sectors'>
              Sectors
              </Link>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <Link to='/testimonials'>
              Testimonials
              </Link>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <Link to='/careers'>
              Careers
              </Link>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <Link to='/contact'>
              Contact
              </Link>
            </li>
          </div>
        </div> 
      </div>
    )
  }
}

export default Navbar