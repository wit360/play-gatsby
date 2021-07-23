import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import Layout from '../components/layout'

export default function IndexPage() {
  return <Layout pageTitle='Home'>
    <p>following the tutorial</p>
    <StaticImage alt='image alt' src='../images/gochiusa.jpg' /> 
  </Layout>
}
