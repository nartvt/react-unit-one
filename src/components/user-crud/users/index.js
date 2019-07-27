import React, { Component } from 'react';
import User from '../user';

class Users extends Component {
  renderUser = (list) => {
    let comList = list.map((item, index) => { return < User _deleteUser={this.props._deleteUser} key={index} item={item} index={index}/>; });
    return comList;
  };
  render() {
    console.log(this.props.userList);
    let { userList } = this.props;
    //detructuring
    // let userList =  this.props.userList;
    return (
      <div>
 <table className="table">
    <thead>
      <tr>
        <th>User Name</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
      </tr>
    </thead>
          <tbody>
            {this.renderUser(userList)}
    </tbody>
  </table>
</div>

    );
  }
}

export default Users;