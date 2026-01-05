import { useEffect } from "react";

const useScrollToHash = () => {
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);
    onHashChange(); // run once on load

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
};

export default useScrollToHash;
