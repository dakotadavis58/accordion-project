import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* <p>{showInfo ? info : ""}</p>  can use this method OR */}
      {/* if showInfo true, then the second part happens, neat */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
