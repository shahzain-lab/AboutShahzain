import React, { useEffect, useRef, useState } from 'react'
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
import gsap from 'gsap';


const Slides = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


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

        gsap.set('.wrapper', { xPercent: -50, yPercent: -50 })


        var boxWidth = 300,
            totalWidth = boxWidth * 7 + 200,  // * n of boxes + diff textBox
            time = 20,
            no01 = document.querySelectorAll("#no01 .box"),
            dirFromLeft = "+=" + totalWidth,
            dirFromRight = "-=" + totalWidth;

        var mod = gsap.utils.wrap(0, totalWidth);
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
            gsap.set(el, {
                x: function (i) {
                    return i * boxWidth;
                }
            })
            gsap.to(ele, {
                x: dirFromLeft,
                modifiers: {
                    x: x => mod(parseFloat(x)) + "px"
                },
                duration: time, ease: 'none',
                repeat: -1,
            });
        })



        var action = gsap.timeline()
            .to(no01, {
                x: dirFromLeft,
                modifiers: {
                    x: x => mod(parseFloat(x)) + "px"
                },
                duration: time, ease: 'none',
                repeat: -1,
            });

        // gsap.utils.toArray(
        //     [
        //         reactRef.current,
        //         apolloRef.current,
        //         reduxRef.current,
        //         graphRef.current,
        //         jsRef.current,
        //         muiRef.current,
        //         typescriptRef.current,
        //         tailwindRef.current,
        //         netlifyRef.current,
        //         firebaseRef.current,
        //         sassRef.current,
        //         gitRef.current,
        //         jestRef.current,
        //         chartRef.current,
        //     ]
        // ).forEach((el: any) => {
        //     var mod = gsap.utils.wrap(0, totalWidth);

        //     gsap.set(no01, {
        //         x: function (i) {
        //             return i * boxWidth;
        //         }
        //     });

        //     var action = gsap.timeline()
        //         .to(el, {
        //             x: dirFromLeft,
        //             modifiers: {
        //                 x: x => mod(parseFloat(x)) + "px"
        //             },
        //             duration: time, ease: 'none',
        //             repeat: -1,
        //         });
        // })


    }, [])


    return (
        <section
            className='wrapper no01 flex w-full overflow-x-hidden mt-20 mb-32'>
            <img
                ref={reactRef}
                src={reactlogo}
                alt="aboutshahzain-react"
                title="aboutshahzain-react"
                className="box brightness-75 hover:brightness-100"
                width={150}
            />
            <img
                ref={apolloRef}
                src={apollologo}
                alt="aboutshahzain-redux"
                title="aboutshahzain-redux"
                className="box brightness-75 hover:brightness-100 py-4"
                width={150}
            />
            <img
                ref={reduxRef}
                src={reduxlogo}
                alt="aboutshahzain-js"
                title="aboutshahzain-js"
                className="  brightness-70 hover:brightness-100 py-4"
                width={170}
            />
            <img
                ref={graphRef}
                src={graphqllogo}
                alt="aboutshahzain-graphql"
                title="aboutshahzain-graphql"
                className="box brightness-75 hover:brightness-100 py-4"
                width={150}
            />
            <img
                ref={jsRef}
                src={jslogo}
                alt="aboutshahzain-graphql"
                title="aboutshahzain-js"
                className="box brightness-75 hover:brightness-100 py-4"
                width={150}
            />
            <img
                ref={muiRef}
                src={muilogo}
                alt="aboutshahzain-apollo"
                title="aboutshahzain-mui"
                className="box brightness-75 hover:brightness-100 py-4"
                width={150}
            />
            <img
                ref={typescriptRef}
                src={typescript}
                alt="aboutshahzain-typescript"
                title="aboutshahzain-typescript"
                className="box brightness-75 hover:brightness-100 p-4"
                width={150}
            />
            <img
                ref={tailwindRef}
                src={tailwind}
                alt="aboutshahzain-graphql"
                title="aboutshahzain-tailwind"
                className="box brightness-75 hover:brightness-100 p-4"
                width={150}
            />
            <img
                ref={sassRef}
                src={sass}
                alt="aboutshahzain-graphql"
                title="aboutshahzain-sass"
                className="box brightness-75 hover:brightness-100 p-4"
                width={150}
            />
            <img
                ref={netlifyRef}
                src={netlify}
                alt="aboutshahzain-graphql"
                title="aboutshahzain-sass"
                className="box brightness-75 hover:brightness-100 p-4"
                width={150}
            />
            <img
                ref={firebaseRef}
                src={firebase}
                alt="aboutshahzain-graphql"
                title="aboutshahzain-sass"
                className="box brightness-75 hover:brightness-100 py-4"
                width={200}
            />

        </section>
    )
}

export default Slides
