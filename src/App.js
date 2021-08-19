import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/form';
import Appointments from './components/appointments';

function App() {

  // Check appointments
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  const [appointments, setAppointments] = useState(initialAppointments);

  const addAppointments = appointment => {
    setAppointments([
      ...appointments,
    appointment])
  };

  // Delete appointment by id
  const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id)
    setAppointments(newAppointments)
  ;}

  // Use Effect for save in local storage
  useEffect(() => {
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'));

    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments]);

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
};

export default App;
