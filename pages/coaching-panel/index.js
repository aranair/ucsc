import React from 'react';
import Link from 'next/link'
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import coaches from '../../data/coaches'

const useStyles = makeStyles((theme) => ({
  bgContainer: {
    background: '#e0dcd4',
    minHeight: '95vh',
    paddingBottom: 80,
  },
  container: {
    paddingTop: 80,
    marginBottom: 50,
  },
  title: {
    fontSize: '4em',
    textAlign: 'center',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 700,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.3)',
  }
}));

export default function Committee() {
  const styles = useStyles();

  return (
    <Container maxWidth={false} className={styles.bgContainer}>
      <Container maxWidth='lg' className={styles.container}>
        <Typography variant="h1" className={styles.title}>
          Coaching Panel
        </Typography>
      </Container>

      <Container maxWidth={false}>
        <Grid container spacing={5} justify='center'>
          {
            coaches.map(c => {
              return (
                <Grid item md={4} sm={12}>
                  <Card className={styles.card} variant="outlined">
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {c.name}
                      </Typography>
                      <Typography className={styles.pos} color="textSecondary">
                        {c.title}
                      </Typography>
                      <br/>
                      {
                        c.desc.map(cd => {
                          return (
                            <Typography variant="h6" component="p">
                              {cd}
                              <br/>
                            </Typography>
                          )
                        })
                      }
                      <br/>
                      {
                        c.link &&
                          <Typography variant="h6">
                            <Link href={c.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                {c.linkText}
                            </Link>
                          </Typography>
                      }
                    </CardContent>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Container>
  )
}
