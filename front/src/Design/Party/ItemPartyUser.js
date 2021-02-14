import React, { Component } from 'react';
import './Styles.css';

class ItemPartyUser extends Component {
    state = {
        position: "",
        tier: "",
        nick: ""
    }
    componentWillMount() {
        this.setState({
            position: this.props.position,
            tier: this.props.user.tier,
            nick: this.props.user.nick
        })
    }
    render() {
        return (
            <div
                className = "itemPartyUser">
                <p
                    className = "itemPartyPosition"
                    style = {
                        {
                            color: "inherit"
                        }
                    }>{this.state.position}</p>
                {
                    this.state.tier === ""
                    ?(
                        <img
                            className = "tokenImg"
                            src = '/Image/tier_blank.png'></img>
                    )
                    :(
                        <img
                            className = "tokenImg"
                            src = '/Image/tier_ex.png'></img>
                    )
                }
                <p
                    className = "itemPartyNick">{this.state.nick}</p>
            </div>
        );
    }
}
export default ItemPartyUser;