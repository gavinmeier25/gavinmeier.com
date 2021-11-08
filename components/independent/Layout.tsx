import type { FC, ReactNode } from 'react';
import { Navbar, NavbarProps } from './Navbar';
import Head from 'next/head';
import { Footer, FooterProps } from './Footer';

interface Props {
  navbar: NavbarProps;
  footer: FooterProps;
  head: {
    title: string;
    description: string;
    icon: string;
  };
  children: ReactNode;
  hero?: ReactNode;
}

interface MetaData {
  page: string;
  title: string;
  icon: string;
  description: string;
}

export const Layout: FC<Props> = ({ navbar, footer, head, children, hero }) => (
  <>
    <Head>
      <title>{head.title}</title>
      <meta name="description" content={head.description} />
      <link rel="icon" href={head.icon} />
    </Head>
    {navbar.isHomePage && hero && (
      <div className="flex flex-wrap w-full justify-center bg-gray-50 border-b border-green-200 decoration-clone">
        <Navbar {...navbar} />
        {hero}
      </div>
    )}
    {!hero && !navbar.isHomePage && <Navbar {...navbar} />}
    <main className="flex flex-wrap w-full justify-center">{children}</main>
    <Footer {...footer} />
  </>
);

export type { MetaData };
