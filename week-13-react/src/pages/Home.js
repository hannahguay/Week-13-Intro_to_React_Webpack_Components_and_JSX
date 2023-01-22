import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import Loginform from '../components/Loginform'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Loginform />
      </div>
    )
  }
}

