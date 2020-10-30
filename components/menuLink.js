import React from 'react'
import Link from 'next/link'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MenuLink = ({ text, className, href, hrefAs, children, onClick }) => (
  <Link href={href} as={hrefAs} passHref>
    <ListItem button component="a" onClick={onClick}>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  </Link>
)

export default MenuLink
