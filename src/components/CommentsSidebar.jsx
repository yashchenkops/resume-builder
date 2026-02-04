const CommentsSidebar = ({ comments }) => (
  <aside className="comments-sidebar">
    <h3>Comments</h3>

    {comments.length === 0 && (
      <p>No comments yet</p>
    )}

    {comments.map(comment => (
      <div key={comment.id} className="comment">
        {comment.text}
      </div>
    ))}
  </aside>
);

export default CommentsSidebar;