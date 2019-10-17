import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';


const initialValueForm = {
    title: '',
    director: '',
    metascore: '',
    star1: '',
    star2: '',
    star3: '',
}

const validationSchema = yup.object().shape({
    title: yup.string()
        .required('A title is required'),
    director: yup.string()
        .required('required field'),
    metascore: yup.number()
        .max(3, 'must be less than 3 characters')
        .required('required field'),
    star1: yup.string()
        .required('Enter a star'),
    star2: yup.string()
        .required('Enter a star'),
    star3: yup.string()
        .required('Enter a star'),
})

function EditForm(props){
    const {onSubmit} = props;

    return (
        <Formik
        initialValues = {initialValueForm}
        onSubmit = {onSubmit}
        validationSchema = {validationSchema}
        render = {props => {
            return (
                <Form>
                    <div>
                    <Field type='text' name='title' placeholder='title'/>
                    </div>

                    <div>
                    <Field type='text' name='director' placeholder='director'/>
                    </div>

                    <div>
                    <Field type='text' name='metascore' placeholder='metascore'/>
                    </div>

                    <div>
                    <Field type='text' name='star1' placeholder='first star'/>
                    </div>

                    <div>
                    <Field type='text' name='star2' placeholder='second star'/>
                    </div>

                    <div>
                    <Field type='text' name='star3' placeholder='third star'/>
                    </div>   
                </Form>
            )
        }}
        />
    )
}

export default EditForm;