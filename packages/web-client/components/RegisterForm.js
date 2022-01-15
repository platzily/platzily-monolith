import { createStyleSheet, useTheme } from "@platzily-ui/styling";

import Button from "./RegisterButton";
import Input from './RegisterInput';
import LoginWithCredentials  from "./LoginWithCredentials";
import Router from 'next/router';
import { sendDataToRegister } from "../utils/sendDataToRegister";
import { useState } from "react";

const useStyleSheet = createStyleSheet(( theme, props ) => {

    return {
        form: {
            color: theme.palette.text.light,
            textAlign: 'center'
        }
        
    };


}, { key: 'RegisterForm' });




function RegisterForm(props) {
    const { classes } = useStyleSheet(props);
    const theme = useTheme();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ registerValidation, setRegisterValidation ] = useState({loading: false, validationError: false, type: 'none'});
    
    function handleChange(event, setData) {
        setRegisterValidation({loading: false, validationError: false, type: 'none'})
        setData(event.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault();
        let isValidName = validateName(name);
        let isValidLastName = validateName(lastName);
        let isValidEmail = validateEmail(email)
        let isValidPassword = validatePassword(password)
         if(!isValidName || !isValidLastName){
            console.log("Please verify your name and/or your surname");
            setRegisterValidation({validationError: true, type: 'invalidNameOrLastName'})
        }else 
        if(!isValidPassword){
            setRegisterValidation({loading: false, validationError: true, type: 'invalidOrEmptyPassword'})

        }else 
        if(isValidEmail){
          const validation = email==password?setRegisterValidation({validationError: true, type: 'samePassword&Email'}):password==name?setRegisterValidation({validationError: true, type: 'samePassword&Email'}):password==lastName?setRegisterValidation({validationError: true, type: 'samePassword&Email'}):registerUser();


console.log(Buffer.from(email).toString('base64'));
            console.log(Buffer.from(password).toString('base64'));
           
        } else {
            console.log('invalid email');
            setRegisterValidation({validationError: true, type: 'invalidEmail'})
        }
    };

    function validateName(name){
      return name.length>0 && !/[^a-zA-Z -]/.test(name)
    }
 
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

    function registerUser() {
        setRegisterValidation({loading: true, validationError: false, type: 'none'})
        
        sendDataToRegister(name, lastName, email, password)
        .then((data) => {
            if(data.status == '401') {
                setRegisterValidation({loading: false, validationError: true, type: ''})
            } else if (data.status == '200') {
                setRegisterValidation({loading: false, validationError: false, type: 'none'})
                Router.push('login')
            }
        })

    };
    

    return (
        <>
            <div className={`${classes.form} ${props.className} form`}>
                    <LoginWithCredentials/>
                    <div className="thematic-break">
                         <hr/>
                    </div>
                     <form className="registerUser-form" method="post" onSubmit={handleSubmit}>
                    <h1 className="form-title">Register</h1>
                    <Input 
                        placeholder="Name" 
                        width="100%"
                        //required="true"
                        height="30px"
                        backgroundColor="#FFFFFF" 
                        color={theme.palette.text.light}
                        value={name}
                        type="text"
                        onChange={(e) => handleChange(e, setName)}
                    /> 
                    <Input 
                        placeholder="Surname"
                        // required="true"
                        width="100%"
                        type="text"
                        height="30px"
                        backgroundColor="#FFFFFF" 
                        color={theme.palette.text.light}
                        value={lastName}
                        onChange={(e) => handleChange(e, setLastName)}
                     /> 
                    <Input 
                        placeholder="Email" 
                        type="email"
                        width="100%"
                        // required="truex"
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
                        type="password"
                        // required="true"
                        onChange={(e) => handleChange(e, setPassword)}
                        type="password"
                        
                    />
                    <Button 
                        text="Register" 
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
                        registerValidation.loading ? 
                        <div className="loader"></div> : 
                        null
                    }
                    {
                        registerValidation.validationError && registerValidation.type == "invalidEmail" ? 
                        <p className="invalidLogin">Enter a valid email or try another</p> :                     
                        null
                    }
                    {
                        registerValidation.validationError && registerValidation.type == "invalidNameOrLastName" ? 
                        <p className="invalidLogin">Please verify your name or lastname</p> :                     
                        null
                    }
                    {
                        registerValidation.validationError && registerValidation.type == "invalidOrEmptyPassword" ? 
                        <p className="invalidLogin">Please verify password field (min 5 characters) </p> :                     
                        null
                    }
                    {
                        registerValidation.validationError && registerValidation.type == "emailIsNotUnique" ? 
                        <p className="invalidLogin">There is already an account with this email, try another email</p> :                     
                        null
                    }
                   

                    {
                        registerValidation.validationError && registerValidation.type == "invalidLogin" ? 
                        <p className="invalidLogin">Invalid credentials</p> :                     
                        null
                    }
                </form>
                    
            </div>

            <style jsx>{`

                .form {
                    display: grid;
                    grid-template-columns: auto;
                    grid-template-rows: repeat(3, auto);
                    grid-template-areas: "normalLogin" "break" "socialLogin" ;
                }

                .thematic-break {
                    grid-area: break; 
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 40px;
                }

                .thematic-break > p {
                    position: absolute;
                    left: 45%;
                    z-index: 10;
                    width: 35px;
                    height: 35%;
                    background-color: white;
                }

                .thematic-break > hr {
                    position: absolute;
                    z-index: 5;
                    width: 100%;
                    height: 1px;
                    border: none;
                    background-color: #DDDDDD;
                }


                .registerUser-form {
                    width: 257px;
                    grid-area: socialLogin;                    
                    display: flex;
                    align-items: start;
                    justify-content: start;
                    flex-direction: column;
                    border: none;
                }
             
                .registerUser-form > a {
                    margin: 5px 0;
                    font-weight: 700;
                }

                .invalidLogin {
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
               



                .form-title{
                    color: #7E95A5;
                    font-family: 'Poppins', sans-serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 12px;
                }
                @media (min-width: 800px) {

                    .registerUser-form > button    {
                        font-family: 'Poppins', sans-serif;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 18px;
                        color: #19213C;
                        width: 190px;
                    }
                    .form-title {
                        margin-bottom: 20px;
                        text-align: left;
                        font-size:12px;
                        
                    }
                    .thematic-break {
                        display: none;
                    
                    }

                    .form {
                        grid-template-columns: 1fr 1.25fr;
                        grid-template-rows: auto auto;
                        grid-template-areas:  "socialLogin normalLogin"  
                        ".  forgotPassword";
                        
                        height: 293px;
                        margin-top: 30px;
                    }

                    .registerUser-form {
                        padding: 0px 50px 0px 120px;
                        align-self: start;
                        border-right: 1px solid #DDD;
                    }

                    .forgotPassword-text {
                        padding: 0 140px 15px 50px;
                    }

                }
                
            `}</style>

        </>


    );
};

export default RegisterForm