import { useEffect, useState } from "react";
import { createStyleSheet, useTheme } from "@platzily-ui/styling";
import Button from "../components/LoginButton";
import LoginWithCredentials from './LoginWithCredentials';
import googleIcon from '../public/googleIcon.png';
import twitterIcon from '../public/twitterIcon.png';


const useStyleSheet = createStyleSheet(( theme, props ) => {

    return {
        form: {
            color: theme.palette.text.light,
            textAlign: 'center'
        }
        
    };


}, { key: 'LoginForm' });




function LoginForm(props) {
    const { classes } = useStyleSheet(props);
     
    

    return (
        <>
            <div className={`${classes.form} ${props.className} form`}>
                    <LoginWithCredentials/>
                    <div className="thematic-break">
                        <p>or</p>
                        <hr/>
                    </div>
                    <fieldset className="socialLogin-container">
                        <Button 
                            src={twitterIcon}
                            className="twitterButton"
                            text="Login with twitter"
                            marginTop="5px"
                            marginBottom="5px"
                            marginLeft="10px"
                            radius="3px"
                            backgroundColor="#00ACEE"
                            color="#FFFFFF"
                            weight="50"
                            type="button"
                        />
                        <Button 
                            src={googleIcon}
                            className="googleButton"
                            text="Login with Google"
                            marginTop="10px"
                            marginBottom="10px"
                            marginLeft="10px"
                            radius="3px"
                            backgroundColor="#D33D27"
                            color="#FFFFFF"
                            weight="50"
                            type="button"
                        />
                        <a>Register with email</a>
                    </fieldset>
                    <fieldset className="forgotPassword-container"> 
                        <p className="forgotPassword-text">You can not access your account? <br/><a className="forgotPassword-recoverLink" href="/"> Recover account </a></p>
                    </fieldset>
            </div>

            <style jsx>{`

                .form {
                    display: grid;
                    grid-template-columns: auto;
                    grid-template-rows: repeat(4, auto);
                    grid-template-areas: "normalLogin" "break" "socialLogin" "forgotPassword";
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


                .socialLogin-container {
                    grid-area: socialLogin;                    
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    border: none;
                }
             
                .socialLogin-container > a {
                    margin: 5px 0;
                    font-weight: 700;
                }

                .forgotPassword-container {
                    grid-area: forgotPassword;
                    border: none;
                }
                
                .forgotPassword-text {
                    margin: 10px 0;
                }

                .forgotPassword-recoverLink{
                    text-decoration: none;
                }
                .forgotPassword-recoverLink:hover {
                    cursor: pointer;
                }
              


                @media (min-width: 800px) {

                    .socialLogin-container > button    {
                        width: 190px;
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

                    .socialLogin-container {
                        padding: 30px 50px 0px 120px;
                        align-self: inherit;
                    }

                    .forgotPassword-text {
                        padding: 0 140px 15px 50px;
                    }

                }
                
            `}</style>

        </>


    );
};

export default LoginForm