import React, { useEffect, useState } from "react";

/**
 * 내가 할 일
 * 1. 초를 카운트하기
 * 2. 60초를 카운트하면 분을 줄이기
 */

const currentTime = sessionStorage.getItem("expirationTime");
let secondsInterval;
const Header = () => {
  const time = new Date(parseInt(currentTime));
  let [signInMinutes, setSignInMinutes] = useState(time.getMinutes());
  let [signInSeconds, setSignInSeconds] = useState(time.getSeconds());

  const secondsCountdown = () => {
    if (signInSeconds >= 0) {
      setSignInSeconds(signInSeconds--);
    } else {
      clearInterval(secondsInterval);
    }
  };

  useEffect(() => {
    secondsInterval = setInterval(() => {
      secondsCountdown();
    }, 1000);
  }, []);

  return (
    <header>
      <div>
        {signInMinutes > 9 ? signInMinutes : `0${signInMinutes}`}분{" "}
        {signInSeconds > 9 ? signInSeconds : `0${signInSeconds}`}초
      </div>
    </header>
  );
};

export default Header;
