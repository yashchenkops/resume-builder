const CommentsButton = ({ onClick }) => (
  <div className="comments-action">
    <button className="button" type="button" onClick={onClick}>
    Review
  </button>
  </div>
);

export default CommentsButton;