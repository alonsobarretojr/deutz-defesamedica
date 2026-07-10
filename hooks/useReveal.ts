import { useEffect, useRef, useState, type CSSProperties } from 'react';

type Reveal<T extends HTMLElement> = {
  ref: React.RefObject<T>;
  className: string;
  style: CSSProperties | undefined;
  visible: boolean;
};

export function useReveal<T extends HTMLElement>(delayMs = 0): Reveal<T> {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: `reveal${visible ? ' is-visible' : ''}`,
    style: delayMs ? { transitionDelay: `${delayMs}ms` } : undefined,
    visible,
  };
}
