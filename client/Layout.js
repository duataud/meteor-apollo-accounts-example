import React from 'react'
import { logout } from 'meteor-apollo-accounts'
import { Link } from 'react-router'

class Layout extends React.Component {

  async logout(event) {
    event.preventDefault()
    let { client, data } = this.props
    try {
      const response = await logout(client)
      console.log('response', response)
      data.refetch()
    } catch (error) {
      alert(error)
    }
  }

  render() {
      return (
        <div>
          <h1><Link to={'/'}>App</Link></h1>
          <ul>
            <li><Link to={`/login`}>Login</Link></li>
            <li><Link to={`/register`}>Register</Link></li>
            <li><Link onClick={this.logout.bind(this)}>Logout</Link></li>
            <li><Link to={`/recover-password`}>RecoverPassword</Link></li>
          </ul>
          {this.props.children}
        </div>
      );
    }
}

export default Layout
