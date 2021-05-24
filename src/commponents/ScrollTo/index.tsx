import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollToProps = {
  topOffset: number
}

const ScrollTo = ({topOffset}: ScrollToProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, topOffset);
  }, [pathname, topOffset])

  return null
}

export default ScrollTo;
