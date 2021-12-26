import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
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


const marqueeTexts = [
  {
               src: reactlogo,
                alt: "aboutshahzain-react",
                title: "aboutshahzain-react",
                className: " brightness-75 hover:brightness-100",
                width: 150
  },
  {
               src: apollologo,
                alt: "aboutshahzain-apollo",
                title: "aboutshahzain-apollo",
                className: " brightness-75 hover:brightness-100",
                width: 150
  },
  {
               src: graphqllogo,
                alt: "aboutshahzain-graphql",
                title: "aboutshahzain-graphql",
                className: " brightness-75 hover:brightness-100",
                width: 150
  },
  {
               src: jslogo,
                alt: "aboutshahzain-graphql",
                title: "aboutshahzain-graphql",
                className: " brightness-75 hover:brightness-100",
                width: 150
  },
  {
               src: reduxlogo,
                alt: "aboutshahzain-graphql",
                title: "aboutshahzain-graphql",
                className: " brightness-75 hover:brightness-100",
                width: 150
  },
  {
               src: muilogo,
                alt: "aboutshahzain-graphql",
                title: "aboutshahzain-graphql",
                className: " brightness-75 hover:brightness-100",
                width: 150
  },
  {
               src: typescript,
                alt: "aboutshahzain-graphql",
                title: "aboutshahzain-graphql",
                className: " brightness-75 hover:brightness-100",
                width: 150
  },
  {
               src: tailwind,
                alt: "aboutshahzain-graphql",
                title: "aboutshahzain-graphql",
                className: " brightness-75 hover:brightness-100",
                width: 150
  },
  {
               src: sass,
                alt: "aboutshahzain-graphql",
                title: "aboutshahzain-graphql",
                className: " brightness-75 hover:brightness-100",
                width: 150
  },
  {
               src: netlify,
                alt: "aboutshahzain-graphql",
                title: "aboutshahzain-graphql",
                className: " brightness-75 hover:brightness-100",
                width: 150
  },
  {
               src: firebase,
                alt: "aboutshahzain-graphql",
                title: "aboutshahzain-graphql",
                className: " brightness-75 hover:brightness-100",
                width: 150
  },
];

const Marquee = () => {
  const marqueeElements = useRef([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const marqueeTween = useRef();

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      marqueeTween.pause().kill();
    };
  }, []);

  useEffect(() => {
    marqueeInitialSet();
    marqueeTween.current && marqueeTween.current.pause().kill();
    marqueeTween.current = gsap.to(marqueeElements.current, {
      x: `+=${screenWidth * 1.5}`,
      ease: "none",
      repeat: -1,
      duration: 10,
      rotation: 0.1,
      modifiers: {
        x: (x) => {
          return (parseFloat(x) % (screenWidth * 1.5)) + "px";
        }
      }
    });
  }, [screenWidth]);

  const marqueeInitialSet = () => {
    gsap.set(marqueeElements.current, {
      xPercent: -100,
      x: function (index) {
        return (screenWidth / 2) * index;
      }
    });
  };

  const resizeHandler = () => {
    gsap.set(marqueeElements.current, { clearProps: "all" });
    setScreenWidth(window.innerWidth);
  };

  const marqueeElementsRefHandler = (e, i) => {
    marqueeElements.current[i] = e;
  };

  const renderMarqueeElements = () => {
    if (marqueeTexts.length === 1) {
      marqueeTexts[2] = marqueeTexts[1] = marqueeTexts[0];
    }
    if (marqueeTexts.length === 2) {
      marqueeTexts[2] = marqueeTexts[0];
    }
    return marqueeTexts.map((e, i) => (
      <img
        className={e.className}
        key={`marquee-${i}`}
        src={e.src}
        title={e.title}
        alt={e.title}
        width={e.width}
        ref={(el) => marqueeElementsRefHandler(el, i)}
      />
        
    ));
  };
  return (
    <div
      className=" relative w-screen mt-8 py-4 bg-green-600 text-gray-200 flex overflow-hidden items-center"
      style={{ minHeight: "110px" }}
    >
      {renderMarqueeElements()}
    </div>
  );
};

export default Marquee;

