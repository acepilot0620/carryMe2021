import React from "react";
import "./Style.css";

const Login = (props) => {
  return (
    <div className="login">
      <label className="label">
        Email
        <input className="input" type="text"></input>
      </label>
      <label className="label">
        비밀번호
        <input className="input" type="password"></input>
      </label>
      <div className="userButton">
        <button className="button">로그인</button>
        <button className="button">회원가입</button>
      </div>
    </div>
  );
};

export default Login;
