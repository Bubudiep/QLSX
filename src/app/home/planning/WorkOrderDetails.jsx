// planning/WorkOrderDetails.js
import React from "react";
import WorkDayDetails from "./WorkDayDetails";

const WorkOrderDetails = ({ selectedProduct, expandedDayIndex, onToggleExpand }) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">
        Kế hoạch công việc cho {selectedProduct.name}
      </h2>
      {selectedProduct.workOrders.map((workOrder) => (
        <div key={workOrder.id} className="mb-4 slg-details">
          <h3 className="text-lg font-semibold">
            Số công đoạn: {selectedProduct.step}
          </h3>
          <p><strong>Ngày bắt đầu:</strong> {workOrder.startDate}</p>
          <p><strong>Ngày kết thúc:</strong> {workOrder.endDate}</p>

          {/* Lặp qua từng workList và hiển thị bảng chi tiết workDays */}
          {workOrder.workList.map((work, workIndex) => (
            <div key={workIndex}>
              <h4 className="text-md font-semibold mt-2">
                {workIndex + 1}. {work.name} (Tổ {work.deparment.toLowerCase()})
              </h4>
              <WorkDayDetails 
                work={work} 
                expandedDayIndex={expandedDayIndex} 
                onToggleExpand={onToggleExpand} 
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default WorkOrderDetails;
