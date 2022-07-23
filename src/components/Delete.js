import React from "react";

function Delete(props) {
  if (props.content.user.username !== props.user.username) return null;
  return (
    <div className="Comment--delete" onClick={props.toggleModal}>
      <img
        src="images/icon-delete.svg"
        className="Comment--delete-sign"
        alt="delete"
      />
      <p className="Comment--delete-text">Delete</p>
    </div>
  );
}

export default Delete;
