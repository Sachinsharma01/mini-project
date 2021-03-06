import { Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import Input from './Input'
import './Authentication.css'
import { signupWithEmail } from '../../base/auth'
import { useAppContext } from '../../base/context'

function Register({ setAuthPage }) {
  const [{}, dispatch] = useAppContext() // eslint-disable-line
  var format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/
  var capAlpha = /[A-Z]/
  var smallAlpha = /[a-z]/
  var dig = /[0-9]/
  const validation = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email().min(5),
    password: yup
      .string()
      .required()
      .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')
      .min(8),
  })
  return (
    <div className='authContainer'>
      <h2 className='authHeading'>Sign Up</h2>
      <p className='authSubHeading'>
        we are trying our best to connect you throughout the world!!
      </p>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validationSchema={validation}
        onSubmit={(values) => {
          signupWithEmail(
            dispatch,
            values.firstName,
            values.lastName,
            values.email,
            values.password
          )
        }}
      >
        {({
          values,
          getFieldProps,
          touched,
          errors,
          handleSubmit,
          isValid,
        }) => {
          return (
            <>
              <Input
                {...getFieldProps('firstName')}
                touched={touched.firstName}
                errors={errors.firstName}
                placeholder={'First name'}
              />
              <Input
                {...getFieldProps('lastName')}
                touched={touched.lastName}
                errors={errors.lastName}
                placeholder={'Last name'}
              />
              <Input
                {...getFieldProps('email')}
                type='email'
                touched={touched.email}
                errors={errors.email}
                placeholder={'Email'}
              />
              <Input
                {...getFieldProps('password')}
                type='password'
                touched={false}
                errors={false}
                placeholder={'Password'}
              />
              <ul
                className={
                  'errorList ' +
                  (touched.password && errors.password ? 'enab' : 'disable')
                }
              >
                <li
                  className={
                    touched.password && capAlpha.test(values.password)
                      ? 'green'
                      : ''
                  }
                >
                  must have a capital letter,{' '}
                </li>
                <li
                  className={
                    touched.password && smallAlpha.test(values.password)
                      ? 'green'
                      : ''
                  }
                >
                  must have a small letter,{' '}
                </li>
                <li
                  className={
                    touched.password && format.test(values.password)
                      ? 'green'
                      : ''
                  }
                >
                  atleast one special character,{' '}
                </li>
                <li
                  className={
                    touched.password && dig.test(values.password) ? 'green' : ''
                  }
                >
                  atleast one digit,{' '}
                </li>
                <li
                  className={
                    touched.password && values.password.length >= 8
                      ? 'green'
                      : ''
                  }
                >
                  length atleast of 8 Characters
                </li>
              </ul>
              <button
                className={'authbutton authhoverbtn'}
                type='submit'
                onClick={handleSubmit}
                disabled={!isValid}
              >
                Register
              </button>
            </>
          )
        }}
      </Formik>
      <div className='authSetShow'>
        Already registered
        <span className='authLink' onClick={() => setAuthPage(true)}>
          Login
        </span>
      </div>
    </div>
  )
}
export default Register
