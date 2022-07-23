import React from "react";

function Update(props) {
  return (
    <div className="Comment--edit">
      <textarea
        className="Comment--edit-content"
        onChange={props.handleCommentChange}
        value={props.addComment.updateComment}
        name="updateComment"
      ></textarea>
      <button
        className="Comment--button-update"
        onClick={() => props.handleUpdateComment(props.id, props.setIsEditClicked)}
      >
        UPDATE
      </button>
    </div>
  );
}

export default Update;
