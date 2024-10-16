import React from "react";
import { NavLink } from "react-router-dom";

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

const LeftContainer = () => {
  return (
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
            label="Đơn hàng"
          />
          <MenuItem
            to="/home/department"
            iconClass="fa-solid fa-toilets-portable"
            label="Tổ máy"
          />
          <MenuItem
            to="/home/employeer"
            iconClass="fa-solid fa-users-gear"
            label="Nhân viên"
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
  );
};

export default LeftContainer;
