import React, { Fragment } from 'react'
import reactlogo from '../../../assets/tech/react.svg';
import apollologo from '../../../assets/tech/apollo.png';
import graphqllogo from '../../../assets/tech/graphql.png';
import jslogo from '../../../assets/tech/js.png';
import reduxlogo from '../../../assets/tech/redux.png';
import muilogo from '../../../assets/tech/mui.png';
import typescript from '../../../assets/tech/typescript.png';
import tailwind from '../../../assets/tech/tailwind.png'
import sass from '../../../assets/tech/sass.svg'
import netlify from '../../../assets/tech/netlify.png'
import firebase from '../../../assets/tech/firebase.png'
import mirage from '../../../assets/tech/mirage.jpg'


const Products = () => {
    return (
        <main className="w-full relative min-h-screen flex justify-center items-center">
            <section className='text-4xl m-auto font-bold text-slate-200'>
                <h2>Going beyond together,</h2>
                <h2>Form ideas to productions</h2>
                <div className='w-1/2 center m-auto'>
                    <img
                        src="https://assets.website-files.com/600afabc21c1827d25ce63dd/60182bb078cd0c13b6fdd938_Group%252041412-p-500.png"
                        alt="aboutshahzain-products"
                        title="aboutshahzain-products"
                        className="w-full  pt-2"
                    />
                </div>
            </section>
            <section className=''>
                <img
                    src={reactlogo}
                    alt="aboutshahzain-react"
                    title="aboutshahzain-react"
                    className="absolute blur-sm top-1/4 right-10"
                    width={100}
                />
                <img
                    src={apollologo}
                    alt="aboutshahzain-redux"
                    title="aboutshahzain-redux"
                    className="absolute blur-sm top-20 left-10"
                    width={100}
                />
                <img
                    src={reduxlogo}
                    alt="aboutshahzain-js"
                    title="aboutshahzain-js"
                    className="absolute blur-sm top-0 left-1/2"
                    width={170}
                />
                <img
                    src={graphqllogo}
                    alt="aboutshahzain-graphql"
                    title="aboutshahzain-graphql"
                    className="absolute blur-sm top-1/3 right-2/3"
                    width={100}
                />
                <img
                    src={jslogo}
                    alt="aboutshahzain-graphql"
                    title="aboutshahzain-js"
                    className="absolute top-1/2 left-2/3"
                    width={100}
                />
                <img
                    src={muilogo}
                    alt="aboutshahzain-apollo"
                    title="aboutshahzain-mui"
                    className="absolute bottom-1/3 left-20"
                    width={100}
                />
                <img
                    src={typescript}
                    alt="aboutshahzain-typescript"
                    title="aboutshahzain-typescript"
                    className="absolute top-24 right-1/4"
                    width={100}
                />
                <img
                    src={tailwind}
                    alt="aboutshahzain-graphql"
                    title="aboutshahzain-tailwind"
                    className="absolute bottom-16 right-24  "
                    width={100}
                />
                <img
                    src={sass}
                    alt="aboutshahzain-graphql"
                    title="aboutshahzain-sass"
                    className="absolute top-0 left-1/4  "
                    width={100}
                />
                <img
                    src={netlify}
                    alt="aboutshahzain-graphql"
                    title="aboutshahzain-sass"
                    className="absolute bottom-20 left-1/4 "
                    width={100}
                />
                <img
                    src={firebase}
                    alt="aboutshahzain-graphql"
                    title="aboutshahzain-sass"
                    className="absolute  top-0 right-10 "
                    width={200}
                />
                <img className="absolute bottom-20 left-16 "
                    width={100}
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" />
                <img className="absolute bottom-1/3 right-28 "
                    width={100}
                    src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" />
                <img className="absolute bottom-1/2 left-10 "
                    width={100}
                    src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs" />
                <img
                    src={mirage}
                    alt="aboutshahzain-mirage"
                    title="aboutshahzain-mui"
                    className="absolute bottom-1/3 right-28 "
                    width={100}
                />
            </section>

        </main>
    )
}

export default Products
