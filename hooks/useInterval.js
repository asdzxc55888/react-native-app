import React, { useEffect, useRef } from "react"

export default (callback, delay) => {
    const savedCallback = useRef()

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        if (delay != null) {
            let id = setInterval(() => {
                // savedCallback.current();
                callback();
                console.log("callback")
            }, delay)
            return () => clearInterval(id)
        }
    }, [delay]);
}