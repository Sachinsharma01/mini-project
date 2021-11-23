import { Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import { loginWithEmail, loginWithGoogle } from '../../base/auth'
import { useAppContext } from '../../base/context'
import Input from './Input'
import './Authentication.css'
const validation = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
})
function Login() {
  const [{}, dispatch] = useAppContext() // eslint-disable-line
  return (
    <div className='container'>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validation}
        onSubmit={(values) => {
          loginWithEmail(dispatch, values.email, values.password)
        }}
      >
        {({ errors, touched, handleSubmit, isValid, getFieldProps }) => (
          <>
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
              touched={touched.password}
              errors={errors.password}
              placeholder={'Password'}
            />
            <button
              className={'button' + (!isValid ? ' hoverbtn' : '')}
              onClick={handleSubmit}
              disabled={!isValid}
            >
              Login
            </button>
            <div className='itemContainer'>
              <a className='forgotPassword' href='/#'>
                forgot password?
              </a>
            </div>
            <div className='itemContainer flexContainer'>
              <hr className='horizontalLine ' />
              <p>OR</p>
              <hr className='horizontalLine' />
            </div>
            <button
              className='google'
              onClick={() => {
                loginWithGoogle(dispatch)
              }}
            >
              <img className='googleImage' src='./google.png' alt='' />
            </button>
          </>
        )}
      </Formik>
    </div>
  )
}
export default Login
