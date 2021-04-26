import React from 'react'
import { gql, useQuery } from '@apollo/client'
import moment from 'moment'
import { Facebook } from 'react-content-loader'

function NewsArticlesFooter (props) {

  const NewsArticlesQuery = gql`
    query newsArticles {
      newsArticles  {
        slug
        id
        title
        body
        createdAt
      }
    }
  `

  const { loading, error, data } = useQuery(NewsArticlesQuery)
  const MyFacebookLoader = () => <Facebook />

  if (loading || error) {
    return <div className="c-loader__container">
      <MyFacebookLoader />
  </div>
  } else {
    return <ul>
    {
      data.newsArticles.slice(0, props.newsArticleSize).map((newsArticle, index) => {
        return <li key={index}>
        <p>{newsArticle.title}</p>
        <p>{newsArticle.body}</p>
        <p>{moment(newsArticle.createdAt).format('MMM Do')}</p>
        </li>
      })
    }
    </ul>
  }
}

export default NewsArticlesFooter