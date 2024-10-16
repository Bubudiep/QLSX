import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import "@fortawesome/fontawesome-free/css/all.css";
import api from "../class/api";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import LeftContainer from "./home/left-container";

function App() {
  const [isElectron, setIsElectron] = useState(false);
  const [token, setToken] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  // Define route titles
  const routeTitles = {
    "/home/dashboard": "Tổng quan",
    "/home/department": "Tổ máy",
    "/home/employeer": "Nhân viên",
    "/home/schedule": "Lịch",
    "/home/planning": "Kế hoạch",
    "/home/settings": "Cài đặt",
    // Add more routes and their titles here
  };
  // Get the title based on current path
  const currentTitle = routeTitles[location.pathname] || "Trang không tìm thấy";
  // Tạo một hàm để xử lý sự kiện bàn phím
  const checkToken = async () => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const response = await api.get("/user/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = response.data;
        setToken(userData);
      } catch (e) {
        console.log(e);
        console.error("Token không hợp lệ hoặc không có dữ liệu người dùng");
        navigate("/"); // Điều hướng đến trang chính nếu có lỗi
      }
    } else {
      navigate("/"); // Điều hướng đến trang chính nếu có lỗi
    }
  };
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "f") {
      event.preventDefault(); // Ngăn chặn hành động mặc định của trình duyệt
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  };
  useEffect(() => {
    checkToken();
    if (window.electron) {
      setIsElectron(true);
      window.electron.send("resize", true);
      window.electron.send("maximized");
    }
    // Kiểm tra nếu Ctrl + F được nhấn
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const MenuItem = ({ to, iconClass, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
    >
      <div className="logo">
        <i className={iconClass}></i>
      </div>
      <div className="name">{label}</div>
    </NavLink>
  );
  return (
    <div className="home-page">
      <LeftContainer />
      <div className="right-container">
        <div className="top-container">
          <div className="routes">
            <div className="items">
              <i className="fa-solid fa-house"></i>
            </div>
            <div className="split">
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <div className="items">{currentTitle}</div>
          </div>
          <div className="right-tools">
            <div className="tools-list">
              <div className="itemc">
                <label htmlFor="search-input" className="text-gray-400">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </label>
                <input
                  id="search-input"
                  ref={searchInputRef}
                  type="text"
                  placeholder="Tìm kiếm..."
                />
              </div>
            </div>
            <div className="tools-list">
              <div className="itemc">
                <i className="fa-solid fa-wifi"></i> 265ms
              </div>
            </div>
            <div className="tools-list">
              <div className="itemx">
                <i className="fa-sharp fa-regular fa-question"></i> Hỗ trợ
              </div>
              <div className="itemx">
                <i className="fa-regular fa-file-lines"></i> Tài liệu
              </div>
              <div className="itemx">
                <i className="fa-solid fa-bug"></i> Báo lỗi
              </div>
            </div>
            {isElectron && (
              <div className="tools-list p-[3px] g5">
                <div
                  className="items app-hide"
                  onClick={() => window.electron.send("minimize")}
                >
                  <i className="fa-solid fa-minus"></i>
                </div>
                <div
                  className="items app-expland"
                  onClick={() => window.electron.send("maximize")}
                >
                  <i className="fa-solid fa-expand"></i>
                </div>
                <div
                  className="items app-close"
                  onClick={() => window.electron.send("exit")}
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="main-container">
          <Outlet context={token} />
        </div>
      </div>
    </div>
  );
}

export default App;
