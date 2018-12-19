import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

/*
  - className: the name of an existing CSS class,
  - background: white || blue || darkGrey
  - noPadding: true || false
  - ????? variant(string): section (default), header, footer
*/

const variants = [
  'footer',
  'header',
  'section',
]

const variantMap = {
  footer: 'footer',
  header: 'header',
  section: 'section',
}

const getElementForVarient = (variant) => {
  return variantMap[variant]
}

const Section = (props) => {

  const {
    children,
    classes,
    className,
    background='white',
    noPadding,
    header,
    footer,

  } = props

  // what was pass in?
  let variant
  if (header) {
    variant = 'header'
  } else if (footer) {
    variant = 'footer'
  } else {
    variant = 'section'
  }


  const clsNames = classNames(
    {
      [classes.bgDarkGrey]: background === 'darkGrey',
      [classes.bgWhite]: background === 'white',
      [classes.bgBlue]: background === 'blue',
      [classes.wrapper]: !noPadding
    },
    [

      className,
    ]

  )
  const Component = variant
  console.log('component', Component)

  return (
    <Component className={clsNames}>
      <div className={classes.inner}>
      {children}
      </div>
    </Component>
  )

}

const styles = theme => ({
  wrapper: theme.section.xs,
  inner: {
    maxWidth: 1180,
    margin: 'auto',
  },
  bgDarkGrey: theme.section.darkGrey,
  bgWhite: theme.section.white,
  bgBlue: theme.section.blue
})

export default injectSheet(styles)(Section)