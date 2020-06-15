import React, {useState} from 'react';
import { Col, Form, FormGroup, Button, FormText, Label, Input } from 'reactstrap';
import Auth from '../../utilities/auth-service';
function LoginForm(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let user = {
            email : email,
            password: password
        }
        Auth.login(user)
            .then(function(res){
                console.log(res);
            })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="email">Activision Email</Label>
                <Input type="email" name="email" id="email" placeholder="example@live.com" value={email} onChange={e => setEmail(e.target.value)}></Input>
            </FormGroup>
            <FormGroup row>
                <Label for="password" >Password</Label>
                <Input type="password" name="password" id="password" placeholder="xfE2s@!" value={password} onChange={e=> setPassword(e.target.value)}></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default LoginForm;