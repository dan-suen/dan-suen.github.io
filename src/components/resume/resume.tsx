import "./resume.scss";
import me from "./me.jpg";

export default function Resume() {
  return (
    <div className="resume">
      <h1> Hello! 👋</h1>
      <img src={me} className="img-fluid" alt="Daniel Suen"></img>
      <h3>I'm Dan.</h3>
      <p>
        I'm a recent graduate from the Lighthouse Labs Full-stack Web
        Development bootcamp, and former STEM undergraduate from the University
        of Toronto. I love to learn and tinker with new technologies.
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
        🔭 I’m currently working on my resume, improving my LinkedIn profile and
        looking for a position as a software developer.
      </p>
      <p>
        👯 I’m looking to collaborate on anything level-appropriate, especially
        if it's an opportunity with Vue or Typescript.
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
