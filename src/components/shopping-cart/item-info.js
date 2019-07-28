/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import image_phone from './../../assets/img/sp_iphoneX.png';
class ItemInfo extends Component {
    date = "24/03/2019";
    //   {/* EVENT BINDING TYPE: 1 */ }
    // showName() {
    //     alert('iphone X');
    // }
        //   {/* EVENT BINDING TYPE: 2 */ }
    //   showName(name) {
    //     alert(name);
    // }
        //   {/* EVENT BINDING TYPE: 3 */ }
      showName = ()  => {
        alert(this.date);
      }
      state = {
            isShow: true        
      }
    toggleDecription = () => {
        this.setState({
            isShow:!this.state.isShow
          })
          console.log(this.state.isShow );
    }
    render() {
        return (
            <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                    <img className="card-img-top"
                        src={image_phone}
                        alt="Card image"
                        style={{ maxWidth: '100%', height: 250 }} />
                    <div className="card-body text-center">
                        <h4 className="card-title text-center">iPhone X</h4>
                        <p className="card-text" style={{
                            color: 'pink',
                            lineHeight: '20px',
                            display: this.state.isShow ? 'block':'none'
                        }}
                        >iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
                        <p>Release Date: {1 == 1 ? this.date : ''}</p>
                        {/* EVENT BINDING TYPE: 1 */}
                        {/* <button className="btn btn-primary" onClick={this.showName}>Detail</button> */}
                        {/* EVENT BINDING TYPE: 2 */}
                        {/* <button className="btn btn-primary" onClick={() =>this.showName('iphone X')}>Detail</button> */}
                        {/* EVENT BINDING TYPE: 3 */}
                        {/* <button className="btn btn-primary" onClick={this.showName.bind(this)}>Detail</button> */}
                        <button className="btn btn-primary" onClick={this.toggleDecription.bind(this)}>Detail</button>
                        <button className="btn btn-danger">Cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemInfo;