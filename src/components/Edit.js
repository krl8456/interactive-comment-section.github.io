import React from "react";

function Edit(props) {
  return (
    <div className="Comment--reply" onClick={props.toggleEdit}>
      <img
        src="images/icon-edit.svg"
        className="Comment--reply-sign"
        alt="Edit sign"
      />
      <p className="Comment--reply-text">Edit</p>
    </div>
  );
}

export default Edit;
