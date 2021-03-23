import { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../static/thisLogo.svg'

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
      document.getElementById("nav").classList.add("c-nav__scroll-down")
      document.getElementById("navbar").classList.add("c-navbar__scroll-down")
      document.getElementById("navbar-logo").classList.add("c-navbar__scroll-down--logo")
      document.getElementById("navbar__link").classList.add("c-navbar__scroll-down--link")
    } else {
      document.getElementById("nav").classList.remove("c-nav__scroll-down")
      document.getElementById("navbar").classList.remove("c-navbar__scroll-down")
      document.getElementById("navbar-logo").classList.remove("c-navbar__scroll-down--logo")
      document.getElementById("navbar__link").classList.remove("c-navbar__scroll-down--link")
    }
  }

  render () {
    
    return (
      <div className="c-nav" id="nav">
        <div className={`c-navbar`} id="navbar">
          <Link to="/" className="c-navbar__logo no-highlight" id="navbar-logo">
            <img className="c-navbar__logo--hero" src={logo} alt="" />
          </Link>
          <div className="c-navbar__burger no-highlight" onClick={this.burgerClick}>
            <div className={`c-navbar__burger-line--top ${this.burgerRotateTop()}`}></div>
            <div className={`c-navbar__burger-line--middle ${this.burgerRotateMiddle()}`}></div>
            <div className={`c-navbar__burger-line--bottom ${this.burgerRotateBottom()}`}></div>
          </div>
          <div className={`c-navbar__links ${this.renderBurgerMenu()}`}>
            <li className={`c-navbar__link ${this.addFadeMenu()}`} id="navbar__link">
              <NavLink exact to='/'
              activeStyle={{color: "#2B282E", borderBottom: "2px solid #DC3545"}}>
                Home
              </NavLink>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`} id="navbar__link">
              <NavLink to='/about'
              activeStyle={{color: "#2B282E", borderBottom: "2px solid #DC3545"}}>
                About
              </NavLink>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`} id="navbar__link">
              <NavLink to='/sectors'
              activeStyle={{color: "#2B282E", borderBottom: "2px solid #DC3545"}}>
                Sectors
              </NavLink>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`} id="navbar__link">
              <NavLink to='/services'
              activeStyle={{color: "#2B282E", borderBottom: "2px solid #DC3545"}}>
                Services
              </NavLink>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`} id="navbar__link">
              <NavLink to='/testimonials'
              activeStyle={{color: "#2B282E", borderBottom: "2px solid #DC3545"}}>
                Testimonials
              </NavLink>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`} id="navbar__link">
              <NavLink to='/careers'
              activeStyle={{color: "#2B282E", borderBottom: "2px solid #DC3545"}}>
                Careers
              </NavLink>
            </li>
            <li className={`c-navbar__link ${this.addFadeMenu()}`} id="navbar__link">
              <NavLink to='/contact'
              activeStyle={{color: "#2B282E", borderBottom: "2px solid #DC3545"}}>
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