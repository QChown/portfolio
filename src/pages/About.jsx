import { useLayoutEffect, useRef } from "react";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";

const About = () => {
  const header = useRef(null);
  const section = useRef(null);

  gsap.registerPlugin(SplitText);
  //   useLayoutEffect(() => {
  //     var split = new SplitText(header.current, {
  //       type: "words,lines,chars",
  //     });
  //     gsap.from(split.chars, {
  //       duration: 0.27,
  //       autoAlpha: 0,
  //       stagger: 0.005,
  //     });
  //   }, []);

  return (
    <section ref={section} id="about">
      <div className="fg">
        {/* <h1 ref={header} className="colossus">
          Quentin Chown, <br /> Front-end developer.
        </h1>
        <p>Transforming Designs into Immersive Web Experiences</p> */}

        <p>
          Welcome to my portfolio! I'm a front-end web developer with a passion for creating custom solutions that
          deliver exceptional user experiences. With a strong background in building fully customized WordPress themes,
          I've developed numerous websites that go beyond off-the-shelf templates. In addition to WordPress, I have
          expertise in React and Redux, which I utilized to create a fully customized e-commerce and shipping platform
          for a local Saskatchewan cannabis company. This project showcases my ability to handle complex functionalities
          while maintaining a seamless user interface. Animation-rich websites have also been a focus of mine, where
          I've employed the powerful GSAP library and leveraged the ScrollTrigger plugin to bring websites to life. By
          combining smooth animations and scroll-based interactions, I strive to captivate users and create engaging
          digital experiences. Throughout my work, I emphasize reusability, ensuring that my code is modular and
          scalable for future projects. I believe in crafting interfaces that are not only visually appealing but also
          intuitive and user-friendly, enhancing the overall usability of the websites I build. I'm excited to showcase
          my skills and demonstrate how I can contribute to your next web development project. Take a look at my
          portfolio below and feel free to get in touch to discuss potential collaborations.
        </p>
      </div>
    </section>
  );
};

export default About;
