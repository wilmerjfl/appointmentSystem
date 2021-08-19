import React from 'react';

const Appointment = props => {

  const { id, pet, owner, date, hour, description } = props.appointment;
  
  return (
    <div className="cita">
      <p>Pet: <span>{pet}</span></p>
      <p>Owner: <span>{owner}</span></p>
      <p>Date: <span>{date}</span></p>
      <p>Hour: <span>{hour}</span></p>
      <p>Description: <span>{description}</span></p>

      <button 
      className="button eliminar u-full-width"
      onClick={ () => props.deleteAppointment(id)}
      >Eliminar &times;</button>
    </div>
  )
}

export default Appointment;