import React from "react";

function Counter(props) {
  return (
    <div className="Comment--counter">
      <img
        src="images/icon-plus.svg"
        className={props.plusClicked ? "Comment--plus darkened" : "Comment--plus"}
        //className="Comment--plus"
        alt="Plus sign"
        onClick={() =>
          props.addLike(props.id, props.plusClicked, props.minusClicked, props.setPlus, props.setMinus)
        }
      />
      <p className="Comment--score">{props.content.score}</p>
      <img
        src="images/icon-minus.svg"
        className={props.minusClicked ? "Comment--minus darkened" : "Comment--minus"}
        //className="Comment--minus"
        alt="Minus sign"
        onClick={() =>
          props.addDislike(
            props.id,
            props.plusClicked,
            props.minusClicked,
            props.setPlus,
            props.setMinus
          )
        }
      />
    </div>
  );
}

export default Counter;
