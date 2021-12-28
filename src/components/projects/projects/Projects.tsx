import { graphql, StaticQuery } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React, { useState } from 'react'
import { IProject } from '../../../interfaces/Projects.interface'
import Sort from '../sorts/Sort'
import Project from './Project'


const Projects = () => {
  const [state, setState] = useState('All')

  return (
    <div>
      <div className='w-screen text-center '>
        <h1 className='text-slate-100 text-4xl lg:text-3xl md:text-2xl sm:xl 2sm:text-md mt-10 font-normal indent-20 font-serif capitalize' > Build with modern technologies</h1>
        <p className='text-slate-300 mb-10  leading-relaxed md:indent-10 sm:indent-none text-xl lg:text-lg md:text-md sm:text-sm 2sm:text-opacity-80 font-normal indent-20 font-serif px-6'>Capable of working in challenging environments. Excited about the opportunity to take the next career step with you.</p>
        <Sort state={state} setState={setState} />
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
                    techName
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
             }
              `
          }
          render={data => {
            const dataEdges = data.allContentfulProjects.edges;

            const mainTech = dataEdges.filter(({ node }: IProject) => node.techName === state)
            return (
              <div className='flex flex-wrap justify-around items-center w-screen xl:flex-col '>
                {
                  state === 'All' ?
                    dataEdges.reverse().map(({ node }: IProject) => (
                      <Project key={node.id} node={node} />
                    )) : mainTech.map(({ node }: IProject) => (
                      <Project key={node.id} node={node} />
                    ))}
              </div>
            )
          }
          }
        />
      </div>
    </div >
  )
}

export default Projects
