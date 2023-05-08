import React, { useState} from 'react';
import "./about.scss";


export default function About(props) {
  return (
    <div className="about">
      <h1>
        Hi My name is Dan.
      </h1>
      <img src="public/400x400px.jpg" alt="Daniel Suen" />
      <p>I am a full stack developer and university graduate with an HBSc from the University of Toronto. I have a
particular passion for user-friendly features in software applications. I can problem solve and works well in teams.
I'm aiming to contribute to company software while expanding on existing skills</p>
    <p>After all, the most satisfying thing with using technology is the little details. Because it shows there's a human who cares on the other side. My favourite anecdote goes like this:
      <br/>
        <strong>When you play modern video games, there is usually a button to skip text and cutscenes. You don't buy the game because it has a skip button and you might not even notice it. But when you boot up that older game from the 90's, you're going to wish you had a skip button.</strong>
        <br/>
I love features that work. That might mean coming up with good ideas to implement but it also means testing and breaking and trying to understand.
      </p>
    </div>
  );
}
