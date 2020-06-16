import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';
import { loginUser } from '../../actions/userActions';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";


function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [user] = useState();
    const history = useHistory();

    useEffect(()=>{
        if(props.isLoggedIn){
            history.push("/dashboard");
        }
    },[props]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let user = {
            email: email,
            password: password
        }
        props.dispatch(loginUser(user));
    }
    return (
        <Form onSubmit={handleSubmit}>
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
    const user = state.userState || {};
    return user;
  }
    
export default connect(mapStateToProps)(LoginForm);