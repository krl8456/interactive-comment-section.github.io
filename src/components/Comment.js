import React from "react";
import "./Comment.css";
import Answer from "./Answer";
import { useState } from "react";

function Comment(props) {
  const [count, setCount] = useState(() => props.comments.score);
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
    <div className="Comment">
      <header className="header">
        <img
          src={props.comments.user.image.png}
          className="user-image"
          alt="User"
        />
        <h1 className="username">{props.comments.user.username}</h1>
        <p className="created-at">{props.comments.createdAt}</p>
      </header>
      <div className="content">{props.comments.content}</div>
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
      <div className="answers">
        <div className="line"></div>
        {props.comments.replies &&
          props.comments.replies.map((r, index) => {
            return (
              <Answer
                key={index}
                replies={r}
                incrementScore={incrementScore}
                decrementScore={decrementScore}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Comment;
