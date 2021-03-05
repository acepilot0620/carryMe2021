import React, { useState } from "react";
import "./Styles.css";
import {ItemLogChat} from '.';

const LogChat = (props) => {
    const [itemLogChat, setItemLogChat] = useState({
        1: {nick: "요네장인", text: "존나 하기실핟", time: "5분전"},
        1: {nick: "요네장인", text: "존나 하기실핟", time: "5분전"}
    });

    return (
        <div className="logChat">
            <div style = {{
                overflow: "auto",
                height: "400px"
            }}>
                <ItemLogChat></ItemLogChat>
                <ItemLogChat></ItemLogChat>
                <ItemLogChat></ItemLogChat>
                <ItemLogChat></ItemLogChat>
                <ItemLogChat></ItemLogChat>
            </div>
            <div className = "itemLogTyping">
                <input className="inputItemLogTyping" type="text"></input>
                <button className = "buttonItemLogTyping">전송</button>
            </div>
        </div>
    );
};

export default LogChat;