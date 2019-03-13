/*
this context provides 3 things:
isMobile: bool, whether device is mobile or not,
width: int, width of the screen,
height: int, height of the screen
*/
import React from 'react'
import propTypes from 'prop-types'
// Hooks
import useIsMobile from '../hooks/useIsMobile'
import useGetWindowData from '../hooks/useGetWindowData'

const Context = React.createContext()

// used to wrap parent component and all children then can use the context
export const hivemindStore = (props) => {
  // get the size of the screen
  const { width, height, scrollY } = useGetWindowData(props.onAppStart)

  // check if the device is a mobile phone, applies functions accordingly
  const isMobile = useIsMobile(props.isMobile, props.isNotMobile)

  // return context
  return (
    <Context.Provider value={{ isMobile, width, height, scrollY }}>
      {props.children}
    </Context.Provider>
  )
}
hivemindStore.propTypes = {
  children: propTypes.any,
  isMobile: propTypes.func,
  isNotMobile: propTypes.func,
  onAppStart: propTypes.func
}

export default Context
