import React, { useRef, useEffect } from 'react'
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
import mockLaptop from '../../../assets/home/mockLaptop.png'
import gsap from 'gsap';


const Products = () => {
    const reactRef = useRef(null);
    const apolloRef = useRef(null);
    const reduxRef = useRef(null);
    const graphRef = useRef(null);
    const jsRef = useRef(null);
    const muiRef = useRef(null);
    const typescriptRef = useRef(null);
    const tailwindRef = useRef(null);
    const netlifyRef = useRef(null);
    const firebaseRef = useRef(null);
    const sassRef = useRef(null);
    const gitRef = useRef(null);
    const jestRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        gsap.utils.toArray(
            [
                reactRef.current,
                apolloRef.current,
                reduxRef.current,
                graphRef.current,
                jsRef.current,
                muiRef.current,
                typescriptRef.current,
                tailwindRef.current,
                netlifyRef.current,
                firebaseRef.current,
                sassRef.current,
                gitRef.current,
                jestRef.current,
                chartRef.current,
            ]
        ).forEach((el: any) => {
            gsap.to(el, {
                y: 30,
                yoyo: true,
                duration: 3,
                repeat: -1,

            })
        })


    }, [])
    return (
        <main className="w-full relative min-h-screen md:h-screen flex md:flex-col-reverse justify-center items-center">
            <section className='text-4xl text-center md:text-2xl m-auto font-bold text-slate-200'>
                <h2>Going beyond together,</h2>
                <h2
                >From ideas to productions</h2>
                <div className='w-1/2 md:w-full text-center m-auto'>
                    <img
                        src="https://assets.website-files.com/600afabc21c1827d25ce63dd/60182bb078cd0c13b6fdd938_Group%252041412-p-500.png"
                        alt="aboutshahzain-products"
                        title="aboutshahzain-products"
                        className="w-full md:mx-auto md:w-1/4 pt-2"
                    />
                    <img
                        src={mockLaptop}
                        alt="aboutshahzain-products"
                        title="aboutshahzain-products"
                        className=" absolute bottom-10 md:relative md:mx-auto md:w-1/4"
                        width={250}
                    />
                </div>
            </section>
            <section className='md:relative md:h-1/2 md:w-full md:h-1/2'>
                <img
                    ref={reactRef} src={reactlogo}
                    alt="aboutshahzain-react"
                    title="aboutshahzain-react"
                    className="absolute md:w-14 blur-sm top-1/4 right-10"
                    width={90}
                />
                <img
                    ref={apolloRef} src={apollologo}
                    alt="aboutshahzain-redux"
                    title="aboutshahzain-redux"
                    className="absolute md:w-14 blur-sm top-20 left-10"
                    width={90}
                />
                <img
                    ref={reduxRef} src={reduxlogo}
                    alt="aboutshahzain-js"
                    title="aboutshahzain-js"
                    className="absolute md:w-14 blur-sm md:blur-none top-10 left-1/2"
                    width={150}
                />
                <img
                    ref={graphRef} src={graphqllogo}
                    alt="aboutshahzain-graphql"
                    title="aboutshahzain-graphql"
                    className="absolute md:w-14 blur-sm top-1/3 right-2/3"
                    width={90}
                />
                <img
                    ref={jsRef} src={jslogo}
                    alt="aboutshahzain-graphql"
                    title="aboutshahzain-js"
                    className="absolute md:w-14 top-1/2 left-2/3"
                    width={90}
                />
                <img
                    ref={muiRef} src={muilogo}
                    alt="aboutshahzain-apollo"
                    title="aboutshahzain-mui"
                    className="absolute md:w-14 bottom-1/3 left-20 md:left-36"
                    width={90}
                />
                <img
                    ref={typescriptRef} src={typescript}
                    alt="aboutshahzain-typescript"
                    title="aboutshahzain-typescript"
                    className="absolute md:w-14 top-24 right-1/4 md:left-1/2"
                    width={90}
                />
                <img
                    ref={tailwindRef} src={tailwind}
                    alt="aboutshahzain-graphql"
                    title="aboutshahzain-tailwind"
                    className="absolute md:w-14 bottom-16 right-24  "
                    width={90}
                />
                <img
                    ref={sassRef} src={sass}
                    alt="aboutshahzain-graphql"
                    title="aboutshahzain-sass"
                    className="absolute md:w-14 top-10 left-1/4  "
                    width={90}
                />
                <img
                    ref={netlifyRef} src={netlify}
                    alt="aboutshahzain-graphql"
                    title="aboutshahzain-sass"
                    className="absolute md:w-14 bottom-1/4 left-1/4 md:left-1/2"
                    width={90}
                />
                <img
                    ref={firebaseRef} src={firebase}
                    alt="aboutshahzain-graphql"
                    title="aboutshahzain-sass"
                    className="absolute  md:w-20 top-16 right-10 md:top-10"
                    width={200}
                />
                <img className="absolute md:w-14 bottom-20 left-16 "
                    width={90}
                    ref={gitRef} src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" />
                <img className="absolute md:w-14 bottom-1/3 right-28 md:right-10"
                    width={90}
                    ref={jestRef} src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" />
                <img className="absolute md:w-14 bottom-1/2 left-10 "
                    width={90}
                    ref={chartRef} src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs" />

            </section>

        </main>
    )
}

export default Products
