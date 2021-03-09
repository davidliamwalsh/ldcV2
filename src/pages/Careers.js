import React, { Component } from 'react'
import Layout from '../components/Layout'
import CareersMap from '../components/CareersMap'

class Careers extends Component {

  render () {
    return <Layout>
      <div className="o-head--intro">
        <h4 className="o-head--intro__title">We’re committed to continually developing the careers of all our employees across all areas of the business. This means that all of our operatives receive all the support and training necessary, as well as diverse on the job experience to ensure that they can develop their skills to the highest levels in the industry.</h4>
      </div>

      <div className="o-section-head">
        <h4 className="o-section-head__title">
          Careers
        </h4>
      </div>
      <div className="o-section-head__line">
        <hr />
      </div>
      <div className="c-container">
        <CareersMap />
      </div>
    </Layout>
  }
}

export default Careers