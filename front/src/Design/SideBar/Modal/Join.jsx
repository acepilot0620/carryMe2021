import React from "react";

const Join = (props) => {
  // id, nickname, email, age, sex, phone
  return (
    <div>
      <label className="label">
        아이디
        <input className="input" type="text"></input>
      </label>
      <label className="label">
        비밀번호
        <input className="input" type="password"></input>
      </label>
      <label className="label">
        닉네임
        <input className="input" type="text"></input>
      </label>
      <label className="label">
        나이
        <input className="input" type="text"></input>
      </label>
      <label className="label">
        성별
        <input className="input" type="text"></input>
      </label>
      <label className="label">
        전화번호
        <input className="input" type="text"></input>
      </label>
    </div>
  );
};

export default Join;
