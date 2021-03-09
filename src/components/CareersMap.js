import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Facebook } from 'react-content-loader'
import { Link } from 'react-router-dom'

const CareersMap = () => {

  const CareersItemsQuery = gql`
    query careersItems {
      careersItems  {
        slug
        id
        title
        jobDescription
        jobType
        experience
        location
        driversLicense
        language
      }
    }
  `
  
  const { loading, error, data } = useQuery(CareersItemsQuery)
  const MyFacebookLoader = <Facebook />

  if (loading || error) {
    return <div className="c-loader__container">
      <MyFacebookLoader />
    </div>
  } else {
    return <div className="c-careers">
      {
        data.careersItems.map((careersItem, index) => {
          return <li className="c-careers__item" key={index} data-aos="fade">
            <div className="c-careers__item--inner">
              <h5 className="c-careers__item--inner-title">{careersItem.title}</h5>
              <h5 className="c-careers__item--inner-body">{careersItem.jobDescription}</h5>
              <h5 className="c-careers__item--inner-list">Job Type: {careersItem.jobType}</h5>
              <li className="c-careers__item--inner-list">Required Experience: {careersItem.experience}</li>
              <li className="c-careers__item--inner-list">Location: {careersItem.location}</li>
              <li className="c-careers__item--inner-list">Required Licence or Certification: {careersItem.driversLicense}</li>
              <li className="c-careers__item--inner-list">Required Language: {careersItem.language}</li>
              <li className="c-careers__item--inner-list">Please email CV and cover letter to 
              <Link to={`mailto:info@ldcdecoratingcontractors.co.uk`}>
                info@ldcdecoratingcontractors.co.uk 
              </Link>
              </li>
            </div>
          </li>
        })
      }
    </div>
  }
}

export default CareersMap