import React from 'react';
import {Formik, Form, Field} from 'formik';
// import * as yup from 'yup';
import axios from 'axios';

// const validationSchema = yup.object().shape({
//     title: yup.string()
//         .required('A title is required'),
//     director: yup.string()
//         .required('required field'),
//     metascore: yup.number()
//         .max(3, 'must be less than 3 characters')
//         .required('required field'),
//     stars: yup.string()
//         .required('Enter a star'),
// })

function EditForm(props){
    const {currentMovie} = props;
    debugger

    let initialValueForm;
    
    if (currentMovie){
        initialValueForm = {
            title: currentMovie.title,
            director: currentMovie.director,
            metascore: currentMovie.metascore,
            stars: currentMovie.stars
        }
    } else {
        initialValueForm = {
            title: '',
            director: '',
            metascore: '',
            stars: '',
        }
    }

    const submit = (formValues, action) => {
        if (currentMovie !== undefined){
            edit(formValues, action)
        } else {
            add(formValues, action)
        }
    }


   const edit = (formValues, action) => {
       if(typeof(formValues.stars) === 'string'){
           formValues.stars = formValues.stars.split(',')
       }
       const params = {...formValues, id: currentMovie.id}
       axios.put(`http://localhost:5000/api/movies/${currentMovie.id}`, params)
        .then(() => {
            debugger
            action.resetForm();
            props.history.replace("/")
        })
   }

   const add = (formValues, action) => {
       if(typeof(formValues.stars) === 'string'){
           formValues.stars = formValues.stars.split(',')
       }
       axios.post('http://localhost:5000/api/movies/', formValues)
        .then(() => {
            action.resetForm();
            props.history.replace('/')
        })
        .catch(err => {
            alert(err.message)
        })
   }

    return (
        <Formik
        initialValues = {initialValueForm}
        onSubmit = {submit}
        // validationSchema = {validationSchema}
        render = {props => {
            return (
                <Form>
                    <Field type='text' name='title' placeholder='title'/>
                    <Field type='text' name='director' placeholder='director'/>
                    <Field type='text' name='metascore' placeholder='metascore'/>
                    <Field type='text' name='stars' placeholder='first star'/>  
                    <button type='submit'>Submit</button>
                </Form>
            )
        }}
        />
    )
}

export default EditForm;