import React from 'react'
import injectSheet from 'react-jss'
import { Route } from 'react-router-dom'
import Header from 'ui/Header'
import Main from 'ui/Main'
import Footer from 'ui/Footer'
import Credits from 'elements/Credits'
import A from 'elements/A'

class App extends React.Component {

  render() {
    const { classes } = this.props
    // console.log('abcde', this.props.classes)
    return (
      <div id='App-wrapper' className={classes.wrapper}>
        <Header />
        <Main />
        <Credits>
          <li>Ben Szabo, <A href='https://codepen.io/finnhvman/pen/jLXKJw'>Pure CSS ripple effect for Material Design</A>, CSS for the ripple effect.</li>
        </Credits>
        <Footer />
      </div>
    )
  }
}


const styles = theme => ({
  wrapper: {
    // backgroundColor: 'red',
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
  },
  '@global': {
    html: {
      boxSizing: 'border-box',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      fontSize: '12pt',
      [theme.breakpoints.up('sm')]: {
        fontSize: '13pt'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '14pt'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '16pt'
      },
    },
    body: {
      margin: 0,
      fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.65,
      webkitTextSizeAdjust: 'none',
      msOverflowStyle: 'scrollbar',
      '@media print': {
       backgroundColor: 'white',
        minWidth: 320,
      },
      letterSpacing: 0.3,
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    p: {
      margin: 0,
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: 0,
    },
    h2: {
      // margin: 0,
    }
  },

})

export default injectSheet(styles)(App)