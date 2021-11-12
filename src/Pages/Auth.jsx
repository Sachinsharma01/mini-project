import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'

function Auth() {
  const validation = Yup.object.shape({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  })

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validation}
      >
        {({}) => (
          <>
            <Input />
          </>
        )}
      </Formik>
    </div>
  )
}

export default Auth
