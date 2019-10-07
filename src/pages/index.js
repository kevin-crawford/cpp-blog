import React from "react"

// reactstrap
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "reactstrap"

// COMPONENTS
import Sidebar from "../components/Sidebar"
import PodcastIndex from '../components/PodcastIndex';
import ArticleIndex from '../components/ArticleIndex';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Row>
      <Col md="8">
        <PodcastIndex />
        <ArticleIndex />
      </Col>
      <Col md="4">
        <Sidebar />
      </Col>
    </Row>
  </Layout>
);

export default IndexPage
