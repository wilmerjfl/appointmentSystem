import React, { Fragment } from 'react';
import Appointment from './appointment';

const Appointments = props => {

  const appointments = props.appointments;

  return (
  <Fragment>
    <h2>Admin Appointments</h2>
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