import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => (
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  ));

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);

    update();
    media.addEventListener?.('change', update);
    media.addListener?.(update);

    return () => {
      media.removeEventListener?.('change', update);
      media.removeListener?.(update);
    };
  }, [query]);

  return matches;
}

export function useIsMobile() {
  return useMediaQuery('(max-width: 767px)');
}

export function useCanHover() {
  return useMediaQuery('(hover: hover) and (pointer: fine)');
}
