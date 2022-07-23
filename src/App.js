import { useState } from "react";
import "./App.css";
import Data from "./data.json";
import Comment from "./components/Comment";
import MainSubmit from "./components/MainSubmit";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [user, changeUser] = useState(() => Data.currentUser);
  const [comments, changeComments] = useState(() => Data.comments);
  const [addComment, setAddComment] = useState({
    commentContent: "",
    updateComment: "",
    replyToComment: "",
  });
  // const [isModalOpened, setIsModalOpened] = useState(false);

  function changeLikes(id, howMany) {
    changeComments((prev) =>
      prev.map((comment) =>
        comment.id === id
          ? { ...comment, score: comment.score + howMany }
          : comment
      )
    );
  }

  function changeLikesResponses(id, howMany) {
    changeComments((prev) =>
      prev.map((comment) => ({
        ...comment,
        replies: comment.replies.map((reply) =>
          reply.id === id ? { ...reply, score: reply.score + howMany } : reply
        ),
      }))
    );
  }

  function addLike(id, plusClicked, minusClicked, setPlus, setMinus) {
    if (!plusClicked && minusClicked) {
      setPlus(true);
      setMinus(false);
      changeLikes(id, 2);
    } else if (!plusClicked) {
      setPlus(true);
      changeLikes(id, 1);
    } else {
      setPlus(false);
      changeLikes(id, -1);
    }
  }

  function addDislike(id, plusClicked, minusClicked, setPlus, setMinus) {
    if (!minusClicked && plusClicked) {
      setMinus(true);
      setPlus(false);
      changeLikes(id, -2);
    } else if (!minusClicked) {
      setMinus(true);
      changeLikes(id, -1);
    } else {
      setMinus(false);
      changeLikes(id, 1);
    }
  }

  function addLikeResponse(id, plusClicked, minusClicked, setPlus, setMinus) {
    if (!plusClicked && minusClicked) {
      setPlus(true);
      setMinus(false);
      changeLikesResponses(id, 2);
    } else if (!plusClicked) {
      setPlus(true);
      changeLikesResponses(id, 1);
    } else {
      setPlus(false);
      changeLikesResponses(id, -1);
    }
  }

  function addDislikeResponse(
    id,
    plusClicked,
    minusClicked,
    setPlus,
    setMinus
  ) {
    if (!minusClicked && plusClicked) {
      setMinus(true);
      setPlus(false);
      changeLikesResponses(id, -2);
    } else if (!minusClicked) {
      setMinus(true);
      changeLikesResponses(id, -1);
    } else {
      setMinus(false);
      changeLikesResponses(id, 1);
    }
  }

  function handleCommentChange(event) {
    const { name, value } = event.target;
    setAddComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleAddComment() {
    changeComments((prev) =>
      addComment.commentContent === ""
        ? prev
        : [
            ...prev,
            {
              id: uuidv4(),
              content: addComment.commentContent,
              createdAt: "now",
              score: 0,
              user: user,
              replies: [],
            },
          ]
    );
    setAddComment((prev) => ({
      ...prev,
      commentContent: "",
    }));
  }

  // function toggleModal() {
  //   setIsModalOpened(prev => !prev)
  // }

  function deleteComment(id, setIsModalOpened) {
    changeComments((prev) => prev.filter((el) => el.id !== id));
    setIsModalOpened((prev) => !prev);
  }

  function handleUpdateComment(id, setIsEditClicked) {
    changeComments((prev) =>
      prev.map((el) =>
        addComment.updateComment !== "" && el.id === id
          ? { ...el, content: addComment.updateComment }
          : el
      )
    );
    setAddComment((prev) => ({
      ...prev,
      updateComment: "",
    }));
    setIsEditClicked((prev) => !prev);
  }
  function handleReplyToComment(id, setIsReply) {
    changeComments((prev) =>
      prev.map((el) =>
        el.id === id
          ? {
              ...el,
              replies: [
                ...el.replies,
                {
                  id: uuidv4(),
                  content: addComment.replyToComment,
                  createdAt: "now",
                  score: 0,
                  replyingTo: el.user.username,
                  user: user
                },
              ],
            }
          : el
      )
    );
    setAddComment((prev) => ({
      ...prev,
      replyToComment: "",
    }));
    setIsReply(prev => !prev)
  }

  return (
    <div className="App">
      {comments.map((c) => {
        return (
          <Comment
            key={c.id}
            id={c.id}
            comments={c}
            user={user}
            addLike={addLike}
            addDislike={addDislike}
            addLikeResponse={addLikeResponse}
            addDislikeResponse={addDislikeResponse}
            deleteComment={deleteComment}
            handleCommentChange={handleCommentChange}
            addComment={addComment}
            handleUpdateComment={handleUpdateComment}
            handleReplyToComment={handleReplyToComment}
          />
        );
      })}
      <MainSubmit
        user={user}
        allComments={comments}
        addComment={addComment}
        changeComments={changeComments}
        handleCommentChange={handleCommentChange}
        handleAddComment={handleAddComment}
      />
    </div>
  );
}

export default App;
