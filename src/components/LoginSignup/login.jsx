import { Field, Formik } from "formik";
import React from "react";
import * as yup from 'yup';
import './style.css'
const validation = yup.object().shape({
    email:yup.string().required('It is required.').email('Please enter a valid email.'),
    password:yup.string().required('It is required.').min(8)
});
const loginPersonal=()=>{

}
const loginWithGoogle=()=>{
    
}
function Login(){

    return(
        <div className='container'>
            <Formik 
        initialValues={{email:'', password:''}}
        validationSchema = {validation}
        onSubmit ={()=>{
            console.log('submit');
        }}
        >
           {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
            <form>
                <label className='label' htmlFor="email">Enter Email</label>
            <Field className='inp' name='email' type='email' values='values.email' autoComplete='off' />
            <label className='label' htmlFor="password">Enter Password</label>

            <Field className='inp' name='password' type='password' values='values.password'/>
            <button className={'button '+ ({isSubmitting}?'hoverbtn':'')} onSubmit={handleSubmit} disabled={isSubmitting}>Login</button>
            <p>OR</p>
            <button className='button google' onSubmit={handleSubmit}>Login with google</button>
            </form>
            )}
        </Formik>
        </div>
    )
}
export default Login;
