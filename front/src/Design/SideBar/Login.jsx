import React, { useState } from "react";
import "./Style.css";
import LoginModal from "./Modal/Login";
import JoinModal from "./Modal/Join";

const Login = (props) => {
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
  const [isJoinModalOpened, setIsJoinModalOpened] = useState(false);

  const onClickLoginButton = () => {
    const current = isLoginModalOpened;
    setIsLoginModalOpened(!current);
  };
  const onClickJoinButton = () => {
    const current = isJoinModalOpened;
    setIsJoinModalOpened(!current);
  };

  return (
    <>
      <div className="login">
        <div className="userButton">
          <button className="button" onClick={onClickLoginButton}>
            로그인
          </button>
          <button className="button" onClick={onClickJoinButton}>
            회원가입
          </button>
        </div>
      </div>
      {isLoginModalOpened ? <LoginModal /> : ""}
      {isJoinModalOpened ? <JoinModal /> : ""}
    </>
  );
};

export default Login;
