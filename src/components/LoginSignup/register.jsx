import { Formik, Field, Form} from "formik";
import React from "react";
import { isValidElement } from "react";
import * as yup from 'yup';
import './style.css'


var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var capAlpha = /[A-Z]/;
var smallAlpha = /[a-z]/;
var dig = /[0-9]/;
function register(){
    const validation = yup.object().shape({
        username:yup.string().required('Please Give the name').min(8).max(20),
        phone:yup.number().required('Phone number is required')
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point").max(10).min(10),
        email:yup.string().required('It is required.').email('Please enter a valid email.').min(10),
        password:yup.string().required('It is required.').matches(
            "([A-Za-z])([@$!%*#?&a-zA-Z0-9])([@$!%*#?&])[0-9]",
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          ).min(8)
    });
    return(
        <div className='container'>   
        <Formik 
        initialValues={{username:'', phone:null, email:'', password:''}}
        validationSchema = {validation}
    validationOnMount = {false}
    onSubmit={()=>{
        console.log('submit')
    }}
        >
           {
         ({values, touched, errors,handleSubmit,isValid, isSubmitting})=>{return (
           
            <Form >
                <Field className='inp' name='username' type='text' values='values.username' placeholder='enter username'/>
                <Field className='inp' name='phone' type='number' values='values.phone' autoComplete='off' placeholder='enter phone number' noValidate/>
                

                <Field className='inp' name='email' type='email' values='values.email' autoComplete='off' placeholder='enter email'/>
                
                <Field className='inp' name='password' type='password' values='values.password' placeholder='enter password'/>

                <ul className={'errorList ' + ((touched)?'enab':'')}>
                    <li><span className=
                    {'listname ' + (touched&&(capAlpha.test(values.password))?'green':'')}>must have Capital Letter, </span>
                    <span className={'listname ' + (touched&&(smallAlpha.test(values.password))?'green':'')}>small letter, </span>
                    <span className={'listname ' + (touched&&(format.test(values.password))?'green':'')}>special character, </span>
                    <span className={'listname ' + (touched&&(dig.test(values.password))?'green':'')}>digit, </span>
                    <span className={'listname ' + (touched&&(values.password.length>=8)?'green':'')}>length atleast of 8 Characters</span>
                    </li>
                </ul>
                {console.log(errors,'asdfg')}
                <button className={'button '+((isValid)?' hoverbtn':'')} type='submit' onSubmit={handleSubmit} 
                disabled={isSubmitting} >Register</button>
            </Form>
            )}}
        </Formik>
        </div>
    )
}
export default register;
