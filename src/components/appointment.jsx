import React from 'react';
import PropTypes from 'prop-types';

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

Appointment.propTypes = {
  appointment: PropTypes.object,
  deleteAppointment: PropTypes.func.isRequired
}

export default Appointment;