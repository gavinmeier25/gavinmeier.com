import type { FC } from 'react';
import { Container } from '../shared/Container';
import Link from 'next/link';
import { Button } from '../shared/Button';
import { NavItemProps } from './Navbar';

interface FooterProps {
  links: NavItemProps[];
}

export const Footer: FC<FooterProps> = ({ links }) => (
  <footer className="border-t text-center border-gray-200 py-4">
    <Container>
      {links.map((link, index) => (
        <Link key={`${link.copy}-${index}`} href={link.href} passHref>
          <Button type="secondary-link" content={link.copy} />
        </Link>
      ))}
    </Container>
  </footer>
);
export type { FooterProps };
