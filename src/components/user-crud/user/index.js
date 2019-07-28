import React, { Component } from 'react';

class User extends Component {
  render() {
    let { item,index } = this.props;
    
        return (
          <tr>
            <td>{index+1}</td>
            <td>{item.userName}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td className="btn btn-danger"
              
              onClick={() => this.props._deleteUser(item.userName)}>Delete</td>
            <td className="btn btn-primary"
              data-toggle="modal"
              data-target="#modelId"
              onClick=
              {() =>
                  {
                    this.props._toggleEditMode(true);
                this.props._getEditUser(item);
                  }
                }  >Edit</td>
                
          </tr>
        );
    }
}

export default User;