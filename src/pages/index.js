import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import PrimarySearchAppBar from '../components/PrimarySearchAppBar'
import Album from '../components/Album'
import Dashboard from '../components/Dashboard'
import { rhythm } from '../utils/typography'
import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper'
import TitlebarGridList from '../components/TitlebarGridList'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
      
        <Album />
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
