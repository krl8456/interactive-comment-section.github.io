import { useState } from "react";
import Answer from "./Answer";
import Header from "./Header";
import Counter from "./Counter";
import Delete from "./Delete";
import Edit from "./Edit";
import ReplySign from "./ReplySign";
import Modal from "./Modal";
import Update from "./Update";
import Reply from "./Reply";

function Comment(props) {
  const [plusClicked, setPlus] = useState(false);
  const [minusClicked, setMinus] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isReplyClicked, setIsReplyClicked] = useState(false);

  function toggleModal() {
    setIsModalOpened((prev) => !prev);
  }
  function toggleEdit() {
    setIsEditClicked((prev) => !prev);
  }
  function toggleReply() {
    setIsReplyClicked((prev) => !prev);
  }

  return (
    <div className="Comment">
      <div className="Comment--one-comment">
        <Header content={props.comments} user={props.user} />
        {isEditClicked ? (
          <Update
            id={props.id}
            handleCommentChange={props.handleCommentChange}
            addComment={props.addComment}
            setIsEditClicked={setIsEditClicked}
            handleUpdateComment={props.handleUpdateComment}
            value={props.addComment.updateComment}
            name="updateComment"
          />
        ) : (
          <div className="Comment--content">{props.comments.content}</div>
        )}
        <div className="Comment--counter-and-reply">
          <Counter
            id={props.id}
            plusClicked={plusClicked}
            minusClicked={minusClicked}
            setPlus={setPlus}
            setMinus={setMinus}
            addLike={props.addLike}
            addDislike={props.addDislike}
            content={props.comments}
          />

          <Delete
            content={props.comments}
            user={props.user}
            toggleModal={toggleModal}
          />
          {props.comments.user.username === props.user.username ? (
            <Edit toggleEdit={toggleEdit} />
          ) : (
            <ReplySign toggleReply={toggleReply} />
          )}
        </div>
      </div>
      <Reply
        id={props.id}
        user={props.user}
        isReply={isReplyClicked}
        content={props.addComment.replyToComment}
        handleReplyToComment={props.handleReplyToComment}
        handleCommentChange={props.handleCommentChange}
        setIsReply={setIsReplyClicked}
        name="replyToComment"
      />
      <div className="Comment--answers">
        <div className="Comment--line"></div>
        {props.comments.replies &&
          props.comments.replies.map((r, index) => {
            return (
              <Answer
                key={index}
                id={r.id}
                replies={r}
                user={props.user}
                addLikeResponse={props.addLikeResponse}
                addDislikeResponse={props.addDislikeResponse}
                deleteResponse={props.deleteResponse}
                handleReplyToReply={props.handleReplyToReply}
                addComment={props.addComment}
                handleCommentChange={props.handleCommentChange}
                handleUpdateResponse={props.handleUpdateResponse}
              />
            );
          })}
      </div>

      <Modal
        isModalOpened={isModalOpened}
        toggleModal={toggleModal}
        deleteComment={() => props.deleteComment(props.id, setIsModalOpened)}
      />
    </div>
  );
}

export default Comment;
