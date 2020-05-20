import * as yup from 'yup'

const formSchema = yup.object().shape({
    firstName: yup.string()
        .trim()
        .min(2, 'First name must be at least two characters long')
        .required('First name is a required field'),
    lastName: yup.string()
        .trim()
        .min(2, 'Last name must be at least two characters long')
        .required('Last name is a required field'),
    email: yup.string()
        .email('Email must be a valid email address')
        .required('Email is a required field'),
    password: yup.string()
        .required('Password is a required field'),
})

export default formSchema