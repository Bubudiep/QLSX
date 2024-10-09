// planning/ProductOrderList.js
import React from "react";

const ProductOrderList = ({ productOrder, selectedProductOrder, onProductOrderClick }) => {
  return (
    <div className="menu-box w-[200px]">
      <h2 className="text-xl font-bold mb-2">Đơn hàng</h2>
      <ul>
        {productOrder.map((order) => (
          <li
            key={order.id}
            className={`p-2 flex items-center border-b cursor-pointer ${
              selectedProductOrder && selectedProductOrder.id === order.id ? 'bg-blue-100' : ''
            }`}
            onClick={() => onProductOrderClick(order)}
          >
            <div className="ml-4">
              <div className="name">{order.name}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductOrderList;
