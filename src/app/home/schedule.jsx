import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Schedule.css"; // Import file CSS tùy chỉnh
import { productOrderData } from "./planning/productOrder";

const localizer = momentLocalizer(moment);

const Schedule = () => {
  const [events, setEvents] = useState(
    productOrderData.flatMap((order) =>
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
    )
  );
  // Tạo danh sách sự kiện từ dữ liệu sản phẩm
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };
  const addEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      const newEventData = {
        id: events.length + 1,
        title: newEvent.title,
        start: new Date(newEvent.start),
        end: new Date(newEvent.end),
      };
      setEvents([...events, newEventData]);
      setNewEvent({
        title: "",
        start: "",
        end: "",
      });
      setShowForm(false); // Hide form after adding event
    } else {
      alert("Vui lòng nhập đầy đủ thông tin sự kiện!");
    }
  };

  return (
    <div className="calendar-container">
      <div className="action-buttons">
        <div className="left">
          <button onClick={() => setShowForm(true)} className="btn-add">
            + Thêm lịch
          </button>
        </div>
        <div className="flex mr-auto">
          <button className="btn-add bg-teal-600">
            Xuất file excel
          </button>
        </div>
      </div>
      {showForm && (
        <div className="bg-full">
          <div className="bgOut" onClick={() => setShowForm(false)}></div>
          <div className="whiteBox">
            <div className="event-form">
              <div className="h3">Thêm sự kiện mới</div>
              <div className="body w-[600px]">
                <div className="title">
                  <div className="name">Tiêu đề</div>
                  <div className="value">
                    <input
                      type="text"
                      name="title"
                      value={newEvent.title}
                      onChange={handleInputChange}
                      placeholder="Nhập tiêu đề..."
                    />
                  </div>
                </div>
                <div className="time-range">
                  <div className="name">Thời gian</div>
                  <div className="input">
                    <input
                      type="datetime-local"
                      name="start"
                      value={newEvent.start}
                      onChange={handleInputChange}
                      placeholder="YYYY-MM-DD HH:mm"
                    />
                  </div>
                  <div className="text">đến</div>
                  <div className="input">
                    <input
                      type="datetime-local"
                      name="end"
                      value={newEvent.end}
                      onChange={handleInputChange}
                      placeholder="YYYY-MM-DD HH:mm"
                    />
                  </div>
                </div>
                <div className="send-to">
                  <div className="name">Người tham gia</div>
                  <div className="value">
                    <textarea placeholder="danh sách người tham gia...."></textarea>
                  </div>
                </div>
              </div>
              <div className="tools2">
                <button type="button" onClick={addEvent} className="btn-submit">
                  + Thêm sự kiện
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-cancel"
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="calendar-box">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          step={60}
          timeslots={2}
          defaultView="month"
          style={{ height: 700 }}
          popup
          formats={{
            timeGutterFormat: "HH:mm",
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
