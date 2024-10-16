import React, { useEffect, useState } from "react";
import Themtomay from "./../../components/forms/Themtomay";
import api from "../../class/api";
import Cookies from "js-cookie";
import Themthietbi from "../../components/forms/Themthietbi";
import Machine_details from "./department/machine_details";
import Lichsu_sanxuat from "./department/lichsu_sanxuat";
import Lichsu_baotri from "./department/lichsu_baotri";

const Department = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [optionThemthietbi, setOptionThemthietbi] = useState(null);
  const [isThemtomayOpen, setIsThemtomayOpen] = useState(false);
  const [isThemthietbiOpen, setIsThemthietbiOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState(null);
  const token = Cookies.get("token");

  // useEffect để tải danh sách tổ máy khi component render lần đầu
  useEffect(() => {
    const fetchTomayList = async () => {
      try {
        const response = await api.get("/danhsachthietbi/?page_size=9999", {
          headers: { Authorization: `Bearer ${token}` },
        }); // Gọi API
        console.log(response.data);
        setMenuItems(response?.data?.results);
      } catch (error) {
        console.error("Error fetching Tổ máy list:", error);
      }
    };

    fetchTomayList(); // Gọi hàm tải dữ liệu
  }, []);
  const handleThemthietbi = (tomay) => {
    setOptionThemthietbi(tomay);
    openThemthietbi();
  };
  const handleThemtomay = () => {
    openThemtomay();
  };
  const openThemtomay = () => {
    setIsThemtomayOpen(true);
  };
  const closeThemtomay = () => {
    setIsThemtomayOpen(false);
  };
  const openThemthietbi = () => {
    setIsThemthietbiOpen(true);
  };
  const closeThemthietbi = () => {
    setIsThemthietbiOpen(false);
  };
  const handleThietbiSubmit = (data, toMayId) => {
    setMenuItems((oldMenuItems) =>
      oldMenuItems.map((toMay) => {
        if (toMay.id === toMayId) {
          // Thêm thiết bị mới vào mảng thietbi của tổ máy có id là toMayId
          return {
            ...toMay,
            thietbi: [...toMay.thietbi, data],
          };
        }
        return toMay; // Giữ nguyên các tổ máy khác
      })
    );
  };
  const handleTomaySubmit = (data) => {
    setMenuItems((oldMenuItems) => {
      return [...oldMenuItems, data];
    });
  };
  const handleshowMachine = (machine) => {
    setSelectedMachine(machine);
  };
  return (
    <div className="flex flex-1 h-full p-2 gap-1 noDrag">
      <Themtomay
        isOpen={isThemtomayOpen}
        onClose={closeThemtomay}
        onSubmit={handleTomaySubmit}
      />
      <Machine_details
        machine={selectedMachine}
        onClose={() => {
          setSelectedMachine(null);
        }}
      />
      <Themthietbi
        isOpen={isThemthietbiOpen}
        onClose={closeThemthietbi}
        onSubmit={handleThietbiSubmit}
        option={optionThemthietbi}
      />
      <div className="flex-col flex-1 danhsach-trai">
        <div className="danhsach-top">
          <div className="left">
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Tên tổ máy, mã máy,..." />
            </div>
            <button>Tìm kiếm</button>
          </div>
          <div className="right">
            <button className="add" onClick={handleThemtomay}>
              Thêm tổ máy
            </button>
          </div>
        </div>
        <div className="danhsach-thietbi">
          {menuItems.map((menu, index) => (
            <div key={index} className={`items`}>
              <div className="items-name">
                <div className="flex items-center">
                  {menu.ten}{" "}
                  <div className="unit">{menu.thietbi.length} máy</div>
                </div>
                <div className="right">
                  <button className="edit" title="Chỉnh sửa">
                    <i className="fa-solid fa-marker"></i>
                  </button>
                </div>
              </div>
              <div className="items-list">
                {menu.thietbi
                  .sort((a, b) => a.is_online - b.is_online) // Sorting by status.order
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="list-items"
                      onClick={() => {
                        handleshowMachine(item);
                      }}
                    >
                      <div className="top">
                        <div className="name">{item.ten}</div>
                        <div
                          className={
                            "status " +
                            (item.is_active
                              ? item.is_online
                                ? "online"
                                : "offline"
                              : "down")
                          }
                        >
                          {item.is_online ? "online" : "offline"}
                        </div>
                      </div>
                      <div className="body">
                        {item?.wo ? item.wo : "No data"}
                      </div>
                    </div>
                  ))}
                <div
                  className="list-items add"
                  onClick={() => handleThemthietbi(menu)}
                >
                  <i className="fa-solid fa-plus"></i>
                  <div className="text">Thêm thiết bị</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-col tools-tab">
        <Lichsu_sanxuat />
        <Lichsu_baotri />
      </div>
    </div>
  );
};

export default Department;
