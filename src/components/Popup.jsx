import React, { useState } from "react";

const Popup = ({ isOpen, hTml, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleSubmit = () => {
    onSubmit(inputValue); // Gọi callback để trả dữ liệu về
    onClose(); // Đóng popup sau khi gửi dữ liệu
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Nhập dữ liệu</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="popup-actions">
          <button onClick={handleSubmit}>Gửi</button>
          <button onClick={onClose}>Đóng</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
