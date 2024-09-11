import React, { useState } from "react";
import ProductChart from "./dashboard/productChart"

const Dashboard = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div className="main-box">
      <div className="dashboard">
        <div className="flex flex-1 gap-3">
          <div className="dashboard-body">
            <div className="top-bar">
              <div className="left-bar">
                <div className="name">Tổng quan</div>
              </div>
              <div className="right-bar">
                <div className="items">
                  <select>
                    <option>Ngày</option>
                    <option>Tuần</option>
                    <option>Tháng</option>
                  </select>
                </div>
                <div className="items">
                  <input type="date" value={date} onChange={handleDateChange} />
                </div>
              </div>
            </div>
            <div className="top-box-list">
              <div className="items-box">
                <div className="gray-box">
                  <div className="name">Sản lượng</div>
                  <div className="value">42,300 pcs</div>
                  <div className="hint"><i className="fa-solid fa-up-long"></i> 4,5%</div>
                  <div className="message">Sản lượng đang vượt chỉ tiêu đặt ra</div>
                </div>
                <div className="gray-box">
                  <div className="name">Mục tiêu</div>
                  <div className="value">45,600 pcs</div>
                  <div className="hint"><i className="fa-solid fa-up-long"></i> 2.8%</div>
                  <div className="message">Sản xuất thực tế sát với kế hoạch</div>
                </div>
                <div className="gray-box">
                  <div className="name">Đơn hàng</div>
                  <div className="value">12 orders</div>
                  <div className="hint"><i className="fa-solid fa-up-long"></i> {(1/12).toFixed(2)}%</div>
                  <div className="message">Đơn hàng nhiều hơn hôm qua 1 đơn hàng</div>
                </div>
                <div className="gray-box">
                  <div className="name">Đã hoàn thành</div>
                  <div className="value">18 orders</div>
                  <div className="hint down"><i className="fa-solid fa-down-long"></i> -5%</div>
                  <div className="message">Tiến độ chậm hơn so với mục tiêu đề ra</div>
                </div>
              </div>
              <div className="items-box">
                <div className="gray-box"><ProductChart/></div>
              </div>
            </div>
          </div>
          <div className="hidden-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
