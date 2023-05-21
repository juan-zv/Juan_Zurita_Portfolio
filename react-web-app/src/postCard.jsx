import React, { useState } from 'react';

const CardComponent = () => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="card">
      <div className="posting-user-container">
        <img src="" alt="" />
        <h6>Someone</h6>
        <p>Date published</p>
      </div>
      <h3>Tittle</h3>
      <p>Text, explanation, etc ..................</p>
      <button>🫶</button>
      <button onClick={handleCommentClick}>✍️</button>
      {showComments && (
        <div className="comment-section">
          {comments.map((comment, index) => (
            <div key={index} className="comment-bubble">
              <p>{comment}</p>
            </div>
          ))}
          <div className="add-comment">
            <textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={handleInputChange}
            ></textarea>
            <button onClick={handleAddComment}>Add Comment</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComponent;