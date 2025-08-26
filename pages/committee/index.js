import React from 'react';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import members from '../../data/members'

const useStyles = makeStyles((theme) => ({
  bgContainer: {
    background: '#e0dcd4',
  },
  container: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  title: {
    fontSize: '4em',
    textAlign: 'center',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 700,
    marginBottom: 50,
  },
  name: {
    fontWeight: 700,
  },
  memberTitle: {
    marginBottom: 10,
  },
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

export default function Committee() {
  const styles = useStyles();

  return (
    <Container maxWidth={false} className={styles.bgContainer}>
      <Container maxWidth='lg' className={styles.container}>
        <Typography variant="h1" className={styles.title}>
          Committee Members
        </Typography>
        <Container maxWidth="sm">
          <Grid container spacing={5} justify='center'>
            {
              members.map(m => {
                return (
                  <React.Fragment>
                    <Grid item md={3}>
                      <Avatar alt={m.name} src={`/${m.id}.jpg`} className={styles.large} />
                    </Grid>
                    <Grid item md={8}>
                      <Typography variant="h5" className={styles.name}>
                        {m.name}
                      </Typography>
                      <Typography variant="h6" className={styles.memberTitle}>
                        {m.title}
                      </Typography>
                      <Typography variant="body1" className={styles.desc}>
                        {m.desc}
                      </Typography>
                    </Grid>
                  </React.Fragment>
                )
              })
            }
          </Grid>
        </Container>
      </Container>
    </Container>
  )
}
