import React, { useState } from 'react';
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';
import Auth from '../../utilities/auth-service';
import { userContext } from '../../context/user-context';
import { loginUser } from '../../actions/userActions';
import { connect } from 'react-redux';


function LoginForm(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let user = {
            email: email,
            password: password
        }
        props.dispatch(loginUser(user));
        // Auth.logIn(user)
        //     .then(data => {
        //         setUser(data);
        //     })
        //     .catch(err => console.log(err));
    }
    return (
        <Form onSubmit={handleSubmit}>
            <userContext.Provider value={user}></userContext.Provider>
            <FormGroup row>
                <Label for="email">Activision Email</Label>
                <Input type="email" name="email" id="email" placeholder="example@live.com" value={email} onChange={e => setEmail(e.target.value)}></Input>
            </FormGroup>
            <FormGroup row>
                <Label for="password">Activision Password</Label>
                <Input type="password" name="password" id="password" placeholder="xfE2s@!" value={password} onChange={e => setPassword(e.target.value)}></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
    )
}
const mapStateToProps = state => {
    const { user } = state.user || {};
    return user;
  }
  
export default connect(null)(LoginForm);