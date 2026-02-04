const CommentsSidebar = ({ comments }) => (
  <aside className="sidebar">
    <div className="sidebar__inner">
      <h3 className="sidebar__title">Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          {comment.text}
        </div>
      ))}
    </div>
  </aside>
);

export default CommentsSidebar;
