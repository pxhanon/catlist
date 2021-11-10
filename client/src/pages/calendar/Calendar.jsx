import React, { useState, useContext, useEffect } from "react";
import "./calendar.css";

// Calendar
import { getMonth } from "./util";
import CalendarHeader from "../../components/calendarCom/CalendarHeader";
import Month from "../../components/calendarCom/Month";
import GlobalContext from "../../context/calendarCon/GlobalContext";
import EventModal from "../../components/calendarCom/EventModal";

export default function Calendar() {

    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <React.Fragment>
            {showEventModal && <EventModal />}
            <div className="calendar">
                <div className="h-screen flex flex-col">
                    <CalendarHeader />
                    <div className="flex flex-1">
                        <Month month={currenMonth} />
                    </div>
                </div>
            </div>   
        </React.Fragment>
    )
}
