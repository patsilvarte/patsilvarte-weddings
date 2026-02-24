import { useMediaQuery } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { useScrollLock } from "usehooks-ts";

const SCROLL_UNLOCK_KEY = "homepageScrollUnlockedAt";

export const useLock = () => {
  const { unlock, lock, isLocked } = useScrollLock();
  const location = useLocation();
  const navigationType = useNavigationType();
  const isMobile = !useMediaQuery("(min-width:900px)");

  const markScrollUnlocked = useCallback(() => {
    sessionStorage.setItem(SCROLL_UNLOCK_KEY, Date.now().toString());
    unlock();

    // HARD RESET (this is the key)
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }, [unlock]);

  useEffect(() => {
    const cameFromAnotherPage = navigationType === "PUSH";
    if (cameFromAnotherPage || isMobile) {
      markScrollUnlocked();
      return;
    }
    const lastUnlocked = sessionStorage.getItem(SCROLL_UNLOCK_KEY);
    const shouldLock = !lastUnlocked;

    if (shouldLock) {
      window.scrollTo(0, 0);
      lock();
    } else {
      markScrollUnlocked();
    }
  }, [
    location.pathname,
    unlock,
    lock,
    navigationType,
    markScrollUnlocked,
    isMobile,
  ]);

  useEffect(() => {
    // HARD RESET to allow scroll on other pages
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return {
    unlock: markScrollUnlocked,
    lock,
    isLocked,
  };
};
