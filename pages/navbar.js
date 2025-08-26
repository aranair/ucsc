import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

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
          <ButtonLink href="/#useful-links" className={styles.menuButton} color="inherit">
            Useful Links
          </ButtonLink>
          <ButtonLink href="/coaching-panel" className={styles.menuButton} color="inherit">
            Coaching Panel
          </ButtonLink>
          <ButtonLink href="/committee" className={styles.menuButton} color="inherit">
            Committee
          </ButtonLink>
        </Hidden>
        <Hidden lgUp>
          <IconButton edge="start" className={styles.hamburger} color="inherit" onClick={handleClick} aria-label="hamburger">
            <MenuIcon />
          </IconButton>
          <Menu id="hamburger" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
            <MenuLink text="About Us" href="/#about-us" onClick={handleClose}/>
            <MenuLink text="Location" href="/#location" onClick={handleClose}/>
            <MenuLink text="Membership" href="/#membership" onClick={handleClose}/>
            <MenuLink text="Contact Us" href="/#contact-us" onClick={handleClose}/>
            <MenuLink text="Useful Links" href="/#useful-links" onClick={handleClose}/>
            <MenuLink text="Coaching Panel" href="/coaching-panel" onClick={handleClose}/>
            <MenuLink text="Committee" href="/committee" onClick={handleClose}/>
          </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}
