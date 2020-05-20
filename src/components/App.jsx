import React, { useState, useEffect } from 'react';
import '../../src/index.css';
import Form from './Form'
import Member from './Member'
import formSchema from '../validation/formSchema'
import * as yup from 'yup'
import axios from 'axios'

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
  // terms: false, 
}

const initialMembers = []
const initialDisabled = true

export default function App() {
  const [members, setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getMembers = () => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        setMembers(response.data)
        console.log(response.data)
       console.log(members)
      })
      .catch(error => {
        debugger
      })
  }

  const postNewMember = newMember => {
    axios.post('https://reqres.in/api/users', newMember)
      .then(response => {
        setMembers([response.data, ...members])
        console.log('success', response)

      })
      .catch(error =>{
        debugger
      })
      .finally(() =>{
        setFormValues(initialFormValues)
      })
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target
    setFormValues({
      ...formValues, 
      [name]: checked
  })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newMember = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    postNewMember(newMember)
  }

  useEffect(() => {
    getMembers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

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
            <Member key ={member.id} details={member}/>
          )
        })
      }

    </div>
  );
}
