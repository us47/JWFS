import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import PersistentDrawerLeft from '../components/PersistentDrawerLeft'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.Paper}
  ,
  layOutClass:{
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: rhythm(40),
    padding: `${rhythm(1.5)} ${rhythm(1/ 4)}`,
    //backgroundColor: 'transparent'
    backgroundColor: theme.palette.background.paper,
  }
});

class Layout extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const { classes } = this.props;
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          {title}
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }

    return (
      <div className={classes.layOutClass}>
        <PersistentDrawerLeft />
        {children}
      </div>
    )
  }
}
export default withStyles(styles)(Layout);
//export default Layout
