import { useState } from "react";
import Header from "./Header";
import Counter from "./Counter";
import Delete from "./Delete";
import Edit from "./Edit";
import ReplySign from "./ReplySign";
import Modal from "./Modal";
import Reply from "./Reply";
import Update from "./Update";

function Answer(props) {
  const [plusClicked, setPlus] = useState(false);
  const [minusClicked, setMinus] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isReplyClicked, setIsReplyClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);

  function toggleModal() {
    setIsModalOpened((prev) => !prev);
  }
  function toggleReply() {
    setIsReplyClicked((prev) => !prev);
  }
  function toggleEdit() {
    setIsEditClicked((prev) => !prev);
  }

  return (
    <div className="Comment Reply">
      <div className="Comment--one-comment">
        <Header content={props.replies} user={props.user} />
        {isEditClicked ? (
          <Update
            id={props.id}
            handleCommentChange={props.handleCommentChange}
            addComment={props.addComment}
            setIsEditClicked={setIsEditClicked}
            handleUpdateComment={props.handleUpdateResponse}
            value={props.addComment.updateReply}
            name="updateReply"
          />
        ) : (
          <div className="Comment--content">
            <span className="Comment--to-whom">
              @{props.replies.replyingTo}{" "}
            </span>
            {props.replies.content}
          </div>
        )}

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

          <Delete
            content={props.replies}
            user={props.user}
            toggleModal={toggleModal}
          />

          {props.replies.user.username === props.user.username ? (
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
        addComment={props.addComment}
        handleReplyToComment={props.handleReplyToReply}
        handleCommentChange={props.handleCommentChange}
        setIsReply={setIsReplyClicked}
        content={props.addComment.replyToReply}
        name="replyToReply"
      />
      <Modal
        isModalOpened={isModalOpened}
        toggleModal={toggleModal}
        deleteComment={() => props.deleteResponse(props.id, setIsModalOpened)}
      />
    </div>
  );
}

export default Answer;
