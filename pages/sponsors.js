import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  sponsorListContainer: {
    display: 'flex',
    padding: 15,
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export default function Sponsors() {
  const styles = useStyles();

  return (
    <Grid container spacing={3} justify='center' className={styles.sponsorListContainer} id='sponsors'>
      <Grid item xs={12} md>
        <Typography variant="h6"> Proudly Sponsored By: </Typography>
      </Grid>
      <Grid item md>
        <img height="130" src="/orchardphysio.png" />
      </Grid>
      <Grid item md>
        <img height="130" src="indusnri.png" />
      </Grid>
      <Grid item md>
        <img height="130" src="geneethics.png" />
      </Grid>
    </Grid>
  )
}
