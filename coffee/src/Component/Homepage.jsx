import React from 'react'
import Main from './Main'
import About from './About'
import Typeofcoffee from './Typeofcoffee'
import Last from './Subtypes/Last'
import Mapsearch from './Mapsearch'

export default function Homepage() {
  return (
    <div>
        <Main/>
        <About/>
        <Typeofcoffee/>
        <Mapsearch/>
        <Last/>
    </div>
  )
}
