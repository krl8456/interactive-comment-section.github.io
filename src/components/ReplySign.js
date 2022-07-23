import React from "react";

function ReplySign(props) {
  return (
    <div className="Comment--reply" onClick={props.toggleReply}>
      <img
        src="images/icon-reply.svg"
        className="Comment--reply-sign"
        alt="Reply sign"
      />
      <p className="Comment--reply-text">Reply</p>
    </div>
  );
}

export default ReplySign;
