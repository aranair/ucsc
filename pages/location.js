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

const useStyles = makeStyles((theme) => ({
  homeCourtsContainer: {
    display: 'flex',
    paddingTop: '15vh',
    paddingBottom: '20vh',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid #eaeaea',
    textAlign: 'center',
    backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url('http://ucsc.sg/assets/yck-772e97605dc4628d583ec400b0e25d6ff1b9ba9a656c073dc904a3a16cf6f9b8.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: 580,
    marginBottom: 0,
  },
  cards: {
    marginBottom: '1em',
    paddingLeft: '3em',
    paddingRight: '3em',
    textDecoration: 'none',
  }
}));

export default function Location() {
  const styles = useStyles();
  return (
    <Grid spacing={3} className={styles.homeCourtsContainer} id='location'>
      <Grid container spacing={3} justify='center' item xs={12} md={6} className={styles.cards}>
        <Grid item md={12}>
          <Typography variant="h4">Home Courts</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h6">
            Members are invited to come down on any of the social squash days.
            Those who are looking to play competitively are also encouraged to
            represent the club in the Singapore National Squash League.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify='center' item xs={12} md={6} className={styles.cards}>
        <Grid item md={12}>
          <Typography variant="h4">Methodist Girls' School</Typography>
          <Typography variant='subtitle'>11 Blackmore Dr, Singapore 599986</Typography>
        </Grid>
        <Grid item md={6}>
          <Container>
            <Typography variant="h6">
              Thursdays: 7pm to 10pm
              <br />
              Saturdays: 12pm to 4pm
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  )
}
