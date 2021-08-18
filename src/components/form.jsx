import React, { Fragment, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = () => {

  const appointmentModel = {
    id: uuidv4(),
    pet: '',
    owner: '',
    date: '',
    hour: '',
    description: ''
  }

  const [appointment, setAppointment] = useState(appointmentModel)

  const handleChange = e => {
    setAppointment({
      ...appointment,
      [e.target.name] : e.target.value
    })
  }

  const { pet, owner, date, hour, description } = appointment;

  const [error, setError] = useState(false)

  const [ errorMessage, setErrormessage] = useState()

  const submitAppointment = e => {
    e.preventDefault();

    // Validate a ID
    const values = Object.entries(appointment)
    
    values.forEach((value) => {
      if(value[1].trim() === '') {
        setError(true);
        setErrormessage(value[0]);
        return;
      }
    })

    // 
    

  }

  

  return (
    <Fragment>
      <h2>Create Appointment</h2>

      { error ? <p className="alerta-error">All values are required, please add: {errorMessage}</p>: null}

      <form
        onSubmit={submitAppointment}
      >
        <label>Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="pet"
          onChange={handleChange}
          value={pet}
        />
        <label>Owner</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="owner"
          onChange={handleChange}
          value={owner}

        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}

        />
        <label>Hour</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={handleChange}
          value={hour}

        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          className="u-full-width"
          onChange={handleChange}
          value={description}

        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
        >Add Appointment</button>
      </form>
    </Fragment>
  )
}

export default Form;