import React from 'react'
import { gql, useQuery } from '@apollo/client'
import moment from 'moment'
import { Facebook } from 'react-content-loader'

const TestimonialsMap = (props) => {

  const TestimonialsQuery = gql`
    query testimonials {
      testimonials  {
        slug
        image
        previewImage
        id
        title
        body
        createdAt
      }
    }
  `

  const { loading, error, data } = useQuery(TestimonialsQuery)
  const MyFacebookLoader = () => <Facebook />

  if (loading || error) {
    return <div className="c-loader__container">
    <MyFacebookLoader />
  </div>
  } else {
    return <div className="c-testimonial">
      {
        data.testimonials.slice(0, props.testimonialSize).map((testimonial, index) => {
          return <div className="c-testimonial__container" key={index} data-aos="fade-in">
            <div className="c-testimonial__image">
              <img className="c-testimonial__image--hero" src={`${process.env.REACT_APP_BACKEND_URL}${testimonial.previewImage}`} alt="brand" />
            </div>
            <div className="c-testimonial__main">
              <h5 className="c-testimonial__main--body">{testimonial.body}</h5>
              <h5 className="c-testimonial__main--date">{moment(testimonial.createdAt).format('MMMM Do YYYY')}</h5>
              <hr className="o-line__testimonial" />
              <h5 className="c-testimonial__main--title">{testimonial.title}</h5>
            </div>
          </div>
        })
      }
  </div>
  }
}

export default TestimonialsMap