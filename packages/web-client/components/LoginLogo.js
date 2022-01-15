import Image from 'next/image';
import { createStyleSheet } from "@platzily-ui/styling";
import logo from '../public/logo.png';

const useStyleSheet = createStyleSheet((theme, props) => {

    return {
        root: {
            display: 'flex',
            justifyContent: 'center'
        }
    }

}, { key: 'LoginLogo'});


function LoginLogo(props){
    const { classes } = useStyleSheet(props);

    return (
        <>
            <figure>
                <Image className="image" src={logo} layout="responsive"/>
            </figure>
            <style jsx>{`

                figure {
                    width: 145px;
                    height: 30px;
                }

                @media (min-width: 800px) { 
                    figure {
                        width: 182px;
                        height: 40px;
                    }

                }
            
            `}</style>
        </>
    );
};

export default LoginLogo