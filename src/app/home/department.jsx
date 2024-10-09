import React, { useState } from "react";

const Department = () => {
  const menuItems = [
    {
      name: "Hàn điểm",
      items: [
        {
          name: "Máy uốn tròn",
          status: "online",
          wo: "Đơn hàng D24-147-1.3",
        },
        {
          name: "Máy hàn đấu đầu",
          status: "online",
          wo: "Đơn hàng D24-147-1.3",
        },
        {
          name: "Máy hàn đấu đầu",
          status: "down",
          wo: "Đơn hàng D24-147-1.3",
        },
        {
          name: "Máy hàn đấu đầu",
          status: "idle",
          wo: "Đơn hàng D24-147-1.3",
        },
        {
          name: "Máy uốn 2D",
          status: "online",
          wo: "Đơn hàng D24-147-1.3",
        },
        {
          name: "Máy hàn điểm (0.76m)",
          status: "online",
          wo: "Đơn hàng D24-147-1.3",
        },
        {
          name: "Máy hàn điểm (0.76m)",
          status: "offline",
          wo: null,
        },
        {
          name: "Máy hàn điểm (0.76m)",
          status: "online",
          wo: "Đơn hàng D24-147-1.3",
        },
      ],
    },
    {
      name: "Cắt ống",
      items: [],
    },
    {
      name: "Cắt tôn",
      items: [],
    },
    {
      name: "Đột dập",
      items: [],
    },
    {
      name: "Hàn dây",
      items: [],
    },
    {
      name: "Tẩy rửa",
      items: [],
    },
    {
      name: "Tổ sơn",
      items: [],
    },
  ];

  return (
    <div className="flex flex-1 h-full p-2 gap-1 noDrag">
      <div className="flex-col flex-1 danhsach-trai">
        <div className="danhsach-top">
          <div className="left">
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="tên tổ, mã máy,..." />
            </div>
            <button>Tìm kiếm</button>
          </div>
          <div className="right"></div>
        </div>
        <div className="danhsach-thietbi">
          {menuItems.map((menu, index) => (
            <div key={index} className={`items`}>
              <div className="items-name">
                {menu.name} <div className="unit">{menu.items.length} máy</div>
              </div>
              <div className="items-list">
                {menu.items.map((item, idx) => (
                  <div key={idx} className="list-items">
                    <div className="top">
                      <div className="name">{item.name}</div>
                      <div className={"status " + item.status}>
                        {item.status}
                      </div>
                    </div>
                    <div className="body">{item.wo ? item.wo : "No data"}</div>
                  </div>
                ))}
                <div className="list-items add">
                  <i className="fa-solid fa-plus"></i>
                  <div className="text">Thêm thiết bị</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-col tools-tab">
        <div className="history-box">
          <div className="title">Lịch sử sản xuất</div>
          <div className="history-items">
            <div className="items">
              <div className="details">
                <div className="title">Máy A</div>
                <div className="msg">Sản lượng đạt 180pcs (8:00 - 12:00)</div>
              </div>
              <div className="time">5 phút trước</div>
            </div>
          </div>
        </div>
        <div className="history-box">
          <div className="title">Lịch sử bảo trì</div>
          <div className="history-items">
            <div className="items">
              <div className="details">
                <div className="title">Máy A</div>
                <div className="msg">Sản lượng đạt 180pcs (8:00 - 12:00)</div>
              </div>
              <div className="time">5 phút trước</div>
            </div>
            <div className="items">
              <div className="details">
                <div className="title">Máy A</div>
                <div className="msg">Sản lượng đạt 180pcs (8:00 - 12:00)</div>
              </div>
              <div className="time">5 phút trước</div>
            </div>
            <div className="items">
              <div className="details">
                <div className="title">Máy A</div>
                <div className="msg">Sản lượng đạt 180pcs (8:00 - 12:00)</div>
              </div>
              <div className="time">5 phút trước</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
