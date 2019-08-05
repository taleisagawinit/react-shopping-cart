import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>Shop </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">Contact Us / Events / FAQ / About </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}