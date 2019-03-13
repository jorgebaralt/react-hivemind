# Description

Hivemind is a Context Provider and Store component that provides many
features. The main idea is to wrap the app with this component, and it
will take care of adding listeners to screen size, scrolls, and more.
the component also checks if the user is using a web browser on a mobile
device or desktop, and applies functions accordingly. For now we only
have one default function that we consider useful,
smoothscroll-polyfill:

# Install

Use in bash CLI:

`$ npm install --save react-hivemind`

# Showcase

[![Edit react-png-flipcard](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/mw23o99wx?fontsize=14)

[Example on CodeSandbox](https://mw23o99wx.codesandbox.io/)

[Website use Example](jorgebaralt.com)
In the website is used to keep track of the width, and decide when to render a Hamburger menu (for mobile or width < 800)

# React Plug-Hivemind

> Hivemind is a Context Provider and Store component that provides many
> features.

[![NPM](https://img.shields.io/npm/v/react-png-flipcard.svg)](https://www.npmjs.com/package/react-png-flipcard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instructions

1. literally, just plug and go.
2. import { HivemindStore } from 'react-hivemind'
3. Wrap your app or any high order component with HivemindStore
4. add any additional functions that you want to be called on init

## Features

1. Access to basic data through the whole app
2. Call functions when app starts ,or whether device is mobile or not.

## Props

| Props            | Functionality                                                                                                        | Default               | Data Type   |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `front`          | _REQUIRED_ - this props receive JSX to be rendered on the front of the card. Look down for examples on how to do it. | <div>Front here</div> | JSX         |
| `back`           | _REQUIRED_ - this props receive JSX to be rendered on the back of the card. Look down for examples on how to do it.  | <div>back here</div>  | JSX         |
| `width`          | _REQUIRED_ - Width of the card                                                                                       | 100%                  | number      |
| `height`         | _REQUIRED_ - height of the card                                                                                      | 250 ms                | number      |
| `direction`      | _REQUIRED_ - flip direction                                                                                          | "horizontal"          | string      |
| `flipSpeed`      | Speef of flip animation, in ms                                                                                       | 600ms                 | number (ms) |
| `style`          | style object to customize the card                                                                                   | NA                    | object      |
| `containerClass` | CSS class to style the card                                                                                          | NA                    | css class   |
| `manual`         | Boolean that set animation to be on action (for example on click) this is good to be managed by a state              | NA                    | boolean     |
| `flip`           | Boolean state that keeps track of wether card is flipped or not                                                      | False                 | boolean     |
| `frontStyle`     | style object to customize the front of the card                                                                      | NA                    | object      |
| `backStyle`      | style object to customize the back of the card                                                                       | NA                    | object      |
| `frontClass`     | CSS class to style the front of the card                                                                             | NA                    | css class   |
| `backClass`      | CSS class to style the back of the card                                                                              | NA                    | css class   |
| `margin`         | Number to set margin                                                                                                 | NA                    | number      |

## Usage

### For React.js version ^16.8

#### Uses React Hooks

```jsx
import FlipCard from 'react-png-flipcard';
```

### Example

#### setup

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { HivemindStore } from 'react-hivemind';

const Root = () => {
  return (
    <HivemindStore
      isMobile={() => {
        console.log('yes it is mobile');
        console.log('scroll-polyfill applied');
      }}
      isNotMobile={() => {
        console.log('nop, this is not mobile');
      }}
      onAppStart={() => {
        console.log('App started');
      }}
    >
      <App />
    </HivemindStore>
  );
};
ReactDOM.render(<Root />, document.getElementById('root'));
```

#### Usage

```jsx
import HivemindContext from 'react-hivemind'

const example = () => {
  const { scrollY, width, height, isMobile } = useContext(HivemindContext)
  return(
    <div>
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
    </div>
  )
```

## License

MIT © [jorgebaralt](https://github.com/jorgebaralt)
