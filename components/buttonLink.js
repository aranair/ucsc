import React from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

const ButtonLink = ({ className, href, hrefAs, children }) => (
  <Link href={href} as={hrefAs} passHref>
    <a className={className}>
      {children}
    </a>
  </Link>
)

export default ButtonLink
