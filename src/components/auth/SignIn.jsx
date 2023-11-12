import React, { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";

/**
  * 세션스토리지 만들기
    * - 어드민 정보 저장
    * - 접속한 시간 저장
    * - 만료 시간 저장

  * 시간 연장 버튼을 눌렀을 때, 세션 만료시간 초기화

  * 추가 개발 사항
    * 로그인 사용자 ip 주소
    * 사용자 os 확인
    * 시간 연장 버튼 추가
    * 유저 정보 막기
 */

const SignIn = () => {
  const navigate = useNavigate();

  const [value, setValue, onChange] = useInput("");
  const [valuePw, setValuePw, onChangePw] = useInput("");
  const [isLogin, setIsLogin] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const signInTime = Date.now();
    sessionStorage.setItem("userId", value);
    sessionStorage.setItem("accessTime", signInTime);
    sessionStorage.setItem("expirationTime", Date.now() + 30 * 60 * 1000);
    setValue("");
    setValuePw("");

    setIsLogin(true);
    navigate("/", { state: { isLogin: true } });
  };

  return (
    <div className="sign-in">
      <h1 className="title">Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="input-box">
          <label htmlFor="id">ID</label>
          <input type="text" id="id" value={value} onChange={onChange} />
        </div>
        <div className="input-box">
          <label htmlFor="pw">PW</label>
          <input
            type="password"
            id="pw"
            value={valuePw}
            onChange={onChangePw}
          />
        </div>
        <button className="btn-sign-in">로그인</button>
      </form>
    </div>
  );
};

export default SignIn;
