import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  homeCourtsContainer: {
    display: 'flex',
    paddingTop: '15vh',
    paddingBottom: '20vh',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid #eaeaea',
    textAlign: 'center',
    backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url('yck.jpg')`,
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
    <Grid container className={styles.homeCourtsContainer} id='location'>
      <Grid container spacing={2} justifyContent="center" item xs={12} md={6} className={styles.cards}>
        <Grid item md={12}>
          <Typography variant="h4">Home Courts</Typography>
        </Grid>
        <Grid item md={6} margin='auto'>
          <Typography variant="h6">
            Members are invited to come down on any of the social squash days.
            Those who are looking to play competitively are also encouraged to
            represent the club in the Singapore National Squash League.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} justify='center' item xs={12} md={6} className={styles.cards}>
        <Grid item md={12}>
          <Typography variant="h4">Yio Chu Kang Squash Centre</Typography>
          <Typography variant='body1'>200 Ang Mo Kio Avenue 9 Singapore 569770</Typography>
        </Grid>
        <Grid item md={8} margin='auto'>
          <Container>
            <Typography variant="h6">
              Mondays and Wednesdays: 7pm to 10pm
              <br />
              Saturdays: 12pm to 3pm
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  )
}
