import { ReactChild, ReactNode, useState } from 'react';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/pro-duotone-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

interface NavbarProps {
  isHomePage?: boolean;
  logo: LogoProps;
  links: NavItemProps[];
}

export const Navbar: FC<NavbarProps> = ({ isHomePage, logo, links }) => {
  const [open, setOpen] = useState(false);

  const background = isHomePage ? '' : 'bg-gray-50 border-b border-green-200';
  return (
    <header className={`w-full py-1 ${background}`}>
      <div className={`items-center max-w-3xl mx-auto flex`}>
        <Logo {...logo} />
        <nav
          className={`sm:flex flex-col sm:flex-row sm:w-auto w-full order-last sm:order-none my-4 sm:my-0 hidden ${
            open ? 'flex' : ''
          }`}
        >
          {links.map((data) => (
            <NavItem key={data.copy} {...data} />
          ))}
        </nav>
        <MobileNavButton isOpen={open} toggle={() => setOpen((prev) => !prev)}>
          <Logo {...logo} />
          <br />
          {links.map((data) => (
            <NavItem key={data.copy} {...data} />
          ))}
        </MobileNavButton>
      </div>
    </header>
  );
};

const MobileNavButton: FC<{ toggle: () => void; isOpen: boolean; children: ReactNode }> = ({
  toggle,
  isOpen,
  children,
}) => (
  <>
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed h-screen border-r-4 border-green-200 bg-gray-50 z-30 p-8"
            animate={{ x: 0, y: '42%', opacity: [0.7, 0.8, 0.9, 1] }}
            transition={{ duration: 0.4, type: 'tween' }}
            exit={{ x: '-100%', opacity: [1, 0.9, 0.8, 0.7] }}
            initial={{ x: '-100%', y: '42%', opacity: 0.7 }}
          >
            <div className="flex flex-col p-4 align-items-center">{children}</div>
          </motion.div>
          <motion.div
            onClick={toggle}
            className="fixed h-screen w-screen bg-gray-700 opacity-70 z-20 p-8"
            transition={{ delay: 0.1, duration: 0.2 }}
            animate={{ x: 100, y: '42%', opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7] }}
            initial={{ x: 100, y: '42%', opacity: 0 }}
            exit={{ x: 100, y: '42%', opacity: [0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0] }}
          />
        </>
      )}
    </AnimatePresence>
    <div className="sm:hidden w-full justify-end align-middle h-full flex ">
      <button
        onClick={toggle}
        className="flex flex-col h-full items-end  justify-center cursor-pointer  pr-3 sm:hidden outline-none"
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.span animate={{ opacity: 1 }} transition={{ delay: 0.3 }} initial={{ opacity: 0 }} key={'nav-1'}>
              <FontAwesomeIcon size="2x" icon={faBars} />
            </motion.span>
          )}
          {isOpen && (
            <motion.span animate={{ opacity: 1 }} transition={{ delay: 0.3 }} initial={{ opacity: 0 }} key={'nav-3'}>
              <FontAwesomeIcon size="2x" icon={faTimes} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  </>
);

interface NavItemProps {
  href: string;
  copy: string;
}

const NavItem: FC<NavItemProps> = ({ href, copy }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`relative m-4 text-grey-700 border-b border-transparent hover:text-green-500 ml-0 sm:ml-8 mt-3 sm:mt-0 max-w-max ${
          router.pathname === href
            ? 'before:-bottom-1 before:absolute before:w-full before:bg-green-500 before:h-px'
            : 'before:-bottom-1 before:scale-0 before:transition before:duration-500 before:absolute before:w-full before:bg-green-500 hover:before:scale-100 before:h-px before:left-0 before:invisible hover:before:visible'
        } `}
      >
        {copy}
      </a>
    </Link>
  );
};

interface LogoProps {
  alt: string;
  header: string;
  initials: boolean;
  invert: boolean;
  leftLetter: string;
  rightLetter: string;
  src: string;
}

const Logo: FC<LogoProps> = ({ alt, header, initials, invert, leftLetter, rightLetter, src }) => (
  <Link href="/">
    <a className="flex items-center mr-auto text-gray-700 hover:text-green-500">
      <figure className="w-24 h-32 mr-3 border bg-gray-700 border-green-500 ring-offset-gray-700 rounded-full ring-4 ring-offset-1 ring-gray-700 pt-2">
        <Image src={src} height={24} width={20} layout="responsive" alt={alt} />
      </figure>
      <h1 className="text-4xl uppercase font-mono font-bold">
        {initials && (
          <>
            {invert && (
              <span>
                <style jsx>{`
                  span {
                    position: absolute;
                    -moz-transform: scale(-1, 1);
                    -webkit-transform: scale(-1, 1);
                    -o-transform: scale(-1, 1);
                    -ms-transform: scale(-1, 1);
                    transform: scale(-1, 1);
                  }
                `}</style>
                {leftLetter}
              </span>
            )}
            {!invert && <span>{leftLetter}</span>}
            <span className={`relative ${invert ? 'left-4' : ''}`}>{rightLetter}</span>
          </>
        )}
        {!initials && <>{header}</>}
      </h1>
    </a>
  </Link>
);

export type { NavItemProps, LogoProps, NavbarProps };
