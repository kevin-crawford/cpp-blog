import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Badge } from "reactstrap"
import { slugify } from "../util/utilities"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext

  return (
    <Layout pageTitle="All Tags">
      <SEO title="All Tags" keywords={["tags", "topics"]} />
      <ul className="tags-container">
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color="primary" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage