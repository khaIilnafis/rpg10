import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Button, Label, Input, Alert } from 'reactstrap';
import { loginUser } from '../../actions/userActions';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";


function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [user] = useState();
    const history = useHistory();
    const [err, setError] = useState("");
    useEffect(()=>{
        if(props.isLoggedIn){
            history.push("/dashboard");
        }else{
            setError(props.message)
        }
    },[props]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let user = {
            email: email,
            password: password
        }
        props.dispatch(loginUser(user))
    }
    return (
        <Form onSubmit={handleSubmit}>
            {err ? <Alert color="danger">{err}</Alert> : ""}
            <FormGroup row>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="example@live.com" value={email} onChange={e => setEmail(e.target.value)}></Input>
            </FormGroup>
            <FormGroup row>
                <Label for="password">Password</Label>
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