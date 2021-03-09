import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Facebook } from 'react-content-loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const PaintingStaff = (props) => {

  const PaintingStaffQuery = gql`
    query decorators {
      decorators  {
        slug
        image
        previewImage
        id
        title
        subtitle
        email
        linkedin
        body
      }
    }
  `

  const { loading, error, data } = useQuery(PaintingStaffQuery)
  const MyFacebookLoader = () => <Facebook />

  if (loading || error) {
    return <div className="c-loader__container">
      <MyFacebookLoader />
    </div>
  } else {
    return <div className="o-grid-3-2-1">
      {
        data.decorators.slice(0, props.decoratorSize).map((decorator, index) => {
          return <div className="c-about__grid_card" key={index}>
            <div className="c-about__grid_card--hero">
              <img className="c-about__grid_card--hero-image" src={`${process.env.REACT_APP_BACKEND_URL}${decorator.previewImage}`} alt={decorator.id} />
            </div>
            <div className="c-about__grid_card--head">
              <h4 className="c-about__grid_card--head-main">{decorator.title}</h4>
              <h4 className="c-about__grid_card--head-inset">{decorator.subtitle}</h4>
              <hr className="c-about__grid_card--head-line" />
            </div>
            <div className="c-about__grid_card--text">
              <p>{decorator.body}</p>
            </div>
            <div className="c-about__grid_card--links">
              <Link to={`mailto:${decorator.email}`}>
                <FontAwesomeIcon icon={faAt} /> 
              </Link>
              <Link to={`${decorator.linkedin}`}>
                <FontAwesomeIcon icon={faLinkedinIn} /> 
              </Link>
            </div>
          </div>
        })
      }
    </div>
  }
  
}

export default PaintingStaff