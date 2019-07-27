import React, { Component } from 'react';
import Search from '../search';
import Users from '../users';
import Modal from '../modal';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCollections: [
        {
          userName: 'taivt',
          name: 'Tran Van Tai',
          email: 'taivt@gmail.com',
          phoneNumber: '01223246232'
        }
      ]
    }
  }
  componentDidMount() {
    localStorage.getItem('users') && this.setState({
      userCollections: JSON.parse(localStorage.getItem('users'))
    });
  }
  render() {
    return (
      <div>
        <h1 className="display-4">User Management</h1>
        <div className="d-flex justify-content-between allign-items-center">
          <Search />
          <button className="btn btn-success" data-toggle="modal" data-target="#modelId">
            Add User

          </button>
        </div>
        <Users userList={this.state.userCollections} />
        <Modal _addUser={this._addUser}></Modal>
      </div>
    );
  }
  _addUser = (user) => {
    let updateUserList = [...this.state.userCollections];
    updateUserList.push(user);
    this.setState({
      userCollections: updateUserList
    }, () => {
      localStorage.setItem("users", JSON.stringify(this.state.userCollections));
    });
  }
  _deleteUser = userName => {
    let userIndex = this.state.userCollections.findIndex(item => {
      return item.userName === userName;
    });
    if (userIndex != -1) {
      let updateUserList = [...this.state.userCollections];
      updateUserList.splice(userIndex, 1);
      this.setState({
        userCollections: updateUserList
      }, () => {
        localStorage.setItem("users", JSON.stringify(this.state.userCollections));
      });
    }
  }
  _findIndex = userName => {
    return this.state.userCollections.find(item => item.userName === userName);
  }
}

export default Home;