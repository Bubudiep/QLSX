// planning/Planning.js
import React, { useState } from "react";
import ProductOrderList from "./planning/ProductOrderList";
import ProductList from "./planning/ProductList";
import WorkOrderDetails from "./planning/WorkOrderDetails";
import OrderForm from "./planning/OrderForm";
import { productOrderData } from "./planning/productOrder";
import { useOutletContext } from "react-router-dom";

const Planning = () => {
  const { user } = useOutletContext(); // Retrieve user from Outlet context
  const [productOrder, setProductOrder] = useState(productOrderData);
  const [selectedProductOrder, setSelectedProductOrder] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [expandedDayIndex, setExpandedDayIndex] = useState(null);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleProductOrderClick = (order) => {
    setSelectedProductOrder(order);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleToggleExpand = (index) => {
    setExpandedDayIndex(expandedDayIndex === index ? null : index);
  };

  const handleOrderFormSubmit = (order) => {
    setProductOrder([...productOrder, order]);
    setShowOrderForm(false);
  };

  const handleOrderFormCancel = () => {
    setShowOrderForm(false);
  };

  return (
    <div className="flex flex-col h-full gap-2">
      <div className="flex w-full gap-3 mb-2 p-2">
        <div className="left">
          <button className="btn-add" onClick={() => setShowOrderForm(true)}>
            + Thêm đơn hàng
          </button>
        </div>
      </div>

      {showOrderForm ? (
        <OrderForm
          onSubmit={handleOrderFormSubmit}
          onCancel={handleOrderFormCancel}
        />
      ) : (
        <div className="flex flex-1 h-full gap-2 overflow-hidden p-2">
          <ProductOrderList
            productOrder={productOrder}
            selectedProductOrder={selectedProductOrder}
            onProductOrderClick={handleProductOrderClick}
          />
          <ProductList
            selectedProductOrder={selectedProductOrder}
            selectedProduct={selectedProduct}
            onProductClick={handleProductClick}
          />
          {selectedProduct && (
            <div className="menu-box work-order-details overflow-y-auto flex-1 p-2">
              <WorkOrderDetails
                selectedProduct={selectedProduct}
                expandedDayIndex={expandedDayIndex}
                onToggleExpand={handleToggleExpand}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Planning;
