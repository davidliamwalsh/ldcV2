import { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import ScrollToTop from './ScrollToTop'
import HeaderIntro from './HeaderIntro'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CookieConsent from "react-cookie-consent"
import Navbar from './Navbar'

class Layout extends Component {

  componentDidMount(){
    document.body.classList.remove("hidden")
    AOS.init({
      duration : 2000,
      offset: 50
    })
  }

  render () {
    return <>
      <HeaderIntro />
      <Navbar />
      <Header />
      <ScrollToTop />
      { this.props.children }
      <Footer />
      <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
      <script src="https://unpkg.com/aos@next/dist/aos.js" />
    </>
  }
}

export default Layout