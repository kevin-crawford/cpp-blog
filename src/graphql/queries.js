
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
module.exports = { indexQuery, podcastQuery }