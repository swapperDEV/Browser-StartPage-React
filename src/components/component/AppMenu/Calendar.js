import React from 'react'
import './styles/Calendar.css'
import Background from '../../UI/Wrapper'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
    return (
        <Background classes='calendar'>
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
        />
        </Background>
    )
}

export default Calendar