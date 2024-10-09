// planning/WorkDayDetails.js
import React from "react";

const WorkDayDetails = ({ work, expandedDayIndex, onToggleExpand }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Giờ làm việc</th>
            <th>Nhân công</th>
            <th>Số máy</th>
            <th>Sản lượng</th>
            <th>Ghi chú</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {work.workDays.map((day, index) => (
            <tr key={index}>
              <td>{day.date}</td>
              <td>{day.hoursWorked} giờ</td>
              <td>{day.workers}</td>
              <td>{day.machineNumber}</td>
              <td>{day.output}</td>
              <td>{day.notes}</td>
              <td>
                <button
                  className="text-blue-500"
                  onClick={() => onToggleExpand(index)}
                >
                  {expandedDayIndex === index ? "Ẩn" : "Chi tiết"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {expandedDayIndex !== null && expandedDayIndex < work.workDays.length && (
        <div className="mt-2 p-2 border-t">
          <strong>
            Thông tin chi tiết ngày {work.workDays[expandedDayIndex].date}
          </strong>
        </div>
      )}
    </>
  );
};

export default WorkDayDetails;
