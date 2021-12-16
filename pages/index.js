import React, { useEffect } from "react";
import { Link, Element, Events, animateScroll as scroll } from "react-scroll";
import WriteForm from "../src/component/WriteForm";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

function index() {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <nav>
        <ul className="nav navbar-nav">
          <li>
            <Link
              activeClass="active"
              className="test1"
              to="test1"
              spy={true}
              smooth={true}
              duration={500}
            >
              Test 1
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="test2"
              to="test2"
              spy={true}
              smooth={true}
              duration={500}
            >
              Test 2
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="test3"
              to="test3"
              spy={true}
              smooth={true}
              duration={500}
            >
              Test 3
            </Link>
          </li>
        </ul>
      </nav>

      <Element name="test1" className="element">
        test 1
      </Element>

      <Element name="test2" className="element">
        test 2
      </Element>

      <Element name="test3" className="element">
        <WriteForm />
      </Element>

      <a onClick={scrollToTop}>To the top!</a>
    </div>
  );
}

export default index;
