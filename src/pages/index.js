import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({userName}) => (
  <Layout>
    <SEO title="Home" />
      <Image />
    <Link to="/blog">Blog{userName}</Link> <br />
    <Link to="/category">Blog{userName}</Link> <br />
  </Layout>
)

export default IndexPage
