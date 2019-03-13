/*
this hook checks if we are on a mobile device, and applies smoothscroll.polyfill to the dom.
Also, returns a boolean of the result
*/
import { useState, useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

/*
TODO: pass function to apply as props, that way users can apply their own functions if it is mobile
*/

const checkIsMobile = () => {
  let isMobile = false
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    isMobile = true
  }
  return isMobile
}

const useIsMobile = (isMobileFunctions, isNotMobileFunctions) => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    // check if it is mobile
    if (checkIsMobile()) {
      smoothscroll.polyfill()
      setIsMobile(true)
      isMobileFunctions()
    } else {
      setIsMobile(false)
      isNotMobileFunctions()
    }
  }, [])

  return isMobile
}

export default useIsMobile
