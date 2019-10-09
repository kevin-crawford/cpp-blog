import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/index.scss"
import Footer from '../components/Footer'
import Header from "./header"
import Sidebar from './Sidebar';
import Showcase from '../components/Showcase'
import { Row, Col } from 'reactstrap';

const Layout = ({ children, pageTitle, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content">
        <h1>{pageTitle}</h1>
        {path === '/' ?
          <Row>
            <Col md="8">{children}</Col>
            <Col md="4"><Sidebar /></Col>
          </Row>
          :
          <Row>
            <Col md="12">{children}</Col>
          </Row>
        }

      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
