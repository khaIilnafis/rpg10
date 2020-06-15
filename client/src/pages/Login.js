import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from '../components/Forms/Login';
import { Row, Col } from 'reactstrap';
function Login() {
    let location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };

    return (
        <Row>
            <Col xs={{ size: 6, offset: 3 }} sm={{ size: 5, offset: 3 }} md={{ size: 4, offset: 4 }}>
                {from.pathname !== '/' ? (<div><p>Please login to access {from.pathname}</p>
                    <LoginForm>
                    </LoginForm>
                </div>) :
                    <LoginForm>
                    </LoginForm>
                }
            </Col>
        </Row>
    )
}
export default Login;