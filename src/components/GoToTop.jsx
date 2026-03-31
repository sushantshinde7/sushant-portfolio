import { useEffect, useRef, useState } from "react";

export default function GoToTop({ footerRef }) {
  const [visible, setVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const pathARef = useRef(null);
  const pathXRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // 🔽 footer detection
      let nearFooter = false;
      if (footerRef?.current) {
        const footerTop =
          footerRef.current.getBoundingClientRect().top;

        nearFooter = footerTop <= viewport - 20;
      }

      setAtBottom(nearFooter);

      // =========================
      // 🎯 ANIMATION RANGE
      // =========================

      const start = viewport * 0.7;
      const end = fullHeight - viewport * 0.2;

      let progress = (scrollY - start) / (end - start);
      progress = Math.max(0, Math.min(progress, 1));

      // =========================
      // 🔥 VISIBILITY
      // =========================

      if (progress > 0 && progress < 1) {
        setVisible(true);
      } else if (nearFooter) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // =========================
      // 🎨 STROKE CONTROL
      // =========================

      const pathA = pathARef.current;
      const x1 = pathXRef.current[0];
      const x2 = pathXRef.current[1];

      if (!pathA || !x1 || !x2) return;

      const lengthA = pathA.getTotalLength();
      const len1 = x1.getTotalLength();
      const len2 = x2.getTotalLength();

      // =========================
      // 🎯 TIMELINE CONTROL
      // =========================

      const splitPoint = 0.7;
      const overlap = 0.14; // 🔥 earlier X start

      const p = progress;

      // A timeline
      let progressA =
        p < splitPoint ? p / splitPoint : 1;

      // X timeline
      const startX = splitPoint - overlap;

      let progressX =
        p < startX
          ? 0
          : (p - startX) / (1 - startX);

      // easing
      progressA = Math.pow(progressA, 1.2);
      progressX = Math.pow(progressX, 0.9);

      // ✅ fix incomplete stroke (tiny overshoot)
      const progressXSafe = Math.min(progressX * 1.02, 1);

      // =========================
      // 🔺 APPLY A
      // =========================

      pathA.style.strokeDasharray = lengthA;
      pathA.style.strokeDashoffset =
        lengthA * (1 - progressA);

      // =========================
      // ❌ APPLY X (REVERSED)
      // =========================

      [x1, x2].forEach((path, i) => {
        const len = i === 0 ? len1 : len2;

        path.style.strokeDasharray = len;

        // 🔥 bottom → top + full completion
        path.style.strokeDashoffset =
          -len + len * progressXSafe;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

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
        {/* 🔺 A */}
        <path
          ref={pathARef}
          d="M12 0.5 L2.5 23.5
             M12 0.5 L21.5 23.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* ❌ X (split) */}
        <path
          ref={(el) => (pathXRef.current[0] = el)}
          d="M7 11 L21.5 23.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          ref={(el) => (pathXRef.current[1] = el)}
          d="M17 11 L2.5 23.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}