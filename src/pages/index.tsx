import { graphql } from 'gatsby'
import React from 'react'
import AboutMe from '../components/Home/aboutMe/AboutMe'
import Contact from '../components/Home/contact/Contact'
import Content from '../components/Home/content/Content'
import Header from '../components/Home/header/Header'
import Services from '../components/Home/services/Services'
import Products from '../components/Home/techstack/products'
import Workflow from '../components/Home/worflow/Workflow'
import { IAbout } from '../interfaces/Header.interface'
import Layout from '../layout/Layout'

const index = ({ data }: IAbout) => {

  return (
    <Layout>
      <Header data={data} />
      <AboutMe />
      <Services />
      <Workflow />
      <Contact />
      <Products />
      <Content />
    </Layout>
  )
}

export default index

export const query = graphql`
query MyQuery {
  contentfulMaintitle {
    title
    description {
          raw
     }
    }
   }
 `