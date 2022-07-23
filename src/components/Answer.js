import { useState } from "react"
import Header from "./Header";
import Counter from "./Counter";
import Delete from "./Delete";
import Edit from "./Edit";
import Reply from "./ReplySign";

function Answer(props) {
  const [plusClicked, setPlus] = useState(false);
  const [minusClicked, setMinus] = useState(false);
  
  return (
    <div className="Comment Reply">
      <div className="Comment--one-comment">
      <Header content={props.replies} user={props.user}/>
        <div className="Comment--content"><span className="Comment--to-whom">@{props.replies.replyingTo} </span>{props.replies.content}</div>
        <div className="Comment--counter-and-reply">
        <Counter
            id={props.id}
            plusClicked={plusClicked}
            minusClicked={minusClicked}
            setPlus={setPlus}
            setMinus={setMinus}
            addLike={props.addLikeResponse}
            addDislike={props.addDislikeResponse}
            content={props.replies}
          />

          <Delete content={props.replies} user={props.user} />

          {props.replies.user.username === props.user.username ? (
            <Edit />
          ) : (
            <Reply />
          )}
        </div>
      </div>
    </div>
  );
}

export default Answer;
