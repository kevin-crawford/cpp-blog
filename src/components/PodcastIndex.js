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
          <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687900451&color=%23646464&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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

export default PodcastIndex
