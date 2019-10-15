import React from "react"
import PodcastIndex from '../components/PodcastIndex'
import Layout from "../components/layout"
import SEO from "../components/seo"

const PodcastPage = () => (
  <Layout pageTitle="Latest Episodes" path="/podcasts">
    <SEO title="Tags" keywords={[`gatsby`, `application`, `react`]} />
    <PodcastIndex />
  </Layout>
)

export default PodcastPage