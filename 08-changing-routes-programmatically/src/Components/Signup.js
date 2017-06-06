import React, { Component } from 'react';
import './Signup.css'
class Signup extends Component {
  handleSubmit(e) {
    e.preventDefault()

    const { history } = this.props

    let email = this.email.value
    let password = this.password.value

    history.push(`/signup/thankyou/${email}`)

  }

  render() {
    return (
      <div className="Signup">
        <h3>Signup</h3>
        <form>

          <div className="formInput">
            <label>Email: </label>
            <input type="text" placeholder="email" ref={ n => this.email = n} />
          </div>
          <div className="formInput">
            <label>Password: </label>
            <input type="password" placeholder="Password" ref={ n => this.password = n} />
          </div>
          <div className="formInput">
            <label></label>

            <input type="submit" onClick={(e) => this.handleSubmit(e)} />
          </div>
        </form>
      </div>
    );
  }

}

export default Signup;
