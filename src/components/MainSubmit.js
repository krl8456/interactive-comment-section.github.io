

function MainSubmit(props) {
  return (
    <form className="Main-submit">
      <textarea className="Main-submit--submit-area" placeholder="Add a comment..." name="commentContent" value={props.addComment.commentContent} onChange={props.handleCommentChange} />
      <div className="Main-submit--image-and-submit">
          <img
            src={props.user.image.png}
            alt="You"
            className="Main-submit--profile-picture"
          />
          <button type="button" className="Main-submit--submit-button" onClick={props.handleAddComment}>
            SEND
          </button>
        </div>
    </form>
  );
}

export default MainSubmit;
