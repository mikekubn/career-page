import React from 'react';

const option = {
  rootMargin: '10%',
  threshold: 1,
};

const useIntersection = () => {
  const elementRef = React.useRef(null);
  const [visible, setIsVisible] = React.useState<boolean>();

  const handleIntersection = React.useCallback((entry: IntersectionObserverEntry) => {
    setIsVisible(entry.isIntersecting);
  }, []);

  React.useEffect(() => {
    let observerRef: never;
    const observe = new IntersectionObserver(([entry]) => handleIntersection(entry), option);

    if (elementRef.current) {
      observe.observe(elementRef.current);
      observerRef = elementRef.current;
    }

    return () => {
      if (observerRef) {
        observe.unobserve(observerRef);
      }
    };
  }, [elementRef, handleIntersection]);

  return {
    visible,
    add: [elementRef],
  };
};

export { useIntersection };
