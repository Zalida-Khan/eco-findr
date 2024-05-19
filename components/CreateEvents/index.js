import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/saga-blue/theme.css";

const calendarStyles = `
  .p-component {
    border-radius: 20px;
  }
  .p-component,
  .p-datepicker-header {
    background-color: var(--midGreen);
    color: var(--paleGreen);
  }
  .p-datepicker-weekheader,
  .p-datepicker-weeknumber,
  .p-datepicker-year {
    display: none;
  }
  .p-datepicker-month,
  .p-icon {
    color: var(--paleGreen)
    width: fit-content;
  }
`;

const CalendarComponent = () => {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                inline
                showWeek
            />
            <style>{calendarStyles}</style>
        </div>
    );
};

export default CalendarComponent;