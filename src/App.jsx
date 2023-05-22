import { useLayoutEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Footer } from "./components/footer/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const mainContainer = useRef(null);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [isScrolling, setIsScrolling] = useState(false);
  // useLayoutEffect(() => {
  //   let sections = gsap.utils.toArray("section");
  //   let ctx;
  //   ctx = gsap.context(() => {
  //     gsap.to(sections, {
  //       xPercent: -100 * (sections.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         id: "myID",
  //         trigger: mainContainer.current,
  //         pin: true,
  //         scrub: 1,
  //         snap: 1 / (sections.length - 1),
  //         end: () => "+=" + mainContainer.current.offsetWidth,
  //         onUpdate: (self) => {
  //           setIsScrolling(true);
  //         },
  //         onScrubComplete: () => setIsScrolling(false),
  //         onSnapComplete: (self) => setScrollPosition(self.scroll()),
  //         onToggle: () => console.log("onToggle"),
  //       },
  //     });
  //   });
  //   return () => {
  //     ctx.revert();
  //   };
  // }, []);

  // const handleClick = () => {
  //   let sections = gsap.utils.toArray("section");
  //   let horizontalScroller = ScrollTrigger.getById("myID");
  //   let sectionWidth = mainContainer.current.offsetWidth / 2;
  //   console.log(horizontalScroller.snap());
  //   horizontalScroller.scroll(scrollPosition + sectionWidth);
  // };

  return (
    <main ref={mainContainer} className="container">
      {/* <div className="decorations">
        <div className="square"></div>
        <div className="square"></div>
      </div> */}
      <Home />
      <About />
      {/* <button style={{ position: "absolute" }} onClick={handleClick}>
        {isScrolling ? "scrolling " : "ready"}
      </button> */}
      <Footer />
    </main>
  );
};

export default App;
