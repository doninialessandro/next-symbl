/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react'

export const useInterval = (callback, delay, stopFlag) => {
  const savedCallback = useRef()
  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    let id
    function tick() {
      savedCallback.current()
      if (stopFlag) {
        clearInterval(id)
      }
    }
    if (delay !== null && !stopFlag) {
      id = setInterval(tick, delay)
      return () => {
        clearInterval(id)
      }
    }
  })
}
