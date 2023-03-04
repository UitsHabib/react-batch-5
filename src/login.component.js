import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class Login extends Component {
    state = {
        loggedIn: false,
        error: ""
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values, e) => {
                        
                        console.log(values);

                        if(values.email === 'habib@gmail.com' && values.password === '12345678') {
                            this.setState({...this.state, loggedIn: true });
                        }
                        else {
                            this.setState({...this.state, error: "Invalid credentials"})
                        }

                        e.setSubmitting(false);
                    }}
                > 
                    {formik => (
                        <Form className='container mt-5'>
                            { this.state.loggedIn && <Navigate to="/counters" replace={true} />}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <Field type="email" name="email" className="form-control" id="email"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label"> Password </label>
                                <Field type="password" name="password" className="form-control" id="password" />
                            </div>
                            
                            { this.state.error && <span className='text-danger'>{this.state.error}</span>}
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
}

export default Login;