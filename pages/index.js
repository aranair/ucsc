import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import About from './about'
import Location from './location'
import Sponsors from './sponsors'
import Membership from './membership'
import Contact from './contact'
import UsefulLinks from './links'

const useStyles = makeStyles((theme) => ({
  whiteIconContainer: {
    justifyContent: 'center',
    display: 'flex',
  },
  whiteIcon: {
    fontSize: 40,
    color: '#000000',
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 700,
  },
  titleSlogan: {
    color: '#EA8500',
    fontWeight: 300,
    letterSpacing: 4,
    textDecoration: 'none',
    textAlign: 'center',
  },
  banner: {
    backgroundColor: 'transparent',
    height: '70vh',
  },

  bannerContainer: {
    paddingTop: 200,
    background: 'linear-gradient(#002846, rgba(0,40,70,0.7)), url(/banner.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },

  '@media (max-width:600px)': {
    bannerContainer: {
      background: 'none',
      backgroundColor: '#002846',
      paddingTop: 100,
    },
    titleSlogan: {
      fontSize: '1em',
    },
  },
}));

export default function Home() {
  const styles = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth={false} className={styles.bannerContainer}>
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
      </Container>

      <Sponsors />
      <About />
      <Location />
      <Membership />
      <Contact />
      <UsefulLinks />
    </React.Fragment>
  )
}
