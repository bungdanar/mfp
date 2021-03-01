import { mount } from 'marketing/MarketingApp'
import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'

export default function MarketingApp() {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location

        // console.log(pathname)

        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
    })

    // Need to be run first time
    onParentNavigate(history.location)

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}
