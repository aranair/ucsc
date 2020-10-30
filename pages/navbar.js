import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import ButtonLink from '../components/buttonLink'
import MenuLink from '../components/menuLink'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    letterSpacing: 1,
    marginRight: theme.spacing(5),
    letterSpacing: 2,
    textTransform: 'none',
    fontSize: 16,
    textDecoration: 'none',
  },
  logoText: {
    fontWeight: 700,
  },
  appBar: {
    background: '#002846',
  },
  hamburger: {
    margin: 0,
  },
  menuButton: {
    marginRight: theme.spacing(5),
    fontWeight: 300,
    letterSpacing: 2,
    textTransform: 'none',
    fontSize: 16,
    textDecoration: 'none',
  }
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = useStyles();

  return (
    <AppBar elevation={0} position="fixed" className={styles.appBar}>
      <Toolbar>
        <ButtonLink href="/" className={styles.logo} color="inherit">
          <Typography variant="h6" className={styles.logoText}>
            UCSC
          </Typography>
        </ButtonLink>
        <Hidden mdDown>
          <ButtonLink href="/#about-us" className={styles.menuButton} color="inherit">
            About Us
          </ButtonLink>
          <ButtonLink href="/#location" className={styles.menuButton} color="inherit">
            Location
          </ButtonLink>
          <ButtonLink href="/#membership" className={styles.menuButton} color="inherit">
            Membership
          </ButtonLink>
          <ButtonLink href="/#contact-us" className={styles.menuButton} color="inherit">
            Contact Us
          </ButtonLink>
          <ButtonLink href="/coaching-panel" className={styles.menuButton} color="inherit">
            Coaching Panel
          </ButtonLink>
          <ButtonLink href="/committee" className={styles.menuButton} color="inherit">
            Committee
          </ButtonLink>
        </Hidden>
        <Hidden mdUp>
          <IconButton edge="start" className={styles.hamburger} color="inherit" onClick={handleClick} aria-label="hamburger">
            <MenuIcon />
          </IconButton>
          <Menu id="hamburger" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
            <MenuLink text="About Us" href="/#about-us" onClick={handleClose}/>
            <MenuLink text="Location" href="/#location" onClick={handleClose}/>
            <MenuLink text="Membership" href="/#membership" onClick={handleClose}/>
            <MenuLink text="Contact Us" href="/#contact-us" onClick={handleClose}/>
            <MenuLink text="Coaching Panel" href="/coaching-panel" onClick={handleClose}/>
            <MenuLink text="Committee" href="/committee" onClick={handleClose}/>
          </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}
