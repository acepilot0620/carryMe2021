import React, { Component } from 'react';
import './Styles.css';
import {BannerSwiperItem} from '.';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);


class BannerSwiper extends Component {
    state = {
        items : [
            1,
            2,
            3
        ]
    }
    componentWillMount() {
        this.setState(
            {
                items: [
                    "url 1",
                    "url 2",
                    "url 3",
                ]
            }
        )
    }
    componentDidMount () {
    }

    renderLists = () => {
        const {items} = this.state;
        return (
            items.map((value) => (
                <SwiperSlide>
                    <BannerSwiperItem
                        url = {value}></BannerSwiperItem>
                </SwiperSlide>
        ))
        );
    }
    render () {
        return(
            <div
                className = "bannerSwiper">
                <h3>배너</h3>
                <Swiper
                    className = "fix01"
                    spaceBetween={10}
                    slidesPerView={1}
                    direction={'horizontal'}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}

                >
                    {this.renderLists()}
                </Swiper>
            </div>
        );
    }
}
export default BannerSwiper;