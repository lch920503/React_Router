import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useButton } from "../../hooks/useButton";

const Header = () => {
  const { state } = useLocation();

  const [resetExpirationTime] = useButton();

  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);

  const expirationTimeCount = () => {
    let currentTime = new Date();
    let expirationTime = new Date(
      parseInt(sessionStorage.getItem("expirationTime"))
    );
    let remainTime = expirationTime.getTime() - currentTime.getTime();
    const remainMinutes = Math.floor(remainTime / (1000 * 60));
    const remainSeconds = Math.floor(remainTime / 1000);
    setMinutes(remainMinutes);
    setSeconds(remainSeconds - remainMinutes * 60);
  };

  useEffect(() => {
    setInterval(expirationTimeCount, 1000);
  }, [minutes, seconds]);

  return (
    <header>
      {state?.isLogin && (
        <div>
          만료시간&nbsp;:&nbsp;{minutes > 9 ? minutes : `0${minutes}`}분&nbsp;
          {seconds > 9 ? seconds : `0${seconds}`}초 남았습니다
          <button className="btn-reset-time" onClick={resetExpirationTime}>
            시간 연장하기
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
