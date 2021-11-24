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
function Login({authPage, setAuthPage}) {
  const [{}, dispatch] = useAppContext() // eslint-disable-line
  return (
    <div className='authContainer'>
      <h2 className='authHeading'>
        Sign In
      </h2>
      <p className="authSubHeading">we are trying our best to connect you throughout the world!!  </p>
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

<div className='authitemContainer'>
              <div className='rememberMe'>
              <input type="checkbox" name='remember' />
              <label htmlFor="remember">remember me</label>
              </div>
              <a className='forgotPassword' href=''>
                forgot password?
              </a>
            </div>

            <button
              className={'authbutton' + (!isValid ? ' authhoverbtn' : '')}
              onClick={handleSubmit}
              disabled={!isValid}
            >
              Login
            </button>
            
            <div className='authitemContainer authflexContainer'>
              <hr className='horizontalLine ' />
              <p className='authP'>or login with</p>
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
      <div className='authSetShow'>
        <p>don't have an account!!<a className='authLink' href="" onClick={()=>{setAuthPage(false)}}>create one</a></p>
      </div>
    </div>
  )
}
export default Login
