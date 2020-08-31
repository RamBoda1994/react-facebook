import React, { useContext } from 'react'
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { StateContext } from '../../context';
import actionTypes from '../../actions';

function Login() {

    const [state, dispatch] = useContext(StateContext);

    const handleSignIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                    alt="facebook"
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREoW4yDx4gnD6oIBVEK230BqF7Oig0yR6XDw&usqp=CAU"
                    alt="facebook"
                />
            </div>
            <Button
                type="submit"
                onClick={handleSignIn}
            >
                LOGIN
            </Button>
        </div>
    )
}

export default Login;
