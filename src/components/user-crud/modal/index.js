import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      userName: nextProps.editUser.userName,
      name: nextProps.editUser.name,
      email: nextProps.editUser.email,
      phoneNumber: nextProps.editUser.phoneNumber
    });
  }

  render() {
    let { editMode } = this.props;
    return (
      <div>
        <div className="modal fade" id="modelId"
          tabIndex={-1} role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" >{editMode ? "EDIT USER" : "ADD USER"}</h5>
                <button type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this._handleSubmit}>
                  <div className="form-group">
                    <label>UserName</label>
                    <input type="text"
                      className="form-control"
                      onChange={this._handlerChange} name="userName"
                      value={this.state.userName}
                      aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text"
                      className="form-control"
                      onChange={this._handlerChange} name="name"
                      value={this.state.name}
                      aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text"
                      className="form-control"
                      onChange={this._handlerChange} name="email"
                      value={this.state.email}
                      aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label>PhoneNumber</label>
                    <input type="text"
                      className="form-control"
                      onChange={this._handlerChange} name="phoneNumber"
                      value={this.state.phoneNumber}
                      aria-describedby="helpId" />
                  </div>
                  <button type="submit"
                    className="btn btn-primary">Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
  _handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  _handleSubmit = (e) => {
    let { _addUser, editMode, _getEditUser } = this.props;
    e.preventDefault();
    if (!editMode) {
      _getEditUser(this.state);
      this.setState({     
        userName:'',
        name: '',
        email:'',
        phoneNumber:''
      })
    } else {
      _addUser(this.state);
    }
  }
}

export default Modal;