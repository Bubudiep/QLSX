// planning/ProductCalendar.js
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { productOrderData } from "./productOrder";

// Cấu hình moment localizer cho react-big-calendar
const localizer = momentLocalizer(moment);

// Tạo danh sách sự kiện từ dữ liệu sản phẩm
const events = productOrderData.flatMap((order) =>
  order.products.flatMap((product) =>
    product.workOrders.flatMap((workOrder) =>
      workOrder.workList.flatMap((work) =>
        work.workDays.map((day) => ({
          title: `${product.name} - ${work.deparment} - ${work.name}`,
          start: moment(day.date).toDate(),
          end: moment(day.date).toDate(),
          allDay: true,
        }))
      )
    )
  )
);

// Định nghĩa ngày bắt đầu và ngày kết thúc
const today = moment();

const ProductCalendar = () => (
  <div>
    <h2 className="text-xl font-bold mb-2">Lịch Chạy Sản Phẩm</h2>
    <div className="calendar-box">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "700px" }}
        views={['month', 'week', 'day']}
        defaultView="month"
        step={60}
        timeslots={2}
      />
    </div>
  </div>
);

export default ProductCalendar;
