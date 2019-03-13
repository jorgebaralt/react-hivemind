import React, { useContext } from 'react'
// CSS
import classes from './App.module.css'
// JSX
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// Context
import HivemindContext from 'react-hivemind'

const example = () => {
  const { scrollY, width, height, isMobile } = useContext(HivemindContext)

  return (
    <div className={classes.App}>
      <h1 className={classes.Title}>React Hivemind</h1>
      <h2 className={classes.Title2}>Description</h2>
      <p className={classes.Description}>
        Hivemind is a Context Provider and Store component that provides many
        features. The main idea is to wrap the app with this component, and it
        will take care of adding listeners to screen size, scrolls, and more.
        the component also checks if the user is using a web browser on a mobile
        device or desktop, and applies functions accordingly. For now we only
        have one default function that we consider useful,
        smoothscroll-polyfill:
        <span style={{ color: 'blue' }}>
          https://www.npmjs.com/package/smoothscroll-polyfill
        </span>
      </p>
      <br />
      <h2 className={classes.Title2}>Features</h2>
      <ul className={classes.List}>
        <li className={classes.Item}>
          <p>Get screen data</p>
        </li>
        <li className={classes.Item}>
          <p>Call functions when the app loads</p>
        </li>
        <li className={classes.Item}>
          <p>Detect when browser is on mobile</p>
        </li>
        <li className={classes.Item}>
          <p>Call functions when is mobile </p>
        </li>
      </ul>
      <br />
      <h2 className={classes.Title2}>Example</h2>
      <br />
      <div className={classes.Example}>
        <h3>Screen data: Resize the screen and scroll down to check</h3>
        <p style={{ fontSize: 24 }}>
          <span className={classes.Data}>Width:</span>
          {width}
        </p>
        <p style={{ fontSize: 24 }}>
          <span className={classes.Data}>height:</span>
          {height}
        </p>
        <p style={{ fontSize: 24 }}>
          <span className={classes.Data}>ScrollY:</span>
          {scrollY}
        </p>
        <h3>Detect if device is mobile</h3>
        <p style={{ fontSize: 24 }}>
          <span className={classes.Data}>Is Mobile: </span>
          {isMobile ? 'true' : 'false'}
        </p>
        <h3>Applied functions</h3>
        <p style={{ fontSize: 24 }}>
          <span className={classes.Data}>Applied functions: </span>
          Open the console, and see check the logs of the functions being called
          accordingly
        </p>
      </div>
      <h2 className={classes.Title2}>Usage</h2>

      <p>
        Just wrap your App component (or any high order component) with the
        component. Any child of the HivemindStore will have access to the values
      </p>

      <div className={classes.CodeBlock}>
        <SyntaxHighlighter language='javascript' style={atomOneDark}>
          {`    <HivemindStore
      isMobile={() => {
        console.log('yes it is mobile')
      }}
      isNotMobile={() => {
        console.log('nop, this is not mobile')
      }}
      onAppStart={() => {
        console.log('App started')
      }}
    >
      <App />
    </HivemindStore>`}
        </SyntaxHighlighter>
      </div>
      <h2 className={classes.Title2}>Access data</h2>
      <p>Access data on any component by using setContext</p>
      <div className={classes.CodeBlock}>
        <SyntaxHighlighter language='javascript' style={atomOneDark}>
          {`
import React, { useContext } from 'react'
import HivemindContext from 'react-hivemind'`}
        </SyntaxHighlighter>
      </div>
      <p>Then inside the component get the data like this</p>
      <div className={classes.CodeBlock}>
        <SyntaxHighlighter language='javascript' style={atomOneDark}>
          {`const { scrollY, width, height, isMobile } = useContext(HivemindContext)`}
        </SyntaxHighlighter>
      </div>
      <div style={{ height: 100 }} />
    </div>
  )
}

export default example
