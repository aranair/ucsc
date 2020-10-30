import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import Menu from '../menu'

const useStyles = makeStyles((theme) => ({
}));

export default function Committee() {
  const styles = useStyles();

  return (
    <React.Fragment>
      <Menu />
      <main>
        <Typography variant="h1" className={styles.title}>
          Our Committee Members
        </Typography>
      </main>
    </React.Fragment>
  )
}
