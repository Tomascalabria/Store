import React, { useState, useEffect } from "react";
import ReactTextTransition from "react-text-transition";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

 export const TitleTransition = () => {
  const texts = [" NIKE ", " ADIDAS ", " ASYCS ", " SUPREME ", " LEVIS", "TOMMY HILFIGER "];

  const [number, setNumber] = useState(randomNumber());
  
  const [textIndex, setTextIndex] = useState(0);
  const [textFastIndex, setTextFastIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setNumber(randomNumber());
      setTextIndex(textIndex + 1);
      setParagraphIndex(paragraphIndex + 1);
    }, 9000);

    const interval2 = setInterval(() => {
      setTextFastIndex(textFastIndex + 1);
    }, 800);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [textIndex, paragraphIndex, textFastIndex]);

  return (
    <React.Fragment>
          <ReactTextTransition
            className="title"   
            style={{ margin: "0rem 4px" ,background:'transparent',}}
            inline
          >
            {texts[textFastIndex % texts.length]}
          </ReactTextTransition>
   
    </React.Fragment>
  );
};
