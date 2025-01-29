/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

export const useNavAnimate = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 400 && window.scrollY > lastScrollY) {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => setShow(false), 500);
      } else {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return show;
};
