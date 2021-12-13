import React from 'react'
import AboutMe from '../components/Home/aboutMe/AboutMe'
import Header from '../components/Home/header/Header'
import Products from '../components/Home/techstack/products'
import Slides from '../components/Home/techstack/slides'
import Layout from '../layout/Layout'

const index = () => {
  return (
    <Layout>
      <Header />
      <Slides />
      <AboutMe />
      <Products />
    </Layout>
  )
}

export default index
