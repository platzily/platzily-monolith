import { createStyleSheet } from "@platzily-ui/styling";

const useStyleSheet = createStyleSheet((theme, props) => {

    return {
        
        input: {
            width: props.width || 260,
            height: props.height || 30,
            marginTop: 5,
            marginBottom: 10,
            padding: '0 15px',
            // borderWidth: props.borderWidth || '1px',
            // borderColor: props.borderColor || theme.palette.secondary.main,
            backgroundColor:  props.backgroundColor || theme.palette.text.light,
            color: props.color || theme.palette.text.light,
            border: '1px solid #DDD',
            borderRadius: '5px',
            boxSizing: 'border-box'
        }


    }

}, { key: 'LoginInput' });


function LoginInput(props) {
    const { classes } = useStyleSheet(props)

    return (
        <>
            <input className={classes.input} placeholder={props.placeholder} value={props.value} required={ props.required } onChange={props.onChange} type={props.type}/>
            <style jsx>{`
                input::placeholder {
                    color: ${props.color};
                }
            `}</style>
        </>
    )



};


export default LoginInput