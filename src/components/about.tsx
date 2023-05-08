import React from 'react';
import './about.scss';

export default function About() {
  return (
    <div className="about">
      <h1>Hi, my name is Dan.</h1>
      <img src={process.env.PUBLIC_URL + '/dan-face.jpg'} alt="Daniel Suen" />
      <img src={process.env.PUBLIC_URL + '/dan-face 2.jpg'} alt="Daniel Suen" />
      <p>
        I am a full-stack developer and university graduate with an HBSc from
        the University of Toronto. I have a particular passion for user-friendly
        features in software applications, and I excel at problem-solving and
        working well in teams.
      </p>
      <p>
        After all, the most satisfying thing about using technology is the
        little details because it shows there&apos;s a human who cares on the
        other side. My favorite anecdote goes like this:
      </p>
      <p>
        <strong>
          When you play modern video games, there is usually a button to skip
          text and cutscenes. You don&apos;t buy the game because it has a skip
          button and you might not even notice it. But when you boot up that
          older game from the 90s, you&apos;re going to wish you had a skip
          button.
        </strong>
      </p>
      <p>
        I love features that work. That might mean coming up with good ideas to
        implement, but it also means testing, breaking, and trying to
        understand.
      </p>
    </div>
  );
}
