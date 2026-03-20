import "./resume.scss";
import me from "./me.jpg";

export default function Resume() {
  return (
    <div className="resume">
      <h1> Hello! 👋</h1>
      <img src={me} className="img-fluid" alt="Daniel Suen"></img>
      <h3>I'm Dan.</h3>
      <p>
        I'm a Computer Science Co-op student at Toronto Metropolitan University.
        I love building things that feel right to use — the kind of software
        where the details are clearly cared about.
      </p>
      <p>
        After all, the most satisfying thing with using technology is the little
        details. Because it shows there's a human who cares on the other side.
        My favourite anecdote goes like this:
      </p>
      <br />
      <p>
        <strong>
          When you play modern video games, there is usually a button to skip
          text and cutscenes. You don't buy the game because it has a skip
          button and you might not even notice it. But when you boot up that
          older game from the 90's, you're going to wish you had a skip button.
        </strong>
      </p>
      <br />
      <p>
        I love features that work. That might mean coming up with good ideas to
        implement but it also means testing and breaking and trying to
        understand.
      </p>
      <br />
      <br />
      <p>
        🔭 Currently heads-down on coursework (Operating Systems, Programming
        Languages, Software Engineering, and more).
      </p>
      <p>
        🌱 My personal site is live at{" "}
        <a href="https://dan-suen.github.io">dan-suen.github.io</a>.
      </p>
      <p>
        📱 Recent project: <strong>Chess Expo</strong> — a mobile chess app for
        Android where you play against Stockfish, built with React Native + Expo
        + TypeScript.
      </p>
      <p>
        👯 Open to collaborating on anything level-appropriate, especially with
        TypeScript, React, or React Native.
      </p>

      <p>
        ⚡ Fun fact:
        <br />
        <em>
          log<sub>2</sub>(n) = &theta; (log<sub>8</sub>(n))
        </em>{" "}
        and{" "}
        <em>
          log<sub>8</sub>(n) = &theta; (log<sub>2</sub>(n))
        </em>
        <br />
      </p>
      <p>Those who know, know.</p>
      <br />
    </div>
  );
}
