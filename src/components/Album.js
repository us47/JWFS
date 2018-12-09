import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper'
import ComplexGrid from '../components/ComplexGrid'
import TitlebarGridList from '../components/TitlebarGridList'
import MediaControlCard from '../components/MediaControlCard'
import SingleLineGridList from '../components/SingleLineGridList'
import AlignItemsList from '../components/AlignItemsList'


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    //marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    //backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 0}px 0 ${theme.spacing.unit * 0}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 0,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 0,
    marginRight: theme.spacing.unit * 0,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [1, 2, 3, 4];

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <ComplexGrid /> 
          {/*<SwipeableTextMobileStepper />*/}
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */} 
          <SwipeableTextMobileStepper />
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1538032746644-0212e812a9e7"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <SingleLineGridList/>
            {/*<MediaControlCard/>*/}
        </div>
        <TitlebarGridList />
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);