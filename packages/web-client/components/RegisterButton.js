import Image from 'next/image';
import { createStyleSheet } from "@platzily-ui/styling";

const useStyleSheet = createStyleSheet(( theme, props ) => {

    return {
        input: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            alignSelf: props.align || 'flex-center',
            width: props.width || 175,
            height: props.height || 30,
            margin: "10px 0px 10px 0px",
            marginTop: props.marginTop,
            marginBottom: props.marginBottom,
            border: 'none',
            borderColor: props.backgroundColor || theme.palette.secondary.main,
            borderRadius: props.radius,
            color: props.color || theme.palette.text.light,
            fontWeight: props.weight || 700,
            backgroundColor:  props.backgroundColor || theme.palette.secondary.main
        },

        image: {
            width: 15,
            height: 15,
            marginLeft: 10,
            marginRight: 10
        },

        text: {
             marginLeft: props.marginLeft || 0,
        }
    };

}, { key: 'RegisterButton'})



function RegisterButton(props) {
    const { classes } = useStyleSheet(props);

    return (
        <>
            <button className={`${props.className} ${classes.input}`} onClick={props.onClick} type={props.type}> 
                {props.src ? <Image className={classes.image} src={props.src} width={props.width} height={props.height} /> : ''}
                <p className={classes.text}>{props.text}</p>
            </button>
            <style jsx>{` 

                button:hover {
                    cursor: pointer;
                }

            `}</style>
        </>

    )

};

export default RegisterButton