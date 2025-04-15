import React from 'react'
import Main from './Main'
import About from './About'
import Typeofcoffee from './Typeofcoffee'
import Last from './Subtypes/Last'

export default function Homepage() {
  return (
    <div>
        <Main/>
        <About/>
        <Typeofcoffee/>
        <Last/>
    </div>
  )
}
