import React from "react"

// reactstrap
import Layout from "../components/layout"
import SEO from "../components/seo"

// COMPONENTS
import Sidebar from "../components/Sidebar"
import PodcastIndex from '../components/PodcastIndex';
import ArticleIndex from '../components/ArticleIndex';

const IndexPage = () => (
  <Layout pageTitle="" path="/">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PodcastIndex />
    <ArticleIndex />
  </Layout>
);

export default IndexPage
