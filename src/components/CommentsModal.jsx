import { useState } from 'react';

const CommentsModal = ({ onClose, onSave }) => {
  const [value, setValue] = useState('');

  const handleSave = () => {
    if (!value.trim()) return;
    onSave(value);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <textarea
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Write your comment..."
        />
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;