import React, { useState } from "react";
import styles from "./CreateEvents.module.css";
import { Calendar } from "primereact/calendar";
import { UilPen } from "@iconscout/react-unicons";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const UpcomingEvent = () => {
  const [events, setEvents] = useState([]);
  return (
    <div className={styles.eventHandling}>
      <div className={styles.box}>
        {events.map((event, index) => (
          <div key={index} className={styles.event}>
            <div className={styles.info}>
              <span><strong>Location:</strong>{event.location}</span>
              <div className={styles.date}>
                <span><strong>Date: </strong>{event.date}</span>
                <span><strong>Event: </strong>{event.event}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NewEventCreator events={events} setEvents={setEvents} />
    </div>
  );
};

const OverlaySidebar = ({ isOpen, onClose, events, setEvents }) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    location: "",
    description: "",
  });

  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const areAllFieldsFilled = () => {
    for (const value of Object.values(inputValues)) {
      if (value.trim() === "") {
        return false;
      }
    }
    if (!date || !startTime || !endTime) {
      return false;
    }
    return true;
  };

  const handleCreateClick = () => {
    if (areAllFieldsFilled()) {
      const monthName = monthNames[date.getMonth()];
      const newEvent = {
        date: `${monthName} ${date.getDay()}`,
        event: inputValues.title,
        location: inputValues.location,
      };
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      setInputValues({ title: "", location: "", description: "" });
      setDate(null);
      setStartTime(null);
      setEndTime(null);
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`${styles.overlaySidebar}`}>
      <div className={styles.overlaySidebarContent}>
        <hr className={styles.closeEvent} onClick={onClose} />

        <div className={styles.head}>
          <span className={styles.newEventHeader}>New Event</span>
          {areAllFieldsFilled() ? (
            <a className={styles.createActive} onClick={handleCreateClick}>
              Create
            </a>
          ) : (
            <span className={styles.createInactive}>Create</span>
          )}
        </div>
        <form className={styles.eventForm}>
          <div className={styles.eventInfo}>
            <input
              type="text"
              name="title"
              value={inputValues.title}
              placeholder="Title"
              className={`${styles.eventTitle} ${styles.eventInput}`}
              onChange={handleInputChange}
            />
            <hr className={styles.divider} />
            <input
              type="text"
              name="location"
              value={inputValues.location}
              placeholder="Location"
              className={`${styles.eventLocation} ${styles.eventInput}`}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.eventDescription}>
            <input
              type="text"
              name="description"
              value={inputValues.description}
              placeholder="Description"
              className={`${styles.evenDes} ${styles.eventInput}`}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.eventDateInfo}>
            <div className={styles.eventLabelInput}>
              <label htmlFor="calendar-timeonly">Date</label>
              <Calendar
                name="date"
                value={date}
                onChange={(e) => setDate(e.value)}
                dateFormat="DD, M mm, yy"
              />
            </div>
            <hr className={styles.divider} />
            <div className={styles.eventLabelInput}>
              <label htmlFor="calendar-timeonly">Start</label>
              <Calendar
                className={`${styles.eventTime} ${styles.eventStart}`}
                name="startTime"
                id="calendar-timeonly-12h"
                value={startTime}
                onChange={(e) => setStartTime(e.value)}
                timeOnly
              />
            </div>
            <hr className={styles.divider} />
            <div className={styles.eventLabelInput}>
              <label htmlFor="calendar-timeonly">End</label>
              <Calendar
                className={`${styles.eventTime} ${styles.eventEnd}`}
                name="endTime"
                id="calendar-timeonly"
                value={endTime}
                onChange={(e) => setEndTime(e.value)}
                timeOnly
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const NewEventCreator = ({ events, setEvents }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={styles.createButton}>
        <UilPen className={styles.pen} onClick={toggleSidebar} />
      </div>
      <OverlaySidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        events={events}
        setEvents={setEvents}
      />
    </>
  );
};

export { UpcomingEvent };
