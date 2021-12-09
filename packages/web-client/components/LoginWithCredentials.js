import { createStyleSheet, useTheme } from "@platzily-ui/styling";

import Button from "./LoginButton";
import Input from './LoginInput';
import Router from 'next/router';
import { sendLoginWithCredentials } from "../utils/sendLoginCredentials";
import { useState } from "react";

const useStyleSheet = createStyleSheet(( theme, props ) => {

    return {
        form: {
            color: theme.palette.text.light,
            textAlign: 'center'
        }
        
    };


}, { key: 'LoginWithCredentials' });




function LoginWithCredentials(props) {
    const { classes } = useStyleSheet(props);
    const theme = useTheme();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loginValidation, setLoginValidation ] = useState({loading: false, validationError: false, type: 'none'});
    
    function handleChange(event, setData) {
        setLoginValidation({loading: false, validationError: false, type: 'none'})
        setData(event.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault();
        let isValidEmail = validateEmail(email)
        let isValidPassword = validatePassword(password)
        if(isValidEmail && isValidPassword) {
            console.log(Buffer.from(email).toString('base64'))
            console.log(Buffer.from(password).toString('base64'))
            loginWithCredentials()
           
        } else {
            console.log('invalid credentials')
            setLoginValidation({validationError: true, type: 'invalidCredentials'})
        }
    };

    function validateEmail(email) {
        return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    
    function validatePassword(password) {
        return password.length > 5
    };

    function loginWithCredentials() {
        setLoginValidation({loading: true, validationError: false, type: 'none'})
        
        sendLoginWithCredentials(email, password)
        .then((data) => {
            if(data.status == '401') {
                setLoginValidation({loading: false, validationError: true, type: 'invalidLogin'})
            } else if (data.status == '200') {
                setLoginValidation({loading: false, validationError: false, type: 'none'})
                Router.push(process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL)
            }
        })

    };

    return (
        <>
            <form className="loginWithCredentials-form" method="post" onSubmit={handleSubmit}>
                <h1 className="form-title">Login</h1>
                <Input 
                    placeholder="Email" 
                    width="100%"
                    height="30px"
                    backgroundColor="#FFFFFF" 
                    color={theme.palette.text.light}
                    value={email}
                    onChange={(e) => handleChange(e, setEmail)}
                />            
                <Input 
                    placeholder="Password" 
                    width="100%"
                    height="30px"
                    backgroundColor="#FFFFFF"
                    color={theme.palette.text.light}
                    value={password}
                    onChange={(e) => handleChange(e, setPassword)}
                    type="password"
                    
                />
                <Button 
                    text="Login" 
                    width="100px" 
                    height="30px"
                    align="flex-end" 
                    marginTop="5px"
                    marginBottom="0px"
                    radius="5px"
                    backgroundColor={theme.palette.tertiary.main}
                    color={theme.palette.text.main}
                    type="submit"

                />
                
                {   
                    loginValidation.loading ? 
                    <div className="loader"></div> : 
                    null
                }
                {
                    loginValidation.validationError && loginValidation.type == "invalidCredentials" ? 
                    <p className="ivalidLogin">Please verify your credentials</p> :                     
                    null
                }
                {
                    loginValidation.validationError && loginValidation.type == "invalidLogin" ? 
                    <p className="ivalidLogin">Invalid credentials</p> :                     
                    null
                }
                <div className="forgotPassword-container"> 
                <p className="forgotPassword-text">You can not access your account? <br/><a className="forgotPassword-recoverLink" href="/"> Recover account </a></p>
            </div>
            </form>
                   
    
            <style jsx>{`
           
                .form-title {
                    width: 100%;
                    margin-bottom: 5px;
                    text-align: center;
                    font-weight: 600;
                    font-family: 'Poppins', sans-serif;

                    font-size: 12px;
                }

                .loginWithCredentials-form {
                    grid-area: normalLogin;  
                    position: relative;                  
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    flex-direction: column;
                    width: 257px;
                    border: none;
                }

                .ivalidLogin {
                    position: relative;
                    margin: 10px 0 0 0;
                    align-self: center;
                    color: red;
                }
                
                .loader {
                    position: relative;
                    margin-left: 11px;
                    border: 8px solid #f3f3f3;
                    border-top: 8px solid #3498db;
                    border-radius: 50%;
                    width: 15px;
                    height: 15px;
                    -webkit-animation: spin 2s linear infinite;
                    animation: spin 2s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
               


                @media (min-width: 800px) {

                    .form-title {
                        margin-bottom: 20px;
                        text-align: left;
                        
                    }

                    .loginWithCredentials-form {
                        align-self: start;
                        height: 100%;
                        padding: 0 140px 50px 50px;
                        border:none;
                    }

                    .ivalidLogin {
                        position: absolute;
                        bottom: 50px;
                        margin: 0;
                        
                    }
                    .loader {
                        position: absolute;
                        bottom: 40px;
                    }

                }

            `}</style>

        </>


    );
};

export default LoginWithCredentials