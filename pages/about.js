import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import theme from '../theme'

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#e0dcd4',
    paddingTop: '10vh',
    paddingBottom: '15vh',
    textAlign: 'center',
  }
}));

export default function About() {
  const styles = useStyles(theme);

  return (
    <Container maxWidth={false} className={styles.container} id='about-us'>
      <Container maxWidth="md">
        <Typography variant="h3">About Us</Typography>
        <br />
        <Typography variant="h6" className={styles.sectionText}>
          The United Condo Squash Club (UCSC) was founded in 1997
          and has been one of Singapore's most active and successful squash clubs.
          The Club is funded through membership fees and plays at public courts.
          Competitive playing members participate in the Singapore National Squash
          League annually. UCSC has won the "Club of the Year" title on several
          occasions and boasts of having contributed to providing Singapore with
          a significant number of top national players who have achieved
          notable regional success. There are plenty of opportunities for competitive squash
          at all levels. The Club also strives to create an environment where members
          are able to socialize.
          <br /><br />
          If you have competitive playing experience and are interested to become a UCSC
          member, please reach out to us on <a href="https://www.facebook.com/UCSCsingapore/">Facebook</a>.
          <br /><br />
          Be prepared for a warm friendly greeting!
        </Typography>
      </Container>
    </Container>
  )
}
