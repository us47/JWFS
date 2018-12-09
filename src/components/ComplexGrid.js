import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 'auto',
    //maxWidth: 800,
    //maxHeight:200,
    padding:0,
  },
  image: {
    maxWidth: 400,
    maxHeight: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function ComplexGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} square elevation={12}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={2}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="h6" variant="h2" align="Center">
                Jungle Warfare School
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="h2" variant="h6" align="Center">
                Neterhat,Jharkhand
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80" />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);