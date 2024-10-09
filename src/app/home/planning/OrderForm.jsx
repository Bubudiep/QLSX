// planning/OrderForm.js
import React, { useState } from "react";
import { productConfig } from "./productConfig";
import ProductCalendar from "./ProductCalendar";

const OrderForm = ({ onSubmit, onCancel }) => {
  const [orderName, setOrderName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(100); // Mặc định là 100
  const [products, setProducts] = useState([]);
  const [daysNeeded, setDaysNeeded] = useState(null);
  const [hoursNeeded, setHoursNeeded] = useState(null);

  const hoursPerDay = 8;
  const secondsPerDay = hoursPerDay * 3600; // Số giây trong một ngày làm việc
  const secondsPerHour = 3600; // Số giây trong một giờ

  const handleAddProduct = () => {
    if (products.find(p => p.name === selectedProduct)) {
      alert("Sản phẩm đã tồn tại trong danh sách.");
      return;
    }
    if(selectedProduct === ""){
      alert("Chọn sản phẩm trước khi thêm.");
      return;
    }
    const config = productConfig[selectedProduct] || { steps: [] };
    let max_time = 0;
    for (let i = 0; i < config.steps.length; i++) {
      if (config.steps[i].time > max_time) max_time = config.steps[i].time;
    }

    const product = {
      name: selectedProduct,
      quantity: quantity,
      steps: config.steps,
      timeNeeded: quantity * max_time, // Tính thời gian cần thiết
    };

    setProducts([...products, product]);
    setSelectedProduct("");
    setQuantity(100); // Reset về giá trị mặc định sau khi thêm
  };

  const handleSubmit = () => {
    const totalTimeNeeded = products.reduce((sum, product) => sum + product.timeNeeded, 0);
    const calculatedDaysNeeded = Math.ceil(totalTimeNeeded / secondsPerDay); // Tính số ngày cần thiết
    const calculatedHoursNeeded = Math.ceil(totalTimeNeeded / secondsPerHour); // Tính số giờ cần thiết

    setDaysNeeded(calculatedDaysNeeded);
    setHoursNeeded(calculatedHoursNeeded);

    if (onSubmit) {
      onSubmit({ name: orderName, products, daysNeeded: calculatedDaysNeeded, hoursNeeded: calculatedHoursNeeded });
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg overflow-auto">
      <h2 className="text-xl font-bold mb-4">Tạo Đơn Hàng Mới</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Tên Đơn Hàng:</label>
        <input
          type="text"
          value={orderName}
          onChange={(e) => setOrderName(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Sản Phẩm:</label>
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        >
          <option value="">Chọn sản phẩm</option>
          {Object.keys(productConfig).map((productName) => (
            <option key={productName} value={productName}>
              {productName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Số Lượng:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          className="border rounded px-2 py-1 w-full"
        />
      </div>

      <button
        onClick={handleAddProduct}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Thêm Sản Phẩm
      </button>

      {products.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Sản Phẩm Đã Thêm:</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Tên Sản Phẩm</th>
                <th className="border px-4 py-2">Số Lượng</th>
                <th className="border px-4 py-2">Thời Gian Cần Thiết</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">{product.quantity}</td>
                  <td className="border px-4 py-2">{product.timeNeeded} giây</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {daysNeeded !== null && hoursNeeded !== null && (
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Dự Đoán Thời Gian Hoàn Thành:</h3>
          <p className="text-sm">Số ngày cần thiết: {daysNeeded} ngày</p>
          <p className="text-sm">Số giờ cần thiết: {hoursNeeded} giờ</p>
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded mr-2"
      >
        Tạo Đơn Hàng
      </button>

      <button
        onClick={onCancel}
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
      >
        Hủy
      </button>

      <ProductCalendar />
    </div>
  );
};

export default OrderForm;
