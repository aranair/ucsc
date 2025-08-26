import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    paddingTop: '15vh',
    paddingBottom: '20vh',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid #eaeaea',
    textAlign: 'center',
    minHeight: 580,
    marginBottom: 0,
  },
}));

export default function Contact() {
  const styles = useStyles();

  return (
    <Container maxWidth={false} className={styles.container} id='contact-us'>
      <Container maxWidth="md">
        <Typography variant="h3">Contact Us</Typography>
        <br />
        <Typography variant="h6" className={styles.sectionText}>
          Please look for us on <a target="_blank" href="https://www.facebook.com/UCSCsingapore/">Facebook</a> or <a href="https://www.instagram.com/ucsc.squash/>Instagram</a>!
        </Typography>
      </Container>
    </Container>
  )
}
