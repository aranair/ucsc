import React from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

const ButtonLink = ({ className, href, hrefAs, children }) => {
  const buildLocal = process.env.NEXT_PUBLIC_BUILD_LOCAL;
  const url = href[0] === '/' && href !== '/' && href[1] !== '#' && buildLocal === 'FALSE' ? `${href}.html` : href;

  return (
    <Link href={url} as={hrefAs} passHref>
      <a className={className}> {children} </a>
    </Link>
  )
}

export default ButtonLink
