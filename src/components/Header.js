import React from "react";

function Header(props) {
  return (
    <header className="Comment--header">
      <img
        src={props.content.user.image.png}
        className="Comment--user-image"
        alt="User"
      />
      <h1 className="Comment--username">{props.content.user.username}</h1>
      <div className="Comment--you">
        {props.content.user.username === props.user.username && <p>you</p>}
      </div>

      <p className="Comment--created-at">{props.content.createdAt}</p>
    </header>
  );
}

export default Header;
