import { useEffect } from "react";
import { useLocation } from "react-router";
import AOS from "aos";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Espera a que React termine de renderizar
    setTimeout(() => {
      AOS.refreshHard();
    }, 100);

  }, [pathname]);

  return null;
}

export default ScrollToTop;