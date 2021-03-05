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
            <div>
                <ItemLogChat></ItemLogChat>
                <ItemLogChat></ItemLogChat>
                <ItemLogChat></ItemLogChat>
            </div>
            <div className = "itemLogTyping">작성 공간</div>
        </div>
    );
};

export default LogChat;