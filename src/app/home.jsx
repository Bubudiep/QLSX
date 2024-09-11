import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import "@fortawesome/fontawesome-free/css/all.css";
import api from "../class/api";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function App() {
  const [isElectron, setIsElectron] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  // Tạo một hàm để xử lý sự kiện bàn phím
  const checkToken = async () => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const response = await api.get("/user/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = response.data;
        console.log(userData);
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
      <div className="left-container">
        <div className="menu-fixed">
          <div className="app">
            <div className="logo">LOGO</div>
          </div>
          <div className="tools">
            <MenuItem
              to="/home/dashboard"
              iconClass="fa-solid fa-chart-line"
              label="Tổng quan"
            />
            <MenuItem
              to="/home/schedule"
              iconClass="fa-solid fa-calendar-days"
              label="Lịch"
            />
            <MenuItem
              to="/home/planning"
              iconClass="fa-solid fa-layer-group"
              label="Kế hoạch"
            />
            <MenuItem
              to="/home/department"
              iconClass="fa-solid fa-toilets-portable"
              label="Tổ máy"
            />
            <div className="split" />
            <MenuItem
              to="/home/settings"
              iconClass="fa-solid fa-gear"
              label="Cài đặt"
            />
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="top-container">
          <div className="routes">
            <div className="items">
              <i className="fa-solid fa-house"></i>
            </div>
            <div className="split">
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <div className="items">Tổng quan</div>
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
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
