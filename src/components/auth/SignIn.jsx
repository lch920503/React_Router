import React from "react";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { expirationMessegeState } from "../../atom";
import { useRecoilState } from "recoil";

/**
  * 세션스토리지 만들기
    * - [] 어드민 정보 저장
    * - [✔] 로그인 시간 저장
    * - [✔] 로그인 유효 시간 저장
    * - [] 유효성 검사

  * 추가 개발 사항
    * - [✔] 로그인 사용자 ip 주소
    * - [✔] 사용자 os 확인
    * - [✔] 시간 연장 버튼 추가
    * - [✔] 시간 연장 버튼을 눌렀을 때, 세션 만료시간 초기화
    * - [] 유저 정보에 맞춰 페이지 라우팅 막기
 */

const SignIn = () => {
  const navigate = useNavigate();

  const [valueId, setValueId, onChangeId] = useInput("");
  const [valuePw, setValuePw, onChangePw] = useInput("");
  const [expirationText, setExpirationText] = useRecoilState(
    expirationMessegeState
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const signInTime = Date.now();
    sessionStorage.setItem("userId", valueId);
    sessionStorage.setItem("accessTime", signInTime);
    sessionStorage.setItem("expirationTime", Date.now() + 30 * 60 * 1000);

    if (valueId.length < 4) {
      setExpirationText("아이디를 확인해주세요");
    } else if (valuePw.length < 4 || valuePw.length > 8) {
      setExpirationText("패스워드는 4자리~8자리로 입력해주세요");
    } else {
      navigate("/", { state: { isLogin: true } });
      setValueId("");
      setValuePw("");
    }
  };

  return (
    <div className="sign-in">
      <h1 className="title">Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="input-box">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            min={4}
            max={8}
            value={valueId}
            onChange={onChangeId}
            placeholder="아이디"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="pw">PW</label>
          <input
            type="password"
            id="pw"
            min={4}
            max={8}
            value={valuePw}
            onChange={onChangePw}
            placeholder="비밀번호"
            required
          />
        </div>
        <button type="submit" className="btn-sign-in">
          로그인
        </button>
      </form>
      <p className="expiration-text">{expirationText}</p>
    </div>
  );
};

export default SignIn;
