import { createStyleSheet } from "@platzily-ui/styling";


const useStyleSheet = createStyleSheet((theme, props) => {
    console.log(theme)

    return {
        footer: {
            width: '100%',
            height: '5vh'
        },

        paragraph: {
            color: theme.palette.text.light,
            fontSize: '12px',
            textAlign: 'center',
            fontFamily: props.fontType || 'Inter, sans-serif',
        }

    }

}, { key: 'LoginFooter' });

function LoginFooter(props) {
    const { classes } = useStyleSheet(props);

    return (
        <>
            <footer className={`${props.className} ${classes.footer}`}>
                <p className={classes.paragraph}>© Platzily 2021. All Rights Reserved.</p>
            </footer>
            <style jsx>{`
                
                .footer{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 50px;
                }

                .footer > p {
                    margin: 0;
                
                }

                @media (min-height: 500px) and (min-width: 800px) {
                    .footer {
                        height: 7vh;
                    }
                }

                @media (min-width: 800px) {
                    .footer{
                        justify-content: end;
                    }
                    .footer > p {
                        margin-right: 5%;                        
                    }

                }`}
            </style>
        </>


    )



};


export default LoginFooter