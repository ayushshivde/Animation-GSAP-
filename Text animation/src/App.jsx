import { ReactLenis } from "lenis/react";
import "./styles/index.scss";
import Copy from "./components/copy";

const App = () => {
  return (
    <>
      <ReactLenis root>
        <nav>
          <div className="col1">
            <div className="sub-col">
              <span>GREYLOOM</span>
            </div>

            <div className="sub-col">
              <span>HOME</span>
              <span>ABOUT</span>
              <span>PRODUCT</span>
              <span>LAB</span>
            </div>
          </div>
          <div className="col2">
            <span> LET'S TALK</span>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-img bg-black">
            <img src="/img.jpeg" alt="" />
          </div>
          <div className="header">
            <Copy delay={0.5}>
              <h1>We craft identities and experiences for the bold.</h1>
            </Copy>
          </div>
        </section>

        <section className="about">
          <Copy>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              voluptatum.
            </span>
          </Copy>
          <div className="header">
            <Copy>
              <h1>
                We partner with founders, innovators, and change-makers to shape
                brands that resonate. From first lines of code to global
                launches, we bring focus, elegance, and intent to every stage.
              </h1>
            </Copy>
          </div>
        </section>

        <section className="about-img">
          <img src="/img.jpeg" alt="" />
        </section>

        <section className="story">
          <div className="col1">
    
              <h1>
                The Story Behind <br /> Our Stillness
              </h1>
        
          </div>
          <div className="col2">
            <Copy>
              <p>
                Greyloom was born from a simple idea: that creativity, when
                wielded with intention, can quietly reshape the world. In an era
                of overstimulation and fleeting trends, we chose a different
                path. One of clarity, restraint, and long-form vision.
              </p>
<br />
              <p>
                We began as a small collective of designers, developers, and
                strategists who shared an obsession with thoughtful execution.
                No shortcuts, no templates. Just the hard, honest work of
                listening deeply, thinking critically, and building beautifully.
                Over time, our work began to attract the kind of clients we had
                always hoped for. Visionary founders, principled organizations,
                and global teams with sharp ideas and quiet confidence
              </p>
<br />

              <p>
                We don’t chase virality. We don’t trade in noise. We build for
                the long haul: timeless identities, seamless digital
                experiences, and strategies that evolve with clarity and
                purpose. Greyloom exists for those who believe that the most
                enduring ideas don’t demand attention. They earn it.
              </p>
            </Copy>
          </div>
        </section>

        <section className="philosophy">
          <Copy>
            <span>The Thought Beneath</span>
          </Copy>
          <div className="header">
            <Copy>
              <h1>
                We believe in the power of quiet conviction. In work that speaks
                softly but lingers long. In design as a tool for clarity, not
                decoration. We believe that the best ideas don’t demand
                attention. Our philosophy is simple. Create with purpose.
              </h1>
            </Copy>
          </div>
        </section>

        <footer>
          <div className="col">
            <div className="sub-col">
              <span>Terms & Conditions</span>
            </div>
            <div className="social">
              <Copy>
                <h1>Twitter</h1>
                <h1>LinkedIn</h1>
                <h1>Instagram</h1>
                <h1>Awwwards</h1>
                <h1>Email</h1>
              </Copy>
            </div>
          </div>
          <div className="col">
            <span>Copyright Greyloom 2025</span>
          </div>
        </footer>
      </ReactLenis>
    </>
  );
};

export default App;
