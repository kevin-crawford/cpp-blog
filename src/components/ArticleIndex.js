import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import { indexQuery } from '../graphql/queries';

const ArticleIndex = () => (
	<StaticQuery
		query={indexQuery}
		render={data => {
			return (
				<div>
					<h1>Recent Articles</h1>
					{data.allMarkdownRemark.edges.map(({ node }) => (
						<Post
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

export default ArticleIndex;