import React from 'react'
import injectSheet from 'react-jss'

const A = ({ children, classes, href}) => {
  return (
    <a href={href} className={classes.anchor}>{children}</a>
  )
}

const styles = theme => ({
  anchor: theme.anchor
})

export default injectSheet(styles)(A)