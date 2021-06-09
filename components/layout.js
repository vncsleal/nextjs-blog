import Link from 'next/link';
import Nav from './nav';

const Layout = ({ children, categories, seo }) => (
  <>
    <div className="flex flex-col justify-between bg-white dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col space-y-2 ">
        <Nav />
        {children}
      </div>
      <div>
        <footer className="text-gray-500 dark:text-gray-400 font-mono text-center p-2 text-xs md:p-4 md:text-sm">
          feito com ❤︎ por vinicius leal. me encontre em{' '}
          <Link href="https://about.me/vncsleal">
            <a className="hover:text-gray-700 dark:hover:text-gray-300">
              @vncsleal
            </a>
          </Link>
          .
        </footer>
      </div>
    </div>
  </>
);

export default Layout;
