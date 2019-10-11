import React, { Fragment } from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Img from "gatsby-image"

import addAudio from 'react-audio-player'

import ReactAudioPlayer from 'react-audio-player';
import { CardBody, CardSubtitle, Card, Badge } from "reactstrap"

import { slugify } from "../util/utilities"


const SinglePost = ({ data, pageContext }) => {
	const post = data.markdownRemark.frontmatter
	let relativePath = '/static/img/'

	let headerImg = post.image.childImageSharp.fluid.originalImg

	const headerStyle = {
		background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('${headerImg}') no-repeat`,
		backgroundSize: 'cover'
	}

	const tags = post.tags.map(tag => (
		<li key={tag}>
			<Link to={`/tag/${slugify(tag)}`}>
				<Badge color="primary">{tag}</Badge>
			</Link>
		</li>
	))


	return (
		<Fragment>
			<div className="superheader" style={headerStyle}>
				<div className="superbanner">
					<h1>{post.title}</h1>
					<div class="author-run">
						<span className="text-info">{post.date}</span> by{" "}
						<span className="text-info">{post.author}</span>
					</div>
				</div>
			</div>
			<Layout pageTitle="" path="/singlepost">
				<SEO title={post.title} />
				<Card className="single-post card">
					<audio
						src={post.audio}
						controls
					/>
					{post.audio != null &&
						<audio
							src={post.audio}
							controls
						/>
					}
					<CardBody>
						<div className="content-container" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
						<div className="tag-container">
							<label>Tags:</label>
							<ul className="post-tags">
								{tags}
							</ul>
						</div>
					</CardBody>
				</Card>
			</Layout>
		</Fragment>
	)
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
				podcast_file {
					relativePath
					absolutePath
				}
				audio
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
							originalImg
            }
          }
        }
      }
    }
  }
`
export default SinglePost