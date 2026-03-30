import { useEffect, useRef, useState } from "react";

export default function GoToTop({ footerRef }) {
  const [visible, setVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const lastScrollY = useRef(0);
  const pathRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const scrolledEnough = scrollY > viewport * 0.8;
      const scrollingUp = scrollY < lastScrollY.current;

      // 🔽 footer detection
      let nearFooter = false;
      if (footerRef?.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;

        nearFooter = footerTop <= viewport - 20;
      }

      setAtBottom(nearFooter);

      // 🔥 visibility logic (UNCHANGED)
      if (nearFooter) {
        setVisible(true);
      } else if (scrolledEnough && scrollingUp) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      lastScrollY.current = scrollY;

      // 🔥 NEW: stroke drawing logic
      if (pathRef.current) {
        const scrollProgress = scrollY / (fullHeight - viewport);

        // easing (feels natural, not linear)
        const eased = Math.pow(scrollProgress, 0.7);

        const totalLength = pathRef.current.getTotalLength();

        pathRef.current.style.strokeDasharray = totalLength;
        pathRef.current.style.strokeDashoffset = totalLength * (1 - eased);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerRef]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`goTopBtn ${visible ? "visible" : ""} ${
        atBottom ? "lifted" : ""
      }`}
      onClick={scrollTop}
      aria-label="Scroll to top"
    >
      <svg viewBox="0 0 24 24" width="20" height="20">
        <path
          ref={pathRef}
          d=" M12 0.5 L2.5 23.5
              M12 0.5 L21.5 23.5
              M7 11 L21.5 23.5
              M17 11 L2.5 23.5 "
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </button>
  );
}
