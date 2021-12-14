import React from 'react'
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

const Slides = () => {
    return (
        <section className='flex w-full overflow-x-scroll mt-20 mb-32'>
            <img
                src={reactlogo}
                alt="aboutshahzain-react"
                title="aboutshahzain-react"
                className=" brightness-75 hover:brightness-100"
                width={150}
            />
            <img
                src={apollologo}
                alt="aboutshahzain-redux"
                title="aboutshahzain-redux"
                className=" brightness-75 hover:brightness-100 py-4"
                width={150}
            />
            <img
                src={reduxlogo}
                alt="aboutshahzain-js"
                title="aboutshahzain-js"
                className="  brightness-70 hover:brightness-100 py-4"
                width={170}
            />
            <img
                src={graphqllogo}
                alt="aboutshahzain-graphql"
                title="aboutshahzain-graphql"
                className=" brightness-75 hover:brightness-100 py-4"
                width={150}
            />
            <img
                src={jslogo}
                alt="aboutshahzain-graphql"
                title="aboutshahzain-js"
                className=" brightness-75 hover:brightness-100 py-4"
                width={150}
            />
            <img
                src={muilogo}
                alt="aboutshahzain-apollo"
                title="aboutshahzain-mui"
                className=" brightness-75 hover:brightness-100 py-4"
                width={150}
            />
            <img
                src={typescript}
                alt="aboutshahzain-typescript"
                title="aboutshahzain-typescript"
                className=" brightness-75 hover:brightness-100 p-4"
                width={150}
            />
            <img
                src={tailwind}
                alt="aboutshahzain-graphql"
                title="aboutshahzain-tailwind"
                className=" brightness-75 hover:brightness-100 p-4"
                width={150}
            />
            <img
                src={sass}
                alt="aboutshahzain-graphql"
                title="aboutshahzain-sass"
                className=" brightness-75 hover:brightness-100 p-4"
                width={150}
            />
            <img
                src={netlify}
                alt="aboutshahzain-graphql"
                title="aboutshahzain-sass"
                className=" brightness-75 hover:brightness-100 p-4"
                width={150}
            />
            <img
                src={firebase}
                alt="aboutshahzain-graphql"
                title="aboutshahzain-sass"
                className=" brightness-75 hover:brightness-100 py-4"
                width={200}
            />

            <img
                src={mirage}
                alt="aboutshahzain-mirage"
                title="aboutshahzain-mui"
                className=" brightness-75 hover:brightness-100 p-4"
                width={150}
            />
        </section>
    )
}

export default Slides
