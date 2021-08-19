import React, { Fragment, useState } from 'react';
import Form from './components/form';
import Appointments from './components/appointments';

function App() {

  const [appointments, setAppointments] = useState([]) 

  const addAppointments = appointment => {
    setAppointments([
      ...appointments,
    appointment])
  }

  // Delete appointments
  // Delete appointment by id

  const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id)
    setAppointments(newAppointments)
  }

  return (
    <Fragment>
    <h1> Appointment Administrator</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column">
        <Form 
          addAppointments={addAppointments}/>
        </div>
        <div className="one-half column">
          <Appointments
            appointments={appointments}
            deleteAppointment={deleteAppointment}
          />

        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
