import { useEffect, useState, useRef } from "react";

export function UseInView() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento es visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Cuando el elemento deja de ser visible
        }
      },
      { threshold: 0.2 } // Se activa cuando al menos el 50% del elemento es visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}
