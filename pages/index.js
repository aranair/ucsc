import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import About from './about'
import Location from './location'
import Sponsors from './sponsors'
import Membership from './membership'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  whiteIconContainer: {
    justifyContent: 'center',
    display: 'flex',
  },
  whiteIcon: {
    fontSize: 40,
    color: 'white',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 700,
  },
  titleSlogan: {
    color: '#EA8500',
    fontWeight: 300,
    letterSpacing: '4px',
    textDecoration: 'none',
    textAlign: 'center',
  },
  banner: {
    backgroundColor: 'transparent',
    height: '70vh',
  },
  bannerContainer: {
    paddingTop: '200px',
    background: 'linear-gradient(#002846, rgba(0,40,70,0.7)), url(/banner.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
}));

export default function Home() {
  const styles = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={styles.bannerContainer}>
          <div className={styles.banner}>
            <Typography variant="h1" className={styles.title}>
              United Condo Squash Club
            </Typography>
            <br/>
            <Typography variant="h6" className={styles.titleSlogan}>
              LIVE AND BREATHE SQUASH
            </Typography>
          </div>
          <div className={styles.whiteIconContainer}>
            <ExpandMoreIcon className={styles.whiteIcon}/>
          </div>
        </div>

        <Sponsors />
        <About />
        <Location />
        <Membership />
      </main>
    </React.Fragment>
  )
}
