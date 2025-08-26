import React from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button'

const ButtonLink = ({ className, href, hrefAs, children }) => {
  const buildLocal = process.env.NEXT_PUBLIC_BUILD_LOCAL;
  const url = href[0] === '/' && href !== '/' && href[1] !== '#' && buildLocal === 'FALSE' ? `${href}.html` : href;

  return (
    <Link href={url} as={hrefAs} className={className}>
      {children}
    </Link>
  )
}

export default ButtonLink
