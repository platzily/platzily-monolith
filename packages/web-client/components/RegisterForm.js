import { createStyleSheet, useTheme } from "@platzily-ui/styling";
import { useEffect, useState } from "react";

import Button from "../components/LoginButton";
import Input from '../components/LoginInput';

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
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [name, setName ] = useState();  
    const [lastName, setLastName ] = useState();  

    // useEffect(() => {
    //     const form = document.querySelector('form')
    //     console.log(form)

    //     form.addEventListener('submit', function(e) { 
    //         e.preventDefault()
    //         console.log(e) 
    //     })

    // }, [])
     // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || lastName==='') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
  
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
   // Showing error message if error is true
   const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 

    return (
      <div className="form"> 
      <form>    
      <fieldset className="registerForm-container">
   
      <h1 className="form-title">Register</h1>
  
     <Input 
         placeholder="Name" 
         width="100%"
         height="30px"
         backgroundColor="#FFFFFF" 
         color={theme.palette.text.light}
         onChange={handleName}
          value={name}
     />
     <Input 
     placeholder="Surname" 
     width="100%"
     height="30px"
     backgroundColor="#FFFFFF" 
     color={theme.palette.text.light}
     onChange={handleLastName}
     value={lastName}
 />
 <Input 
 placeholder="Email" 
 width="100%"
 height="30px"
 backgroundColor="#FFFFFF" 
 color={theme.palette.text.light}
 onChange={handleEmail}
 value={email}
 type="email"
/>
     <Input 
         placeholder="Password" 
         width="100%"
         height="30px"
         backgroundColor="#FFFFFF"
         color={theme.palette.text.light} 
         onChange={handlePassword}
         value={password}
         type="password"
         
     />
     <Button 
     onClick={handleSubmit} 
         text="Register" 
         width="100px" 
         height="30px"
         align="flex-end" 
         marginTop="5px"
         marginBottom="0px"
         radius="5px"
         backgroundColor={theme.palette.tertiary.main}
         color={theme.palette.text.main}
         type="submit"></Button>
          
<div className="messages">
{errorMessage()}
{successMessage()}
</div>
          
      </fieldset>  

      </form> 

                     
                      <div className="thematic-break">
                        <p>or</p>
                     </div>
                  
                    <form className={`${classes.form} ${props.className} `} method="post">

                    <fieldset className="normalLogin-container">
              
               
                                   <h1 className="form-title">Login</h1>
                                        <Input 
                                          placeholder="Email" 
                                          width="100%"
                                          height="30px"
                                          backgroundColor="#FFFFFF" 
                                          color={theme.palette.text.light}
                                          />
                                      <Input 
                                          placeholder="Password" 
                                          width="100%"
                                          height="30px"
                                          backgroundColor="#FFFFFF"
                                          color={theme.palette.text.light}
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
                                          </fieldset>   
                                          </form>
                                   

            <style jsx>{`
            .thematic-break {
              grid-area: break; 
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 40px;
             }

                .form {
                    display: grid;
                    grid-template-columns: auto;
                    grid-template-rows: repeat(4, auto);
                    grid-template-areas: "normalLogin" "break" "registerForm" "forgotPassword";
                }

                .form-title {
                    width: 100%;
                    margin-bottom: 5px;
                    text-align: center;
                    font-weight: 600;
                    font-size: 12px;
                }

                .normalLogin-container {
                    grid-area: normalLogin;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    width: 257px;
                    border: none;
                }

                .thematic-break {
                    grid-area: break; 
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 40px;
                    borde:1px;
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


                .registerForm-container {
                    grid-area: registerForm;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    width: 257px;
                    border: none;                }
             
                    .registerForm-container  > a {
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

                .forgotPassword-text > a{
                    text-decoration: none;
                }
              
                ::placeholder{
                    color: #9CA5BF;
                        }

                @media (min-width: 800px) {

                    .registerForm-container  > button    {
                        width: 190px;
                    }

                    .thematic-break {
                        display: none;
                    
                    }

                    .form {
                        grid-template-columns: 1fr 5% 1fr;
                        grid-template-rows: auto auto auto;
                        grid-template-areas:  "registerForm normalLogin"  
                        ".  forgotPassword";
                        
                        height: 293px;
                        margin-top: 30px;
                    }

                    .form-title {
                        margin-bottom: 20px;
                        text-align: left;
                        
                    }

                    .normalLogin-container {
                        align-self: start;
                        height: 100%;
                        padding: 0 140px 50px 50px;
                    }

                    .registerForm-container {
                        padding: 30px 50px 0px 120px;
                        align-self: inherit;
                    }

                    .forgotPassword-container {
                        border-left: 3px solid #DDD
                    }

                    .forgotPassword-text {
                        padding: 0 140px 15px 50px;
                    }
                  }
            `}</style>
            </div>
        );
}

export default RegisterForm