import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useResetButton } from "../../hooks/useResetButton";
import { useSetRecoilState } from "recoil";
import { expirationMessege } from "../../atom";

let countInterval;

const Header = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const setExpirationText = useSetRecoilState(expirationMessege);

  const expirationTimeCount = () => {
    const currentTime = new Date();
    const expirationTime = new Date(
      parseInt(sessionStorage.getItem("expirationTime"))
    );
    let remainTime = expirationTime.getTime() - currentTime.getTime();
    const remainMinutes = Math.floor(remainTime / (1000 * 60));
    const remainSeconds = Math.floor(remainTime / 1000);
    setMinutes(remainMinutes);
    setSeconds(remainSeconds - remainMinutes * 60);
  };

  const resetSignInfo = () => {
    sessionStorage.clear();
    clearInterval(countInterval);
    navigate("/signIn");
    alert("세션이 만료되었습니다");
    setExpirationText("세션이 만료되었습니다");
  };

  const handleSignOut = () => {
    const confirm = window.confirm("로그아웃 하시겠습니까?");
    if (confirm) return resetSignInfo();
  };

  useEffect(() => {
    countInterval = setInterval(expirationTimeCount, 1000);

    if (minutes === 0 && seconds === 59) {
      alert("잠시 후 로그아웃됩니다.");
    } else if (minutes === 0 && seconds === 0) {
      resetSignInfo();
    }
  }, [minutes, seconds]);

  return (
    <header>
      {state?.isLogin && (
        <div>
          만료시간&nbsp;:&nbsp;{minutes > 9 ? minutes : `0${minutes}`}분&nbsp;
          {seconds > 9 ? seconds : `0${seconds}`}초 남았습니다
          <button className="btn-reset-time" onClick={useResetButton}>
            시간 연장하기
          </button>
          <button onClick={handleSignOut}>로그아웃</button>
        </div>
      )}
    </header>
  );
};

export default Header;
