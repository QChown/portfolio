import { useLayoutEffect, useRef } from "react";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";

const Home = () => {
  const header = useRef(null);
  const section = useRef(null);

  gsap.registerPlugin(SplitText);
  useLayoutEffect(() => {
    var split = new SplitText(header.current, {
      type: "words,lines,chars",
    });
    gsap.from(split.chars, {
      duration: 0.27,
      autoAlpha: 0,
      stagger: 0.005,
    });
  }, []);

  return (
    <section ref={section} id='splash'>
      <div className='deco'></div>
      <div className='fg'>
        <h1 ref={header} className='colossus'>
          Discover the power of <br /> front-end development.
        </h1>
        <p>
          Quentin Chown: Transforming Designs into Immersive Web Experiences
        </p>
      </div>
    </section>
  );
};

export default Home;
