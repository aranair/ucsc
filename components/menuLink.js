import React from 'react'
import Link from 'next/link'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MenuLink = ({ text, className, href, hrefAs, children, onClick }) => {
  const buildLocal = process.env.NEXT_PUBLIC_BUILD_LOCAL;
  const url = href[0] === '/' && href !== '/' && href[1] !== '#' && buildLocal === 'FALSE' ? `${href}.html` : href;

  return (
    <Link href={url} as={hrefAs} passHref>
      <ListItem button component="a" onClick={onClick}>
        <ListItemText>{text}</ListItemText>
      </ListItem>
    </Link>
  )
}

export default MenuLink
