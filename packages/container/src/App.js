import React from 'react'
import { mount } from 'marketing/MarketingApp'
import MarketingApp from './components/MarketingApp'

console.log(mount)

export default function App() {
  return (
    <div>
      <h1>Hi there!, general Kennoby</h1>
      <hr />
      <MarketingApp />
    </div>
  )
}
