import React from "react";
import { useInput } from "../../hooks/useInput";

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
  const [id, password, onChangeId, onChangePw] = useInput("");

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <div>
          <span>ID</span>
          <input type="text" value={id} onChange={onChangeId} />
        </div>
        <div>
          <span>PW</span>
          <input type="password" value={password} onChange={onChangePw} />
        </div>
        <button>로그인</button>
      </form>
    </div>
  );
};

export default SignIn;
