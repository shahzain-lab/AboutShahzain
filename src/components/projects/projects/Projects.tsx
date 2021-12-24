import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Sort from '../sorts/Sort'
import Project from './Project'

const Projects = () => {
  return (
    <div>
      <div className='w-screen text-center '>
        <h1 className='text-slate-100 text-4xl mt-10 font-normal indent-20 font-serif capitalize' > Build with modern technologies</h1>
        <p className='text-slate-300 mb-10  leading-relaxed text-xl font-normal indent-20 font-serif px-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptatum.</p>
        <Sort />
      </div >
      <div>
        <StaticQuery
          query={
            graphql`
                     query MyProjectsQuery {
  allContentfulProjects {
    edges {
      node {
        title
        description {
          raw
        }
        url
        githubUrl
        id
        image {
          gatsbyImageData(
            placeholder: BLURRED
            breakpoints: [750, 1080, 1366, 1920]
            formats: AUTO
          )
        }
      }
    }
  }
} `
          }
          render={data => (
            <div className='flex flex-wrap justify-around items-center w-screen'>
              {
                data.allContentfulProjects.edges.reverse().map(({ node }: any) => (
                  <Project key={node.id} node={node} />
                ))}
            </div>
          )
          }
        />
      </div>
    </div >
  )
}

export default Projects
