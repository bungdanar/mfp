import { mount } from 'auth/AuthApp'
import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'

export default function MarketingApp() {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location

        // console.log(pathname)

        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}