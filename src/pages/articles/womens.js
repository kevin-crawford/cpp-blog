import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Post from "../../components/Post"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
const WomensArticles = () => (
  <Layout pageTitle="Womens Waterpolo Articles" >
  <SEO title="Tags" keywords={[`gatsby`, `application`, `react`]} />
  <StaticQuery
    query={womensArticleQuery}
    render={data => {
      return (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post
              key={node.id}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              body={node.excerpt}
              fluid={node.frontmatter.image.childImageSharp.fluid}
              tags={node.frontmatter.tags}
            />
          ))}
        </div>
      )
    }}
  />
  </Layout>
)

const womensArticleQuery = graphql`
  query womensArticleQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
					fields {
              slug
            }
          excerpt
        }
      }
    }
  }
`

export default WomensArticles
