import { Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import Input from './Input'
import './Authentication.css'
import { signupWithEmail } from '../../base/auth'
import { useAppContext } from '../../base/context'

function Register() {
  const [{ user }, dispatch] = useAppContext()
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  var capAlpha = /[A-Za-z]/
  var dig = /[0-9]/
  const validation = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email().min(5),
    password: yup
      .string()
      .required()
      .matches('([A-Za-z])([@$!%*#?&a-zA-Z0-9])([@$!%*#?&])[0-9]')
      .min(8),
  })
  return (
    <div className='container'>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validationSchema={validation}
        onSubmit={(values) => {
          signupWithEmail(dispatch, values.email, values.password)
        }}
      >
        {({
          values,
          getFieldProps,
          touched,
          errors,
          handleSubmit,
          handleBlur,
          handleChange,
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
                  must have alphabet,{' '}
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
              {console.log(errors)}
              <button
                className={'button hoverbtn'}
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
    </div>
  )
}
export default Register
