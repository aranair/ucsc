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
    paddingTop: 80,
  },
  title: {
    fontSize: '4em',
    textAlign: 'center',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 700,
  },
}));

export default function Committee() {
  const styles = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth={false} className={styles.container}>
        <Typography variant="h1" className={styles.title}>
          Our Committee Members
        </Typography>
      </Container>
    </React.Fragment>
  )
}
