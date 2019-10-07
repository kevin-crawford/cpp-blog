import React from "react"
import { StaticQuery } from "gatsby"
import Post from "../components/Post"
import { podcastQuery } from '../graphql/queries';

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
);


export default PodcastIndex;