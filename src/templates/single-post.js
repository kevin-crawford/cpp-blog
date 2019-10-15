import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import authors from '../util/authors';

import SEO from "../components/seo"
import Img from "gatsby-image"

import { CardBody, CardSubtitle, Card, Badge } from "reactstrap"

import { slugify } from "../util/utilities"

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  let headerImg = post.image.childImageSharp.fluid.src
  const author = authors.find(x => x.name === post.author);

  console.log(post.audio, 'audio file')

  const headerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('${headerImg}') no-repeat`,
    backgroundSize: "cover",
  }

  const tags = post.tags.map(tag => (
    <li key={tag}>
      <Link to={`/tag/${slugify(tag)}`}>
        <Badge color="primary">{tag}</Badge>
      </Link>
    </li>
  ))

  return (
    <div>
      <div className="superheader" style={headerStyle}>
        <div className="superbanner">
          <h1>{post.title}</h1>
          <div class="author-run">
            <span className="text-info">{post.date}</span> by{" "}
            <span className="text-info">{post.author}</span>
          </div>
        </div>
      </div>
      <Layout pageTitle="" path="/singlepost" postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
        <SEO title={post.title} />
        <Card className="single-post card">
          {post.audio && <audio src={post.audio} controls />}
          <CardBody>
            <div
              className="content-container"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            <div className="tag-container">
              <label>Tags:</label>
              <ul className="post-tags">{tags}</ul>
            </div>
          </CardBody>
        </Card>
      </Layout>
    </div>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        audio
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default SinglePost
