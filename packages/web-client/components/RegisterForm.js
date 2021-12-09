import { createStyleSheet, useTheme } from "@platzily-ui/styling";

import Button from "./RegisterButton";
import Input from './RegisterInput';
import LoginWithCredentials from './LoginWithCredentials';
import Router from 'next/router';
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
        if(!isValidName){
            console.log("nombre invalido");
        }

        if(isValidEmail && isValidPassword) {
            console.log(Buffer.from(email).toString('base64'))
            console.log(Buffer.from(password).toString('base64'))
            loginWithCredentials()
           
        } else {
            console.log('invalid credentials')
            setRegisterValidation({validationError: true, type: 'invalidCredentials'})
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

    function loginWithCredentials() {
        setRegisterValidation({loading: true, validationError: false, type: 'none'})
        
        sendLoginWithCredentials(email, password)
        .then((data) => {
            if(data.status == '401') {
                setRegisterValidation({loading: false, validationError: true, type: 'invalidLogin'})
            } else if (data.status == '200') {
                setRegisterValidation({loading: false, validationError: false, type: 'none'})
                Router.push(process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL)
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
                        required="true"
                        height="30px"
                        backgroundColor="#FFFFFF" 
                        color={theme.palette.text.light}
                        value={name}
                        type="text"
                        onChange={(e) => handleChange(e, setName)}
                    /> 
                    <Input 
                    placeholder="Surname"
                    required="true"
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
                        required="true"
                        type="email"
                        width="100%"
                        required="truex"
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
                        required="true"
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
                        registerValidation.validationError && registerValidation.type == "invalidCredentials" ? 
                        <p className="ivalidLogin">Please verify your name, </p> :                     
                        null
                    }
                    {
                        registerValidation.validationError && registerValidation.type == "invalidLogin" ? 
                        <p className="ivalidLogin">Invalid credentials</p> :                     
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