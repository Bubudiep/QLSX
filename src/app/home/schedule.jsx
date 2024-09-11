import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Cấu hình localizer bằng moment
const localizer = momentLocalizer(moment);

const Schedule = () => {
  const [events, setEvents] = useState([
    {
      title: "Họp nhóm",
      start: new Date(2024, 8, 11, 9, 0), // Tháng 8 là tháng 9 do month index 0-based
      end: new Date(2024, 8, 11, 10, 0),
    },
    {
      title: "Họp sản xuất",
      start: new Date(2024, 8, 12, 13, 0), // 13:00 giờ (1:00 chiều) kiểu 24h
      end: new Date(2024, 8, 12, 14, 0),
    },
  ]);

  return (
    <div className="calendar-container">
      <div className="calendar-box">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          step={60}  // Mỗi time slot là 30 phút
          timeslots={2}  // Hiển thị 2 slot 30 phút thành khối 1 giờ
          defaultView="week"
          style={{ height: 700 }}
          popup
          formats={{
            timeGutterFormat: "HH:mm", // Định dạng giờ kiểu 24h
            eventTimeRangeFormat: ({ start, end }) =>
              `${moment(start).format("HH:mm")} - ${moment(end).format(
                "HH:mm"
              )}`,
          }}
        />
      </div>
    </div>
  );
};

export default Schedule;
