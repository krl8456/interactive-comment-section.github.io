import React, { useState } from "react";
import "./Answer.css";
function Answer(props) {
  // console.log(props.content);
  const [count, setCount] = useState(() => props.replies.score);
  const [plusClicked, setPlus] = useState(false);
  const [minusClicked, setMinus] = useState(false);
  function incrementScore() {
    if (!plusClicked && minusClicked) {
      setPlus((prev) => true);
      setMinus((prev) => false);
      setCount((prev) => prev + 2);
    } else if (!plusClicked) {
      setPlus((prev) => true);
      setCount((prev) => prev + 1);
    } else {
      setPlus((prev) => false);
      setCount((prev) => prev - 1);
    }
  }
  function decrementScore() {
    if (!minusClicked && plusClicked) {
      setMinus((prev) => true);
      setPlus((prev) => false);
      setCount((prev) => prev - 2);
    } else if (!minusClicked) {
      setMinus((prev) => true);
      setCount((prev) => prev - 1);
    } else {
      setMinus((prev) => false);
      setCount((prev) => prev + 1);
    }
  }
  return (
    <div className="Comment Reply">
      <header className="header">
        <img
          src={props.replies.user.image.png}
          className="user-image"
          alt="User"
        />
        <h1 className="username">{props.replies.user.username}</h1>
        <p className="created-at">{props.replies.createdAt}</p>
      </header>
      <div className="content">{props.replies.content}</div>
      <div className="counter-and-reply">
        <div className="counter">
          <img
            src="images/icon-plus.svg"
            className={plusClicked ? "plus darkened" : "plus"}
            alt="Plus sign"
            onClick={incrementScore}
          />
          <p className="score">{count}</p>
          <img
            src="images/icon-minus.svg"
            className={minusClicked ? "minus darkened" : "minus"}
            alt="Minus sign"
            onClick={decrementScore}
          />
        </div>
        <div className="reply">
          <img
            src="images/icon-reply.svg"
            className="reply-sign"
            alt="Reply sign"
          />
          <p className="reply-text">Reply</p>
        </div>
      </div>
    </div>
  );
}

export default Answer;
