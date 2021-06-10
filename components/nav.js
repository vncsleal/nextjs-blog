import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRef, useEffect } from 'react';

const Nav = () => {
  const useIsMounted = () => {
    const isMounted = useRef(false);
    useEffect(() => {
      isMounted.current = true;
      return () => (isMounted.current = false);
    }, []);
    return isMounted;
  };
  const isMounted = useIsMounted();
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <nav className="flex justify-between mx-2 md:mx-20 items-center my-2">
        <div className="font-mono text-base md:text-xl font-bold text-gray-900 dark:text-gray-100">
          <Link href="/">
            <a>cartas para um astronauta.</a>
          </Link>
        </div>
        <div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-2 focus:outline-none"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {isMounted.current && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-5 w-5 text-gray-900 dark:text-gray-100">
                {theme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
