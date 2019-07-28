import React, { Component } from 'react';
import Search from '../search';
import Users from '../users';
import Modal from '../modal';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCollections: [],
      editMode: false,
      editUser: {},
      filterStr: null
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
          <Search _setFilterString={this._setFilterString} />
          <button className="btn btn-success" data-toggle="modal" data-target="#modelId"

          >
            Add User

          </button>
        </div>
        <Users
          userList={this.state.userCollections}
          _deleteUser={this._deleteUser}
          _getEditUser={this._getEditUser}
          _toggleEditMode={this._toggleEditMode}
        />
        <Modal
          _addUser={this._addUser}
          _getEditUser={this._getEditUser}
          editMode={this.state.editMode}
          editUser={this.state.editUser}
        ></Modal>
      </div>
    );
  }
  _addUser = (user) => {
    let updateUserList = [...this.state.userCollections];
    updateUserList.push(user);
    this.updateUserList(updateUserList);
  }
  _deleteUser = userName => {
    let userIndex = this.state.userCollections.findIndex(item => {
      return item.userName === userName;
    });
    if (userIndex !== -1) {
      this.setState(preveSate => preveSate.userCollections.splice(userIndex, 1));
      localStorage.setItem("users", JSON.stringify(this.state.userCollections));
    }
  }
  _findIndex = userName => {
    return this.state.userCollections.find(item => item.userName === userName);
  }
  _toggleEditMode = (bool) => {
    this.setState({
      editMode: bool
    })
  }
  _getEditUser = (user) => {
    const index = this.state.userCollections.findIndex(item => item.userName === user.userName);
    this.setState(preveState => preveState.userCollections[index] = user);
    localStorage.setItem("users", JSON.stringify(this.state.userCollections));
  }
  updateUserList = updates => {
    this.setState({
      userCollections: updates
    }, () => {
      localStorage.setItem("users", JSON.stringify(this.state.userCollections));
    });
  }
  _setFilterString = (filterStr) => {
    this.setState({ filterStr });
  }
}

export default Home;