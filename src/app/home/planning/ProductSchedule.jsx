// planning/ProductSchedule.js
import React from "react";
import { productOrderData } from "./productOrder";

const ProductSchedule = () => {
  console.log(productOrderData);
  return (
    <div className="p-4 bg-gray-100 shadow-md rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4">Lịch Chạy Sản Phẩm</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Đơn Hàng</th>
            <th className="border px-4 py-2">Sản Phẩm</th>
            <th className="border px-4 py-2">Số Lượng</th>
            <th className="border px-4 py-2">Bước</th>
            <th className="border px-4 py-2">Ngày Bắt Đầu</th>
            <th className="border px-4 py-2">Ngày Kết Thúc</th>
            <th className="border px-4 py-2">Trạng Thái</th>
          </tr>
        </thead>
        <tbody>
          {productOrderData?.map((order) =>
            order?.products.map((product, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{order.name}</td>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.quantity}</td>
                <td className="border px-4 py-2">{product.step}</td>
                <td className="border px-4 py-2">
                  {product.workOrders.length > 0 ? product.workOrders[0].startDate : "N/A"}
                </td>
                <td className="border px-4 py-2">
                  {product.workOrders.length > 0 ? product.workOrders[0].endDate : "N/A"}
                </td>
                <td className="border px-4 py-2">
                  {product.workOrders.length > 0 ? product.workOrders[0].status : "N/A"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSchedule;
