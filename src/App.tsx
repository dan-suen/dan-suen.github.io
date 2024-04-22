import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Email from "./components/email/email";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";


function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      //await loadSlim(engine);
      await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };
  const options: ISourceOptions = useMemo(
    () => ({
      key: "big",
      name: "Big Particles",
      particles: {
          number: {
              value: 30,
          },
          color: {
              value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
          },
          shape: {
              type: "circle",
          },
          opacity: {
              value: {
                  min: 0.4,
                  max: 0.8,
              },
          },
          size: {
              value: {
                  min: 300,
                  max: 400,
              },
              animation: {
                  enable: true,
                  speed: 100,
                  sync: false,
              },
          },
          move: {
              enable: true,
              speed: 10,
              direction: "top",
          },
      },
      background: {
          color: "#ffffff",
      },
    }),
    [],
  );

  if (init) {
    return (
      <div className="App">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <Header />
      <body>
        <Projects />
        <Resume />
        <Email />
        <canvas className="background"></canvas>
        <script src="path/to/particles.min.js"></script>
      </body>
      <Footer />
    </div>
    );
  }

  return (
    <></>
  );
}

export default App;
