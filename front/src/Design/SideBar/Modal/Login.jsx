import React, { useState, useRef, useCallback } from "react";

import "./styles.css";

const LoginModal = (props) => {
  const idRef = useRef(null);
  const passwordRef = useRef(null);

  const [idInput, setIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const onChange = useCallback((e) => {
    const currentValue = e.target.value;
    const newValue = currentValue.replace(/[^a-zA-Z0-9]*/g, "");
    idRef.current.value = newValue;
    setIdInput(newValue);
  }, []);

  const onPasswordChange = useCallback((e) => {
    setPasswordInput(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      console.log("로그인 정보: ", idInput, passwordInput);
      // TODO: 비밀번호 암호화 기능 추가 필요

      setIdInput("");
      setPasswordInput("");

      idRef.current.value = "";
      passwordRef.current.value = "";
    },
    [idInput, passwordInput]
  );

  return (
    <div className="modal-login">
      <label className="label">
        아이디
        <input
          className="input id"
          type="text"
          ref={idRef}
          onChange={onChange}
        ></input>
      </label>
      <label className="label password">
        비밀번호
        <input
          className="input"
          type="password"
          ref={passwordRef}
          onChange={onPasswordChange}
        ></input>
      </label>
      <button type="submit" onClick={onClick}>
        로그인
      </button>
    </div>
  );
};

export default LoginModal;
