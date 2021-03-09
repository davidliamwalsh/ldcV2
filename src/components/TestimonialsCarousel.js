import React from 'react'
import { gql, useQuery } from '@apollo/client'
import moment from 'moment'
import Slider from 'react-slick'
import { Facebook } from 'react-content-loader'

function TestimonialsCarousel (props) {

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
  
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  }

  if (loading || error) {
    return <div className="c-loader__container">
      <MyFacebookLoader />
  </div>
  } else {
    return <Slider {...settings}>
      {
        data.testimonials.slice(0, props.testimonialSize).map((testimonial, index) => {
          return <div className="c-testimonialcarousel--container" key={index}>
            <div className="c-testimonialcarousel__inner">
              <div className="c-testimonialcarousel__data">
                <div className="c-testimonialcarousel__data--text p-1">
                  <p>{testimonial.body}</p>
                </div>
                <div className="c-testimonialcarousel__data--info">
                  <div className="c-testimonialcarousel__data--info-name">
                    <li className="c-testimonialcarousel__data--info-name__title">{testimonial.title}</li>
                    <li className="c-testimonialcarousel__data--info-name__date">{moment(testimonial.createdAt).format('MMMM Do YYYY')}</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })
      }
  </Slider>
  }
}

export default TestimonialsCarousel