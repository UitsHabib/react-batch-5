import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Login () {
    const [error, setError] = useState("");

    const navigate = useNavigate();

    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, e) => {
                    console.log(values);

                    if(values.email === 'habib@gmail.com' && values.password === '12345678') {
                        navigate('/counters');
                    }
                    else {
                        setError("Invalid credentials");
                    }

                    e.setSubmitting(false);
                }}
            > 
                {formik => (
                    <Form className='container mt-5'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <Field type="email" name="email" className="form-control" id="email"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label"> Password </label>
                            <Field type="password" name="password" className="form-control" id="password" />
                        </div>
                        
                        { error && <span className='text-danger'>{error}</span>}
                        <br />

                        <button 
                            type="submit"
                            className="btn btn-primary"
                        >
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login;