import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"

const PodcastIndex = () => (
  <StaticQuery
    query={podcastQuery}
    render={data => {
      return (
        <div>
          <h1>Recent Podcasts</h1>
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <Post
              key={index}
              id={node.id}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              path={node.frontmatter.path}
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

const podcastQuery = graphql`
  query podcastQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/podcast/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            path
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default PodcastIndex
