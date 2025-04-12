import { useState, useEffect } from 'react';

const mediaQueries = {
  desktop: '(min-width: 1024px)',
  tablet: '(max-width: 768px)',
  mobile: '(max-width: 480px)',
};

type TmediaQueries = keyof typeof mediaQueries;

const useMediaQuery = (query: string | TmediaQueries) => {
  const queryString = (
    Object.keys(mediaQueries) as Array<TmediaQueries>
  ).includes(query as TmediaQueries)
    ? mediaQueries[query as TmediaQueries]
    : query;

  const [matches, setMatches] = useState<boolean>(
    () => window.matchMedia(queryString).matches
  );

  useEffect(() => {
    const mediaQuertList = window.matchMedia(queryString);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuertList.addEventListener('change', listener);

    return () => mediaQuertList.removeEventListener('change', listener);
  }, [queryString]);

  return matches;
};

export default useMediaQuery;
