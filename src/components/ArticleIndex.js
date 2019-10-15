import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"

const ArticleIndex = () => (
  <StaticQuery
    query={indexQuery}
    render={data => {
      return (
        <div>
          <h1>Recent Articles</h1>
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
)

const indexQuery = graphql`
  query indexQuery {
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

export default ArticleIndex
