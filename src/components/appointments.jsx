import React, { Fragment } from 'react';
import Appointment from './appointment';

const Appointments = props => {

  const appointments = props.appointments;
  const title = appointments.length === 0 ? `U don't have any appointments` : 'Admin Appointments'
  
  return (
  <Fragment>
    <h2>{title}</h2>
    {
      appointments.map(appointment => 
        <Appointment
          key={appointment.id}
          appointment={appointment}
          deleteAppointment={props.deleteAppointment}
        />
      )
    }
  </Fragment>
  )
}

export default Appointments;