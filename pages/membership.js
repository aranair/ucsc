import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#002846',
    color: '#fff',
    paddingTop: '10vh',
    paddingBottom: '15vh',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  subHeading: {
    color: '#EA8500',
  }
}));

export default function Home() {
  const styles = useStyles();
  return (
    <Container maxWidth={false} className={styles.container} id='membership'>
      <Container maxWidth="lg">
        <Grid container spacing={3} justify='center'>
          <Grid item xs={12}>
            <Typography variant="h4">Join Us!</Typography>
          </Grid>

          <Grid container item spacing={3} xs={12}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" className={styles.subHeading}>Annual Membership</Typography>
              <Typography variant="h6">
                All court fees and registration fees are included in the annual
                membership fee of $125 for Students and $250 for Adults.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" className={styles.subHeading}>Guest Pass</Typography>
              <Typography variant="h6">
                Non-members are welcome to join us on any of the social squash days
                at a fee of $20. Do drop us an email to let us know beforehand so
                that we can make the necessary arrangements.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" className={styles.subHeading}>Trials</Typography>
              <Typography variant="h6">
                If you have prior squash experience and are interested in joining us,
                feel free to contact us and we will arrange a trial session for you!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}
