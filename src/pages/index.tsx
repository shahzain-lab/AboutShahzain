import React from 'react'
import AboutMe from '../components/Home/aboutMe/AboutMe'
import Header from '../components/Home/header/Header'
import Services from '../components/Home/services/Services'
import Products from '../components/Home/techstack/products'
import Slides from '../components/Home/techstack/slides'
import Workflow from '../components/Home/worflow/Workflow'
import Layout from '../layout/Layout'

const index = () => {
  return (
    <Layout>
      <Header />
      <Slides />
      <AboutMe />
      <Services />
      <Workflow />
      <Products />
    </Layout>
  )
}

export default index
