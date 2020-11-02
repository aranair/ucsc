import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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
  const styles = useStyles(theme);

  return (
    <Container maxWidth={false} className={styles.container} id='useful-links'>
      <Container maxWidth="md">
        <Typography variant="h3">Useful Links</Typography>

        <Container maxWidth="sm">
          <List>
            <ListItem button className={styles.listItemButton}>
              <Link href="https://www.sgsquash.com">
                <Typography variant="h6" className={styles.linkText}>
                  Singapore Squash Racquets Association
                </Typography>
              </Link>
            </ListItem>
            <ListItem button className={styles.listItemButton}>
              <Link href="https://psaworldtour.com">
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
