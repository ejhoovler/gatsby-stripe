import React from "react"

import StoreLayout from "../components/StoreLayout"
import Products from "../components/Products"
import SEO from "../components/SEO"

import Checkout from '../components/checkout'

const IndexPage = () => (
  <StoreLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Products></Products>
  </StoreLayout>
)

export default IndexPage
