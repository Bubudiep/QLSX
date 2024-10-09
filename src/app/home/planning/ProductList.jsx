// planning/ProductList.js
import React from "react";

const ProductList = ({ selectedProductOrder, selectedProduct, onProductClick }) => {
  // Tính toán width dựa trên trạng thái
  const listWidth = selectedProduct ? 'w-[300px]' : 'w-full';

  return (
    <div className={`menu-box ${listWidth} p-2 machine`}>
      {selectedProductOrder ? (
        <>
          <h2 className="text-xl font-bold mb-2">
            {selectedProductOrder.name}
          </h2>
          <div className="mb-2">
            <ul className="gap-2 flex-col flex">
              {selectedProductOrder.products.map((product) => (
                <li
                  key={product.id}
                  className={`items ${selectedProduct && selectedProduct.id === product.id ? "bg-blue-100" : ""}`}
                  onClick={() => onProductClick(product)}
                >
                  <div className="status w-5 flex align-middle justify-center">
                    <div className="status-dot"></div>
                  </div>
                  <div className="details">
                    <div className="name">{product.name}</div>
                    <div className="wo">Công đoạn: {product.step}</div>
                    <div className="wo">Số lượng: {product.quantity}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Chọn một đơn hàng để xem chi tiết.</p>
      )}
    </div>
  );
};

export default ProductList;
