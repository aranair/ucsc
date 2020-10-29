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
  sponsorListContainer: {
    display: 'flex',
    padding: 15,
    alignItems: 'center',
  },
}));

export default function Sponsors() {
  const styles = useStyles();
  return (
    <Grid container spacing={3} justify='center' className={styles.sponsorListContainer} id='sponsors'>
      <Grid item xs={12} md={3} alignItems='center'>
        <Typography variant="h6"> Proudly Sponsored By: </Typography>
      </Grid>
      <Grid item md={3}>
        <img height="130" src="http://ucsc.sg/assets/orchard-physio-ff323ff6e150079fa9436331393d3501985b669c822df31415ac867e381865b8.png" />
      </Grid>
      <Grid item md={3}>
        <img height="130" src="http://ucsc.sg/assets/indusnri-6d393085ff50d9a48a8587f9c9bf43c1f0ccee3ca0d71161868d8c81c5eb9b89.png" />
      </Grid>
      <Grid item md={3}>
        <img height="130" src="http://ucsc.sg/assets/gene-ethics-d0171aed655fe6eec2c61c6f6bb9ffb535d0da000ea2af05c8410a34d83b0b1f.png" />
      </Grid>
    </Grid>
  )
}
