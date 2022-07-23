import ReactDom from "react-dom";

function Modal(props) {
  if (!props.isModalOpened) return null
  
  return ReactDom.createPortal(
    <div className="Modal--background">
      <div className="Modal">
        <h1 className="Modal--header">Delete comment</h1>
        <p className="Modal--content">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="Modal--buttons">
          <button className="Modal--button-no" onClick={props.toggleModal}>NO, CANCEL</button>
          <button className="Modal--button-yes" onClick={props.deleteComment}>YES, DELETE</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
