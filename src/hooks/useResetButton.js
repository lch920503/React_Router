export const useResetButton = () => {
  sessionStorage.setItem("accessTime", Date.now());
  sessionStorage.setItem("expirationTime", Date.now() + 30 * 60 * 1000);
};
