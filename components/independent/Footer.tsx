import type { FC } from 'react';
import { Container } from '../shared/Container';
import Link from 'next/link';
import { Button } from '../shared/Button';
import { NavItemProps } from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faTwitter, faEthereum, faGithub } from '@fortawesome/free-brands-svg-icons';

interface FooterProps {
  links: NavItemProps[];
}

const getIcon = (iconWanted: string): FontAwesomeIconProps['icon'] => {
  switch (iconWanted.toLowerCase()) {
    case 'github':
      return faGithub;
    case 'twitter':
      return faTwitter;
    case '.eth':
      return faEthereum;
    default:
      return faEthereum;
  }
};

export const Footer: FC<FooterProps> = ({ links }) => (
  <footer className="border-t flex flex-row justify-center text-center border-gray-200">
    {links.map((link, index) => (
      <div key={`${link.copy}-${index}`} className="flex flex-wrap justify-center items-center">
        <Link href={link.href} passHref>
          <Button
            id={link.copy}
            type="secondary-link"
            content={
              <div className="flex flex-wrap justify-center p-4">
                <FontAwesomeIcon
                  aria-labelledby={link.copy}
                  className="hover:cursor-pointer w-full"
                  size="2x"
                  icon={getIcon(link.copy)}
                />
                <div className="w-full mt-2">{link.copy}</div>
              </div>
            }
          />
        </Link>
      </div>
    ))}
  </footer>
);
export type { FooterProps };
