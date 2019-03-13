/*
this Hook, will always listen to resizes of the screen,
and provide the result (width, height) as consumer to all children
*/
import { useState, useEffect } from 'react'

const useGetWindowData = (onAppStart) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const [scrollY, setScrollY] = useState(window.scrollY)

  // on mount, add window event listener for screen change
  // pass only [] because we add the listeners just once.
  useEffect(() => {
    onAppStart()
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    })
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
    return () => {
      window.removeEventListener('resize')
      window.removeEventListener('scroll')
    }
  }, [])

  return { width, height, scrollY }
}

export default useGetWindowData
