import React from 'react'
import injectSheet from 'react-jss'
import Section from 'elements/Section'
import RippleButtonJSS from 'example/RippleButtonJSS'
import Text from 'elements/Text'


const Main = ({ classes }) => {

  return (
    <Section background='darkGrey' className={classes.section}>
      <div className={classes.wrapper}>
        <Text h2>Ripple Button</Text>
        <Text subtitle2>With Material Design-like Ripple</Text>
        <RippleButtonJSS>Ripple</RippleButtonJSS>
      </div>
    </Section>
  )
}

const styles = {
  wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    height: '100%',
    flexGrow: 1,
    minHeight: 500,

  }

}

export default injectSheet(styles)(Main)