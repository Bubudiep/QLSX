import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import api from "../../class/api";
const Themthietbi = ({ isOpen, onClose, onSubmit, option }) => {
  const [tomayList, setTomayList] = useState([]);
  const [inputValue, setInputValue] = useState("Thiết bị 1");
  const [motaValue, setMotaValue] = useState("");
  if (!isOpen) {
    return null;
  }
  const handleSubmit = async () => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const response = await api.post(
          "/thietbi/",
          {
            to_may: option.id,
            ten: inputValue,
            mo_ta: motaValue,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const thietBi = response.data;
        onSubmit(thietBi, option.id); // Gọi callback để trả dữ liệu về
      } catch (e) {
        console.log(e);
        console.error("Token không hợp lệ hoặc không có dữ liệu người dùng");
      }
    } else {
      navigate("/"); // Điều hướng đến trang chính nếu có lỗi
    }
    // onSubmit(inputValue); // Gọi callback để trả dữ liệu về
    // onClose(); // Đóng popup sau khi gửi dữ liệu
  };
  return (
    <div className="popup-overlay">
      <div className="detectOut" onClick={onClose} />
      <div className="popup-box">
        <div className="title">Thiết bị mới</div>
        <div className="body">
          <table>
            <tbody>
              <tr>
                <td>Tổ máy</td>
                <td>
                  <input type="text" value={option?.ten} disabled />
                </td>
              </tr>
              <tr>
                <td>Tên thiết bị mới</td>
                <td>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Mô tả thiết bị</td>
                <td>
                  <textarea
                    value={motaValue}
                    placeholder="Mô tả..."
                    onChange={(e) => setMotaValue(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="popup-actions">
          <button className="cls" onClick={onClose}>
            Hủy
          </button>
          <button onClick={handleSubmit}>Xác nhận</button>
        </div>
      </div>
    </div>
  );
};

export default Themthietbi;
