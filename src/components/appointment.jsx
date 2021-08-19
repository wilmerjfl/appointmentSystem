import React from 'react';

const Appointment = props => {

  const { pet, owner, date, hour, description } = props.appointment;
  return (
    <div className="cita">
      <p>Mascota: <span>{pet}</span></p>
      <p>Owner: <span>{owner}</span></p>
      <p>Date: <span>{date}</span></p>
      <p>Hour: <span>{hour}</span></p>
      <p>Description: <span>{description}</span></p>
    </div>
  )
}

export default Appointment;