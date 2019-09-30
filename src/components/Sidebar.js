import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import {
	Card,
	CardTitle,
	CardBody,
	CardText,
	Form,
	FormGroup,
	Input,
} from "reactstrap"

import { Timeline } from 'react-twitter-widgets'
import Img from "gatsby-image"

const Sidebar = () => (
	<div>
		<Card>
			<CardBody>
				<CardTitle className="text-center text-uppercase mb-3">
					Newsletter
        </CardTitle>
				<Form className="text-center">
					<FormGroup>
						<Input
							type="email"
							name="email"
							placeholder="Your email address.."
						/>
					</FormGroup>
					<button className="btn btn-outline-success text-uppercase">
						Subscribe
          </button>
				</Form>
			</CardBody>
		</Card>
		<Card>
			<CardBody>
				<CardTitle className="text-center text-uppercase">
					Advertisement
        </CardTitle>
				<img
					src="https://via.placeholder.com/320x200"
					alt="Advert"
					style={{ width: "100%" }}
				/>
			</CardBody>
		</Card>
		<Card>
			<CardBody>
				<CardTitle className="text-center text-uppercase mb-3">
					Recent Posts
        </CardTitle>
				<StaticQuery
					query={sidebarQuery}
					render={data => (
						<div>
							{data.allMarkdownRemark.edges.map(({ node }) => (
								<Card key={node.id}>
									<Link to={node.fields.slug}>
										<Img
											className="card-image-top"
											fluid={node.frontmatter.image.childImageSharp.fluid}
										/>
									</Link>
									<CardBody>
										<CardTitle>
											<Link to={node.fields.slug}>
												{node.frontmatter.title}
											</Link>
										</CardTitle>
									</CardBody>
								</Card>
							))}
						</div>
					)}
				/>
			</CardBody>
		</Card>
		<Card>
			<CardBody>
				<CardTitle>
					Recent Tweets
				</CardTitle>
				<div className="twitter">
					<a className="twitter-timeline"
						href="https://twitter.com/crosspasspod"
						data-tweet-limit="5"
						data-chrome="nofooter noborders">
						Tweets by @Crosspasspod
					</a>
				</div>

			</CardBody>
		</Card>

	</div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar