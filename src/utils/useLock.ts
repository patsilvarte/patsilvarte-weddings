import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { useScrollLock } from "usehooks-ts";

const SCROLL_UNLOCK_KEY = "homepageScrollUnlockedAt";
const COOLDOWN_MS = 10 * 60 * 1000; // 10 minutes

export const useLock = () => {
  const { unlock, lock, isLocked } = useScrollLock();
  const location = useLocation();
  const navigationType = useNavigationType();

  const shouldLockScroll = () => {
    const lastUnlocked = sessionStorage.getItem(SCROLL_UNLOCK_KEY);
    if (!lastUnlocked) return true;

    const elapsed = Date.now() - Number(lastUnlocked);
    return elapsed > COOLDOWN_MS;
  };

  const markScrollUnlocked = () => {
    sessionStorage.setItem(SCROLL_UNLOCK_KEY, Date.now().toString());
    unlock();
  };

  useEffect(() => {
    const cameFromAnotherPage = navigationType === "PUSH";

    if (cameFromAnotherPage) {
      markScrollUnlocked();
      return;
    }

    if (shouldLockScroll()) {
      window.scrollTo(0, 0);
      lock();
    } else {
      markScrollUnlocked();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return {
    unlock: markScrollUnlocked,
    lock,
    isLocked,
  };
};
