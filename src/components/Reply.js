import React from 'react'

function Reply(props) {
  if (!props.isReply) return null
  return (
    <div className='Reply-to-comment'>
        <img src={props.user.image.png} className="Reply-to-comment--image" alt="person" />
        <textarea className='Reply-to-comment--content' value={props.content} name={props.name} onChange={props.handleCommentChange} />
        <button className='Reply-to-comment--button' onClick={() => props.handleReplyToComment(props.id, props.setIsReply)}>REPLY</button>
    </div>
  )
}

export default Reply