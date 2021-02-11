import React, { Component } from 'react';
import './Styles.css';

class BannerSwiperItem extends Component {

    state = {
        url: "",
    }
    componentWillMount() {
        this.setState(
            {
                url: this.props.url
            }
        );
    }

    render() {
        return (
            <div
                className="bannerSwiperItem">
                <p>예시: {this.state.url}</p>
            </div>
        );
    }
}
export default BannerSwiperItem;