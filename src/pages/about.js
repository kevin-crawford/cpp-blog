import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="About Us" path="/about">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default AboutPage
