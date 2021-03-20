import { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../static/logo-faviconcopy.png'

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
          <Link to="/" className="c-navbar__logo">
            <img className="c-navbar__logo--hero" src={logo} alt="" />
          </Link>
          <div className="c-navbar__burger" onClick={this.burgerClick}>
            <div className={`c-navbar__burger-line--top ${this.burgerRotateTop()}`}></div>
            <div className={`c-navbar__burger-line--middle ${this.burgerRotateMiddle()}`}></div>
            <div className={`c-navbar__burger-line--bottom ${this.burgerRotateBottom()}`}></div>
          </div>
          <div className={`c-navbar__links ${this.renderBurgerMenu()}`}>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <NavLink exact to='/' activeClassName="active-nav-page"
              activeStyle={{color: "#ede9e1"}}>
                Home
              </NavLink>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <NavLink to='/about' activeClassName="active-nav-page"
              activeStyle={{color: "#ede9e1"}}>
                About
              </NavLink>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <NavLink to='/sectors' activeClassName="active-nav-page"
              activeStyle={{color: "#ede9e1"}}>
                Sectors
              </NavLink>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <NavLink to='/testimonials' activeClassName="active-nav-page"
              activeStyle={{color: "#ede9e1"}}>
                Testimonials
              </NavLink>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <NavLink to='/careers' activeClassName="active-nav-page"
              activeStyle={{color: "#ede9e1"}}>
                Careers
              </NavLink>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`}>
              <NavLink to='/contact' activeClassName="active-nav-page"
              activeStyle={{color: "#ede9e1"}}>
                Contact
              </NavLink>
            </li>
          </div>
        </div> 
      </div>
    )
  }
}

export default Navbar