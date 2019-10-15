import { useState, useEffect } from "react";
const useScroll = (min, max) => {
  const [scroll, set] = useState(0);
  useEffect(() => {
    const setting = () => {
      (window.scrollY > min) & (window.scrollY <= max) ? set(true) : set(false);
    };
    window.addEventListener("scroll", setting);
    return () => {
      window.removeEventListener("scroll", setting);
    };
  }, [scroll]);
  return scroll;
};
export default useScroll;
