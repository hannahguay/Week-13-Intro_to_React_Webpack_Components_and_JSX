import React, { Component } from 'react'

export default class Loginform extends Component {
  render() {
    return (
      <div>
            <div class="container-fluid d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <h3>Log In</h3><br/>
                <form class="d-flex justify-content-center" role="form">
                    <input class="form-control me-2" type="Username" placeholder="Username" aria-label="Username"/>
                    <input class="form-control me-2" type="Password" placeholder="Password" aria-label="Password"/>
                    <button class="btn btn-outline-success" type="submit">Submit</button>
                </form>
            </div>
      </div>
    )
  }
}
