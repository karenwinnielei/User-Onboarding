import React, { useState } from 'react';
import '../../src/index.css';
import Form from './Form'
import Member from './Member'
import formSchema from '../validation/formSchema'
import * as yup from 'yup'

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  terms: false, 
}

const initialMembers = []
const initialDisabled = true

export default function App() {
  const [members, setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {

  }

  const onSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <div className="App">
      <header>
        <h1>Karen's Advanced Form</h1>
      </header>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        onCheckboxChange={onCheckboxChange}
        disabled={disabled}
        errors={formErrors}
      />

      {
        members.map(member => {
          return (
            <Member/>
          )
        })
      }
    </div>
  );
}
