import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="Oops! Something Went Wrong.." path="/404">
    <SEO title="404: Not found" />
    <div className="btn-404 container">
      <Link className="btn btn-primary text-uppercase" to={"/"}>Go Home</Link>
    </div>

  </Layout>
)

export default NotFoundPage
