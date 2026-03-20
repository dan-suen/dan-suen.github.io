import getogether from "./getogether.png";
import marketplace from "./marketplace.png";
import dan_suen from "./dan-suen.github.io.png";
import halloumi from "./halloumi.png";
import chess_expo from "./chess-expo.png";

import "./projects.scss";

export default function Projects() {
  const card: React.CSSProperties = {
    maxWidth: "540px",
  };
  return (
    <div>
      <div className="projects">
        <h3>Languages</h3>
        [![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
        [![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
        [![Python](https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
        [![Java](https://img.shields.io/badge/-Java-007396?style=for-the-badge&logo=java&logoColor=white)](https://www.java.com/)
        [![C](https://img.shields.io/badge/-C%2FC%2B%2B-F7731E?style=for-the-badge&logo=c&logoColor=black)](https://en.wikipedia.org/wiki/C_(programming_language))
        [![Ruby](https://img.shields.io/badge/-Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)](https://www.ruby-lang.org/en/)
        [![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://whatwg.org/)
        [![CSS](https://img.shields.io/badge/-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
        [![SQL](https://img.shields.io/badge/-SQL-003B57?style=for-the-badge&logo=postgresql&logoColor=white)](https://en.wikipedia.org/wiki/SQL)
        [![Bash](https://img.shields.io/badge/-Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white)](https://www.gnu.org/software/bash/)
        [![Lisp](https://img.shields.io/badge/-Lisp-8A2BE2?style=for-the-badge&logo=lisp&logoColor=white)](https://en.wikipedia.org/wiki/Lisp_(programming_language))
        [![Smalltalk](https://img.shields.io/badge/-Smalltalk-2E86AB?style=for-the-badge&logo=smalltalk&logoColor=white)](https://en.wikipedia.org/wiki/Smalltalk)
        [![Elixir](https://img.shields.io/badge/-Elixir-4B275F?style=for-the-badge&logo=elixir&logoColor=white)](https://elixir-lang.org/)
        <h3>Frameworks, Libraries & Environments</h3>
        [![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
        [![React
        Native](https://img.shields.io/badge/React_Native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactnative.dev/)
        [![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
        [![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
        [![Express](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
        [![Rails](https://img.shields.io/badge/Rails-CC0000?style=for-the-badge&logo=rails&logoColor=white)](https://rubyonrails.org/)
        [![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
        [![SASS](https://img.shields.io/badge/-SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
        [![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)](https://jquery.com/)
        <h3>Testing</h3>
        [![Jest](https://img.shields.io/badge/-Jest-white?style=for-the-badge&logo=jest&logoColor=C21325)](https://jestjs.io/)
        [![Mocha](https://img.shields.io/badge/-Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white)](https://mochajs.org/)
        [![Chai](https://img.shields.io/badge/-Chai-white?style=for-the-badge&logo=chai&logoColor=A30701)](https://www.chaijs.com/)
        [![Cypress](https://img.shields.io/badge/-Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
        [![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
        <h3>Systems & Databases</h3>
        [![Git](https://img.shields.io/badge/Git-white?style=for-the-badge&logo=git&logoColor=#F05032)](https://git-scm.com/)
        [![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)](https://www.linux.org/)
        [![Postgres](https://img.shields.io/badge/PostgreSQL-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
        <br />
        <br />
        <h1>Some of my Projects:</h1>
        <div className="items">
          <div className="card mb-3" style={card}>
            <div className="row g-0">
              <div className="col-md-4" style={{ overflow: "hidden" }}>
                <a
                  href="https://github.com/dan-suen/dan-suen.github.io"
                  target="_blank"
                >
                  <img
                    src={dan_suen}
                    className="img-fluid rounded-start"
                    alt="dan-suen.github.io"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">dan-suen.github.io</h5>
                  <p className="card-text">
                    This site was built using a mixture of JS, TS and React. It
                    features a little section about myself, my skills and my
                    contact info. You can also contact me via the textbox on the
                    Contact Page!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={card}>
            <div className="row g-0">
              <div className="col-md-4" style={{ overflow: "hidden" }}>
                <a
                  href="https://github.com/dan-suen/marketplace"
                  target="_blank"
                >
                  <img
                    src={marketplace}
                    className="img-fluid rounded-start"
                    alt="marketplace"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Marketplace</h5>
                  <p className="card-text">
                    Marketplace is a full stack web application built with
                    Express, PostgreSql and Node.js. The application itself
                    simulates the ability to create and delete items in an
                    online marketplace. Users are view items being listed and
                    mark them as favourites or even inquire the owner via a
                    messaging system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={card}>
            <div className="row g-0">
              <div className="col-md-4" style={{ overflow: "hidden" }}>
                <a
                  href="https://github.com/dan-suen/GeTogether"
                  target="_blank"
                >
                  <img
                    src={getogether}
                    className="img-fluid rounded-start"
                    alt="getogether"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Getogether</h5>
                  <p className="card-text">
                    GeTogether is a project that is loosely inspired by the
                    Meetups platform and is built using the PERN stack. This is
                    supplemented by a plethora of additional libararies
                    including react-router, react day-picker and even Google
                    maps!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={card}>
            <div className="row g-0">
              <div className="col-md-4" style={{ overflow: "hidden" }}>
                <a href="https://github.com/dan-suen/Halloumi/" target="_blank">
                  <img
                    src={halloumi}
                    className="img-fluid rounded-start"
                    alt="halloumi"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Halloumi</h5>
                  <p className="card-text">
                    Halloumi is a ready-to-use chrome extension built using
                    React and Typescript that allows users to send texts from
                    the Google Chrome browser via the Twilio SMS API.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={card}>
            <div className="row g-0">
              <div className="col-md-4" style={{ overflow: "hidden" }}>
                <a
                  href="https://github.com/dan-suen/chess-expo"
                  target="_blank"
                >
                  <img
                    src={chess_expo}
                    className="img-fluid rounded-start"
                    alt="chess-expo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Chess Expo</h5>
                  <p className="card-text">
                    Chess Expo is a mobile chess application for Android built
                    with React Native, Expo, and TypeScript. It lets users play
                    against the Stockfish chess engine via a JavaScript/Express
                    backend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
