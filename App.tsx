import { useState } from "react";
import "./App.css";
import meowGif from './meow.gif';
import yay from './yay.gif';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Really really sure?",
      "Really really really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
            <>
              <img src={yay}/>
              <div className="text-container">Yay! Mark your calendar for a cozy evening on February 18th at 7 PM.
              </div>
              <div className="text-container"> More
                details will be shared on that day.Looking forward to it!
              </div>

            </>
        ) : (
            <>
              <img
                  className="h-[200px]"
                  src={meowGif}
              />
              <h1 className="text-container">Will you be my Valentine?</h1>
              <div>
                <button
                    className={"yes-button"}
                    style={{fontSize: yesButtonSize}}
                    onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>

                <button onClick={handleNoClick} className="no-button">
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </>
        )}
      </div>
    </div>
  );
}
