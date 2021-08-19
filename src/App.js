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
          />

        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
