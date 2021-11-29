import React from "react";
import Head from 'next/head'
import { useTheme } from "@platzily-ui/styling";


import Logo from "../../components/LoginLogo";
import Form from "../../components/LoginForm";
import Footer from "../../components/LoginFooter";



const Login = () => {
    const theme = useTheme();

    return (
        <>
            <Head>
                <title>Platzily - Login</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap" rel="stylesheet" />
            </Head>
            <main className="main">
                <div className="main-container"> 
                    <Logo />
                    <section className="main-title"> 
                        <hr/>
                        <h1>Please enter your email and password to login</h1>
                    </section>
                    <Form />
                </div>
            </main>
            <Footer className="footer" />



            <style jsx>{`
                .main {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    padding: 35px 20px;
                    background-image: url('./LoginMovileBackground.png');
                    color:${theme.palette.text.light};
                    box-sizing: border-box;
                    font-size: 12px;
                    text-align: center;                    
                    font-family: 'Inter', sans-serif;

                }

                .main-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    width: 100%;
                    height: 540px;
                    padding: 20px 30px 0 30px;
                    border-radius: 5px;
                    color:${theme.palette.text.light};
                    background-color: white;
                    box-sizing: border-box;
                    font-size: 12px;
                    text-align: center;

                }

                .main-title {
                    width: 100%;
                }

                .main-title > h1 {
                    font-weight: 300;
                    font-size: 12px;
                }

                .main-title > hr {
                    height: 1px;
                    border: none;
                    background-color: #DDDDDD;
                }


                @media (min-height: 500px) and (min-width: 800px) {
                    .main {
                        height: 93vh;
                    }
                }
                @media (min-height: 650px) and (min-width: 800px) {
                    .footer {
                        height: 95vh;
                    }
                }

                @media (min-width: 400px) {                
                    .main-container {
                        padding: 0px 15% 0 15;
                    }
                }
                
                @media (min-width: 450px) { 
                    
                    .main {
                        padding: 8%;
                    }
                    .main-container {
                        padding: 0px 20% 0 20%;
                        
                    }
                }

                @media (min-width: 500px) {                
                    .main-container {
                        padding: 0px 23% 0 23%;
                    }
                }

                @media (min-width: 550px) {  
                    .main {
                        padding: 8% 13%;
                    }              
                    .main-container {
                        padding: 0px 18% 0 18%;
                    }
                }

                @media (min-width: 600px) { 
                    .main {
                        padding: 5% 13%;
                    }                  
                    .main-container {
                        padding: 0px 22% 0 22%;
                    }
                }

                @media (min-width: 700px) {                
                    .main-container {
                        padding: 0px 15% 0 15%;
                    }
                }

                @media (min-width: 800px) {    
                    .main {
                        padding: 0px;
                    }                 
                    .main-container {
                        width: 806px;
                        height: 500px;
                        padding: 0px;
                    }
                    .main-title {
                        width: fit-content;

                    }
                }

          


            `}</style>
            <style global jsx>{`
                body {
                    margin: 0;
                    box-sizing: content-box;
                }
            `}</style>
        </>
    )
}


export default Login