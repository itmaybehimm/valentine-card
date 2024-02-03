import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie Pweseeeee",
  "Don't do this twooo mweeee",
  "I'm gwonnnaa cryyyy",
  "You're breaking my heartttt...",
  "Please reconsider",
  "Think about it again",
  "I beg you",
  "Let's talk about this",
  "There must be another way",
  "I'll miss you",
  "I can't believe you're doing this",
  "Is there anything I can do to change your mind?",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount((prev) => prev + 1);
  }

  function getNoButtonText() {
    return phrases[noCount % (phrases.length - 1)];
  }

  return (
    <div className="valtenine-container">
      {yesPressed ? (
        <>
          <img
            alt="Bear kissing"
            src="https://tenor.com/en-GB/view/kiss-gif-19128129.gif"
          ></img>
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="Bear with heart"
            src="https://tenor.com/en-GB/view/hearts-jumping-gif-19295924.gif"
          ></img>
          <div>Will you be my valentine?</div>
          <div className="buttons">
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
