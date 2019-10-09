import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PodcastPage = () => (
  <Layout pageTitle="Podcast" path="/podcast">
    <SEO title="Tags" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default PodcastPage
