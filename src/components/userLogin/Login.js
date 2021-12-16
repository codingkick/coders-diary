import React from 'react'
import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook.svg';
import google from '../../assets/images/google.svg';
import linkedin from '../../assets/images/linkedin.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './login.scss';
import { googleLoginIntiate, loginIntiate, registerIntiate } from '../../redux/actions/loginRegisterActions';
import {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Loader } from '../Loader';
export const Login = () => {
    const state = useSelector(state => state.userReducer);
    const history=useHistory();
    useEffect(() => {
        if(state.user!=null)
        {
            console.log("in use effect");
            history.push("/");
        }
        
    }, [state.user]);
    const dispatch = useDispatch();
    const [login, setlogin] = useState(true);
    const [signUpForm, setsignUpForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [signInForm, setsignInForm] = useState({
        email: "",
        password: ""
    })
    return (
        state.loading?<Loader/>:
        <div className="login">
                <div className={`login_colored-container ${login ? 'logincolored-container--left' : 'login_colored-container--right'}`}></div>
                <div className={`login_welcome-back ${login ? 'loginwelcome-back--active' : 'login_welcome-back--inactive'}`}>
                    <div className="login_welcome-back_logo-container">
                        <img className="login_welcome-back_logo-container--image" src={logo} alt="Budwriter" />
                        Budwriter
                    </div>
                    <div className="login_welcome-back_main-container">
                        <div className="login_welcome-backmain-container_text-container">
                            <span className="login_welcome-backmain-container_text-container--title">
                                Welcome Back!
                            </span>
                            <span className="login_welcome-backmain-container_text-container--secondary">
                                To keep sharing your work with us, please log in.
                            </span>
                        </div>
                        <div onClick={() => {
                            setlogin(!login)
                        }} className="login_welcome-backmain-container_button-container">
                            Sign In
                        </div>
                    </div>
                </div>
                <div className={`login_create-container ${login ? 'logincreate-container--active' : 'login_create-container--inactive'}`}>
                    Create Account
                    <div className="login_create-container_social-container">
                       
                        <img className="login_create-container_social-container--google-icon" src={google} alt="" onClick={handleGoogleLogin}/>
                        
                    </div>
                    <span className="login__create-container--info-text">or use email for your registration</span>
                    <div className="login_create-container_form-container">
                        <form className="login_create-containerform-container_form" onSubmit={(e) => {
                            e.preventDefault();
                            signUp();
                        }}>
                            <input
                                className="login_create-containerform-container_form--name"
                                type="text"
                                placeholder="Name"
                                value={signUpForm.name}
                                onChange={(value) => setsignUpForm({
                                    
                                    name: value.target.value,
                                    email: signUpForm.email,
                                    password: signUpForm.password
        
                                })}
                                required />
                            <input
                                className="login_create-containerform-container_form--email"
                                // className="login_login-containermain-containerform-container_form--email"
                                type="email"
                                placeholder="Email"
                                value={signUpForm.email}
                                onChange={(value) => setsignUpForm({
                                    
                                    email: value.target.value,
                                    name: signUpForm.name,
                                    password: signUpForm.password
                                    
                                })}
                                required />
                            <input
                                className="login_create-containerform-container_form--password"
                                type="password"
                                placeholder="Password"
                                value={signUpForm.password}
                                onChange={(value) => setsignUpForm({
                                   
                                    password: value.target.value,
                                    name: signUpForm.name,
                                    email: signUpForm.email
                                    }
                                )}
                                required />
                            <button
                                className="login_create-containerform-container_form--submit">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
                <div className={`login_login-container ${!login ? 'loginlogin-container--active' : 'login_login-container--inactive'}`}>
                    <div className="login_login-container_logo-container">
                        <img className="login_login-container_logo-container--image" src={logo} alt="Budwriter" />
                        Budwriter
                    </div>
                    <div className="login_login-container_main-container">
                        <div className="login_login-containermain-container_social-container">
                            <img className="login_login-containermain-container_social-container--google-icon" src={google} alt="" onClick={handleGoogleLogin}/>
                        </div>
                        <span className="login_login-container_main-container--info-text">or use email for your login</span>
                        <div className="login_login-containermain-container_form-container">
                            <form className="login_login-containermain-containerform-container_form" onSubmit={(e) => {
                                e.preventDefault();
                                signIn();
                            }}>
                                <input
                                    className="login_login-containermain-containerform-container_form--email"
                                    type="email"
                                    placeholder="Email"
                                    value={signInForm.email}
                                    onChange={(value) => {
                                        setsignInForm({
                                        email: value.target.value,
                                        password: signInForm.password
                                    }
                                    )}}
                                    required />
                                <input
                                    className="login_login-containermain-containerform-container_form--password"
                                    type="password"
                                    placeholder="Password"
                                    value={signInForm.password}
                                    onChange={(value) => setsignInForm({
        
                                            password: value.target.value,
                                            email: signInForm.email
                                        }
                                    )}
                                    required />
                                <button
                                    className="login_login-containermain-containerform-container_form--submit">
                                    Sign In
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={`login_hello-container ${!login ? 'loginhello-container--active' : 'login_hello-container--inactive'}`}>
                    <div className="login_welcome-backmain-container_text-container">
                        <span className="login_welcome-backmain-container_text-container--title">
                            Hello, stranger!
                            </span>
                        <span className="login_welcome-backmain-container_text-container--secondary">
                            Enter your personal details and start your own portfolio!
                        </span>
                    </div>
                    <div onClick={() => {
                        setlogin(!login);
                    }} className="login_welcome-backmain-container_button-container">
                        Sign Up
                    </div>
                </div>
            </div>
    );
    function signUp() {
        dispatch(registerIntiate(signUpForm.email,signUpForm.password,signUpForm.name));
    }

    function signIn() {
        dispatch(loginIntiate(signInForm.email,signInForm.password));
    }
    function handleGoogleLogin(){
        dispatch(googleLoginIntiate());
    }
}