"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = () => {
      const targets = document.querySelectorAll(".reveal, .reveal-stagger");
      targets.forEach((el) => observer.observe(el));
    };

    // Run immediately for hard refreshes, then again after a tick
    // to catch elements rendered after client-side navigation
    observe();
    const timer = setTimeout(observe, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}
