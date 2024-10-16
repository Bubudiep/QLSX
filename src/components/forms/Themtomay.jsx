import React, { useState } from "react";
import Cookies from "js-cookie";
import api from "../../class/api";
const Themtomay = ({ isOpen, onClose, onSubmit, option }) => {
  const [inputValue, setInputValue] = useState("Tổ máy 1");
  const [isThanhcong, setIsThanhcong] = useState(false);
  const [motaValue, setMotaValue] = useState(null);
  if (!isOpen) {
    return null;
  }
  const handleSubmit = async () => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const response = await api.post(
          "/danhsachthietbi/",
          {
            ten: inputValue,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const toMay = response.data;
        onSubmit(toMay); // Gọi callback để trả dữ liệu về
        setIsThanhcong(true);
      } catch (e) {
        console.log(e);
        console.error("Token không hợp lệ hoặc không có dữ liệu người dùng");
      }
    } else {
      navigate("/"); // Điều hướng đến trang chính nếu có lỗi
    }
  };
  return (
    <div className="popup-overlay">
      <div className="detectOut" onClick={onClose} />
      <div className="popup-box">
        {isThanhcong ? (
          <div className="success">
            <div className="icon">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="msg">Đã thêm {inputValue}!</div>
          </div>
        ) : (
          <>
            <div className="title">Tổ máy mới</div>
            <div className="body">
              <div className="message">
                {option?.title ?? "Nhập tên cho tổ máy mới"}
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <textarea
                placeholder="Mô tả..."
                onChange={(e) => setMotaValue(e.target.value)}
              >
                {motaValue}
              </textarea>
            </div>
            <div className="popup-actions">
              <button className="cls" onClick={onClose}>
                Hủy
              </button>
              <button onClick={handleSubmit}>Xác nhận</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Themtomay;
