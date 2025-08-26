import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';

import theme from '../theme'

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#e0dcd4',
    paddingTop: '10vh',
    paddingBottom: '15vh',
    textAlign: 'center',
  },
  linkText: {
    textDecoration: 'underline',
  },
  listItemButton: {
    justifyContent: 'center',
  }
}));

export default function UsefulLinks() {
  const styles = useStyles();

  return (
    <Container maxWidth={false} className={styles.container} id='useful-links'>
      <Container maxWidth="md">
        <Typography variant="h3">Useful Links</Typography>

        <Container maxWidth="sm">
          <List>
            <ListItem button className={styles.listItemButton}>
              <Link href="https://www.sgsquash.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6" className={styles.linkText}>
                  Singapore Squash Racquets Association
                </Typography>
              </Link>
            </ListItem>
            <ListItem button className={styles.listItemButton}>
              <Link href="https://psaworldtour.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6" className={styles.linkText}>
                  PSA World Tour
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Container>
      </Container>
    </Container>
  )
}
