import React, { Fragment } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { CardBody, CardSubtitle, Card, Badge } from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/utilities"


const SinglePost = ({ data, pageContext }) => {
	const post = data.markdownRemark.frontmatter
	let relativePath = '/static/img/'

	let headerImg = post.image.childImageSharp.fluid.originalImg

	const headerStyle = {
		background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('${headerImg}') no-repeat`,
		backgroundSize: 'cover'
	}
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
			<Layout pageTitle="">
				<SEO title={post.title} />
				<Card>
					{/* {post.podcast_file != null &&
						<audio
							controls
							src={relativePath}>
							Your browser does not support the
							<code>audio</code> element.
					</audio>
					} */}
					<CardBody>
						<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
						<ul className="post-tags">
							{post.tags.map(tag => (
								<li key={tag}>
									<Link to={`/tag/${slugify(tag)}`}>
										<Badge color="primary">{tag}</Badge>
									</Link>
								</li>
							))}
						</ul>
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