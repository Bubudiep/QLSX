import React from "react";

const Machine_details = ({ machine, onClose }) => {
  if (machine) {
    console.log(machine);
    return (
      <div className="popup-overlay">
        <div className="detectOut" onClick={onClose} />
        <div className="popup-box">
          <div className="title">{machine?.ten}</div>
          <div className="body">
            <div className="h2">Danh sách sản phẩm</div>
            <div className="h2-data">
              <table>
                <thead>
                  <tr>
                    <th>Mã sản phâm</th>
                    <th>Tên sản phẩm</th>
                    <th>Nguyên công</th>
                    <th>Sản lượng 1 giờ</th>
                    <th>Sản lượng 8 giờ</th>
                    <th>Sản lượng 12 giờ</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="h2">Trạng thái thiết bị</div>
            <div className="h2-data">
              <div className="null">Chưa có dữ liệu!</div>
            </div>
            <div className="h2">Thông tin chi tiết</div>
            <div className="h2-data">
              <div className="null">Chưa có dữ liệu!</div>
            </div>
            <div className="h2">Lịch sử sản xuất</div>
            <div className="h2-data">
              <div className="null">Chưa có dữ liệu!</div>
            </div>
            <div className="h2">Lịch sử bảm trì/ bảo dưỡng</div>
            <div className="h2-data">
              <div className="null">Chưa có dữ liệu!</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Machine_details;
