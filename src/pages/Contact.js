import React, { Component } from 'react'
import Layout from '../components/Layout'
import ContactMap from '../components/ContactMap'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'

class Contact extends Component {

  render () {
    return <Layout>
      <ContactMap />
      <div className="o-head--intro">
        <h5 className="o-head--intro__inset">If you have any questions about our services or would like to request a quote, then please fill out our contact form below.</h5>
        <h5 className="o-head--intro__inset">Alternatively you can email us on 
        <Link to='mailto:enquiries@ldcdecorating.co.uk'>
          enquiries@ldcdecorating.co.uk 
        </Link>. We will try to respond within 24 hours.</h5>
      </div>

      <ContactForm />
    </Layout>
  }
}

export default Contact