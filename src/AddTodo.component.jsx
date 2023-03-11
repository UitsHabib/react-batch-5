import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

function AddTodo() {
    const navigate = useNavigate();

    return (
        <>
            <Formik 
                initialValues={{ todo: "" }}
                onSubmit={async (values, e) => {
                    try {
                        console.log(values);
    
                        const data = { todo: values.todo, userId: 1 };
                        await axios.post("https://dummyjson.com/todos/add", data);
                        navigate('/todos');
                    }
                    catch(err) {
                        console.log(err);
                        alert('Error happened');    
                    }

                    e.setSubmitting(false);
                }}
            >
                {formik => (
                    <Form className='container mt-5'>
                        <div className="mb-3">
                            <label htmlFor="todo" className="form-label">Enter your todo</label>
                            <Field type="text" sty={{ height: '140px' }} rows={5} as="textarea" name="todo" className="form-control" id="todo"/>
                        </div>

                        <button 
                            type="submit"
                            className="btn btn-primary"
                        >
                            Add Todo
                        </button>
                    </Form>
                )}
            
            </Formik>
        </>
    );
}

export default AddTodo;