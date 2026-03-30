import { useEffect, useState } from "react";

export default function GoToTop({ footerRef }) {
  const [visible, setVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;

      const scrolledEnough = scrollY > viewport * 0.8;

      let nearFooter = false;

      if (footerRef?.current) {
        const footerTop =
          footerRef.current.getBoundingClientRect().top;

        // 👇 precise trigger (when footer enters viewport)
        nearFooter = footerTop <= viewport - 20;
      }

      setAtBottom(nearFooter);
      setVisible(scrolledEnough || nearFooter);
    };

    window.addEventListener("scroll", handleScroll);
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
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
