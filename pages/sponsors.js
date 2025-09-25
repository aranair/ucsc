import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  sponsorListContainer: {
    display: 'flex',
    padding: 15,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: "center"
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
