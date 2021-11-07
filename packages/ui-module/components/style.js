import { createStyleSheet } from '@platzily-ui/styling';

const useStyleSheet = createStyleSheet((theme, props) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center'
    },
    box: {
      backgroundColor: props.color || theme.palette.primary.main,
      width: 200,
      height: 200
    }
  };
}, { key: 'StyledBox' });

export default function StyledBox(props) {
  const { classes } = useStyleSheet(props);

  return (
    <div className={classes.root}>
      <div className={classes.box}/>
    </div>
  );
}