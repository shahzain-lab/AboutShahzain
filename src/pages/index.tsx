import { graphql } from 'gatsby'
import React from 'react'
import AboutMe from '../components/Home/aboutMe/AboutMe'
import Content from '../components/Home/content/Content'
import Header from '../components/Home/header/Header'
import Services from '../components/Home/services/Services'
import Products from '../components/Home/techstack/products'
import Workflow from '../components/Home/worflow/Workflow'
import { IAbout } from '../interfaces/Header.interface'
import Layout from '../layout/Layout'

const index = ({ data }: IAbout) => {
  console.log(data)
  return (
    <Layout>
      <Header data={data} />
      <AboutMe />
      <Services />
      <Workflow />
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