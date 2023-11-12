import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { state } = useLocation();

  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

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
        </div>
      )}
    </header>
  );
};

export default Header;
