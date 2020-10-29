import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ButtonLink from '../components/buttonLink'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    flexGrow: 1,
    fontWeight: 900,
  },
  appBar: {
    background: '#002846',
  },
  menuButton: {
    marginRight: theme.spacing(5),
    fontWeight: 300,
    letterSpacing: 2,
    textTransform: 'none',
    fontSize: 16,
  }
}));

export default function Menu() {
  const styles = useStyles();

  return (
    <AppBar elevation={0} position="fixed" className={styles.appBar}>
      <Toolbar>
        <Typography variant="h6" className={styles.logo}>
          UCSC
        </Typography>
        <ButtonLink href="#about-us" className={styles.menuButton} color="inherit">
          About Us
        </ButtonLink>
        <ButtonLink href="#location" className={styles.menuButton} color="inherit">
          Location
        </ButtonLink>
        <ButtonLink href="#membership" className={styles.menuButton} color="inherit">
          Membership
        </ButtonLink>
        <ButtonLink href="#contact-us" className={styles.menuButton} color="inherit">
          Contact Us
        </ButtonLink>
        <ButtonLink href="/coaching-panel" className={styles.menuButton} color="inherit">
          Coaching Panel
        </ButtonLink>
        <ButtonLink href="#committee" className={styles.menuButton} color="inherit">
          Committee
        </ButtonLink>
      </Toolbar>
    </AppBar>
  )
}
