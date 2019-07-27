import React, { Component } from 'react';
import ItemInfo from './item-info';
class ItemCollection extends Component {
    render() {
        return (
                <section id="smartphone" className="container-fluid pt-5 pb-5">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <ItemInfo></ItemInfo>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <ItemInfo></ItemInfo>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <ItemInfo></ItemInfo>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <ItemInfo></ItemInfo>
                        </div>
                    </div>
                </section>
        );
    }
}

export default ItemCollection;