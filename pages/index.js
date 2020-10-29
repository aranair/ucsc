import Menu from './menu'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import classes from '../styles/Home.module.css'

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
  }
}));

export default function Home() {
  const styles = useStyles();
  return (
    <Container maxWidth="false">
      <Menu />
      <main>
        <div className={classes.bannerContainer}>
          <div className={classes.banner}>
            <Typography variant="h1" className={styles.title}>
              United Condo Squash Club
            </Typography>
            <br/>
            <Typography variant="h6" className={classes.titleSlogan}>
              LIVE AND BREATHE SQUASH
            </Typography>
          </div>
          <Container maxWidth="xl" className={styles.whiteIconContainer}>
            <ExpandMoreIcon className={styles.whiteIcon}/>
          </Container>
        </div>

        <Sponsors />
        <About />
        <Location />
        <Membership />
      </main>

      <footer className={classes.footer}>
        <a href="https://aranair.github.io" target="_blank" rel="noopener noreferrer">
          Copyright © 2020 Boa Ho Man. All rights reserved.
        </a>
      </footer>
    </Container>
  )
}
