import React, { useState } from "react";
import "./Styles.css";

const ItemLogChat = (props) => {
    const [itemLogChat, setItemLogChat] = useState({
        nick: "요네장인", 
        text: "존나 하기실핟", 
        time: "5분전"
    });

    return (
        <div className="itemLogChat">
            <p className = "itemLogChatNick">{itemLogChat.nick}</p>
            <p className = "itemLogChatText">{itemLogChat.text}</p>
            <p className = "itemLogChatTime">{itemLogChat.time}</p>
            <button className = "itemLogChatAlert">신고</button>
        </div>
    );
};

export default ItemLogChat;