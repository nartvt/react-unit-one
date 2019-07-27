import React, { Component } from 'react';
import ContentClass from './content-component/content-class';
import SliderClass from './slide-component/slider-class';
import HeaderClas from './header-component/header-class';
import FooterClass from './footer-component/footer-class';
import './css/style.css';

class UnitOneClass extends Component {
    render() {
        return (
            <div>
                <HeaderClas></HeaderClas>
                <div className="bodyContent">
                    <div className="slideClass">
                        <SliderClass></SliderClass>
                    </div>
                    <div className="contentClass">
                        <ContentClass></ContentClass>
                    </div>
                </div>
                <div className="footerClass">
                    <FooterClass></FooterClass>
                </div>
            </div>
        )
    }
}

export default UnitOneClass;