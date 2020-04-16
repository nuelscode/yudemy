import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

export class LogIn extends Component {
    state = {

    }
    handleChange (e) {
        console.log(e)
    }

    handleSubmit (e) {
        console.log(e)
    }


    render () {
        return (
            <div className="container">
            <Form>
             <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
             Log in 
            </Button>
           </Form>

            </div>
       )
   }
}


/*export const LogIn = props => {
    const {
        cancel,
        errors,
        submit,
        submitButtonText,
        elements,
        passwordErrors,
    } = props;

    function handleSubmit (e) {
        event.preventDefault();
        submit();
    }

    function handleCancel (e) {
        event.preventDefault();
        cancel();
    }

    return (
        <React.Fragment>
            <ErrosDisplay errors= {erros} passwordErrors= {passwordErrors} />
            <Form onSubmit={handleSubmit}>
                {elements()}

                <Button className="mr-1" variant="primary" type="submit">
                    {submitButtonText}
                </Button>
                <Button className="mr-1" variant="secondary" onClick={handleCancel}>
                    Cancel
                </Button>
            </Form>
        </React.Fragment>
    );
};

function ErrosDisplay({ errors, passwordErrors}) {
    let errorsDisplay = null;

    if (errors.lenght) {
        errors.Display = (
            <React.Fragment>
                <ValidationLabel>Errors:</ValidationLabel>
                <ValidationUl>
                    {errors.map((error, i) => (
                        <li key={i}>{error}</li>
                    ))}
                </ValidationUl>
            </React.Fragment>
        );
    } else if (!passwordErrors) {
        errorsDisplay = (
            <React.Fragment>
                <ValidationLabel>Errors:</ValidationLabel>
        <ValidationUl>{<li>Password must match</li>}</ValidationUl>
            </React.Fragment>
        );
    }
    return errorsDisplay
}

const ValidationUl = styled.div`
   color: red;
   padding: 15px 0 40px 10px;
`;

const ValidationLabel = styled.h2`
   color: #0069c0;
   font-size: 28px;
`;



<LogIn
             cancel={this.cancel}
             errors={errors}
             submit={this.submit}
             passwordErrors={confirmed}
             submitButtonText="Log in"
             elements={() => (
                 <React.Fragment>
                     <Form.Group controlId="formBasicEmail">
                         <Form.Control
                           type="email"
                           name="email"
                           value={email}
                           placeholder="name@gmail.com"
                           onChange={this.change}
                         />
                     </Form.Group>

                     <Form.Group controlId="formBasicPassword">
                         <Form.Control
                           type="password"
                           name="password"
                           value={password}
                           placeholder="Password"
                           onChange={this.change}
                         />
                     </Form.Group>
                 </React.Fragment>
             )} 
/> */