import getogether from "./getogether.png";
import marketplace from "./marketplace.png";
import dan_suen from "./dan-suen.github.io.png";
import halloumi from "./halloumi.png";
import chess_expo from "./chess-expo.png";
import chess_game from "./chess-game.png";

import "./projects.scss";

export default function Projects() {
  const card: React.CSSProperties = {
    maxWidth: "540px",
  };
  return (
    <div>
      <div className="projects">
        <h3>Languages</h3>
        <a href="https://www.typescriptlang.org/">
          <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
        </a>
        <a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/">
          <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
        </a>
        <a href="https://www.python.org/">
          <img src="https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
        </a>
        <a href="https://www.java.com/">
          <img src="https://img.shields.io/badge/-Java-007396?style=for-the-badge&logo=java&logoColor=white" />
        </a>
        <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
          <img src="https://img.shields.io/badge/-C%2FC%2B%2B-F7731E?style=for-the-badge&logo=c&logoColor=black" />
        </a>
        <a href="https://www.ruby-lang.org/en/">
          <img src="https://img.shields.io/badge/-Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" />
        </a>
        <a href="https://whatwg.org/">
          <img src="https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
        </a>
        <a href="https://www.w3.org/Style/CSS/Overview.en.html">
          <img src="https://img.shields.io/badge/-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
        </a>
        <a href="https://en.wikipedia.org/wiki/SQL">
          <img src="https://img.shields.io/badge/-SQL-003B57?style=for-the-badge&logo=postgresql&logoColor=white" />
        </a>
        <a href="https://www.gnu.org/software/bash/">
          <img src="https://img.shields.io/badge/-Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white" />
        </a>
        <a href="https://en.wikipedia.org/wiki/Lisp_(programming_language)">
          <img src="https://img.shields.io/badge/-Lisp-8A2BE2?style=for-the-badge&logo=lisp&logoColor=white" />
        </a>
        <a href="https://en.wikipedia.org/wiki/Smalltalk">
          <img src="https://img.shields.io/badge/-Smalltalk-2E86AB?style=for-the-badge&logo=smalltalk&logoColor=white" />
        </a>
        <a href="https://elixir-lang.org/">
          <img src="https://img.shields.io/badge/-Elixir-4B275F?style=for-the-badge&logo=elixir&logoColor=white" />
        </a>

        <h3>Frameworks, Libraries & Environments</h3>
        <a href="https://react.dev/">
          <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        </a>
        <a href="https://reactnative.dev/">
          <img src="https://img.shields.io/badge/React_Native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        </a>
        <a href="https://expo.dev/">
          <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
        </a>
        <a href="https://nodejs.org/en">
          <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
        </a>
        <a href="https://expressjs.com/">
          <img src="https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white" />
        </a>
        <a href="https://rubyonrails.org/">
          <img src="https://img.shields.io/badge/rails-CC0000?style=for-the-badge&logo=rails&logoColor=white" />
        </a>
        <a href="https://jquery.com/">
          <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" />
        </a>
        <a href="https://en.wikipedia.org/wiki/Ajax_(programming)">
          <img src="https://img.shields.io/badge/ajax-%23316192.svg?style=for-the-badge&logo=ajax&logoColor=white" />
        </a>
        <a href="https://getbootstrap.com/">
          <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
        </a>
        <a href="https://sass-lang.com/">
          <img src="https://img.shields.io/badge/-SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
        </a>
        <a href="https://guides.rubyonrails.org/active_record_basics.html">
          <img src="https://img.shields.io/badge/-ActiveRecord-CC0000?style=for-the-badge&logo=ActiveRecord&logoColor=white" />
        </a>

        <h3>Testing</h3>
        <a href="https://mochajs.org/">
          <img src="https://img.shields.io/badge/-Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white" />
        </a>
        <a href="https://www.chaijs.com/">
          <img src="https://img.shields.io/badge/-Chai-white?style=for-the-badge&logo=chai&logoColor=A30701" />
        </a>
        <a href="https://storybook.js.org/">
          <img src="https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white" />
        </a>
        <a href="https://jestjs.io/">
          <img src="https://img.shields.io/badge/-Jest-white?style=for-the-badge&logo=jest&logoColor=C21325" />
        </a>
        <a href="https://www.cypress.io/">
          <img src="https://img.shields.io/badge/-Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" />
        </a>

        <h3>Systems & Databases</h3>
        <a href="https://git-scm.com/">
          <img src="https://img.shields.io/badge/Git-white?style=for-the-badge&logo=git&logoColor=#F05032" />
        </a>
        <a href="https://www.linux.org/">
          <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" />
        </a>
        <a href="https://www.postgresql.org/">
          <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
        </a>

        <br />
        <br />
        <h1>Some of my Projects:</h1>
        <div className="items">
          <div className="card mb-3" style={card}>
            <div className="row g-0">
              <div className="col-md-4" style={{ overflow: "hidden" }}>
                <a href="https://github.com/dan-suen/dan-suen.github.io" target="_blank">
                  <img
                    src={dan_suen}
                    className="img-fluid rounded-start"
                    alt="dan-suen.github.io"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                <a href="https://github.com/dan-suen/chess-game" target="_blank">
                  <img
                    src={chess_game}
                    className="img-fluid rounded-start"
                    alt="chess-game"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </a>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Chess</h5>
                  <p className="card-text">
                    A browser-based chess game built with React and TypeScript.
                    Implements full chess mechanics including en passant,
                    castling, and move validation entirely on the frontend.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={card}>
            <div className="row g-0">
              <div className="col-md-4" style={{ overflow: "hidden" }}>
                <a href="https://github.com/dan-suen/marketplace" target="_blank">
                  <img
                    src={marketplace}
                    className="img-fluid rounded-start"
                    alt="marketplace"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                    online marketplace. Users can view items being listed and
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
                <a href="https://github.com/dan-suen/GeTogether" target="_blank">
                  <img
                    src={getogether}
                    className="img-fluid rounded-start"
                    alt="getogether"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </a>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Getogether</h5>
                  <p className="card-text">
                    GeTogether is a project that is loosely inspired by the
                    Meetups platform and is built using the PERN stack. This is
                    supplemented by a plethora of additional libraries
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
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                <a href="https://github.com/dan-suen/chess-expo" target="_blank">
                  <img
                    src={chess_expo}
                    className="img-fluid rounded-start"
                    alt="chess-expo"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
