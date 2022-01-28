import { join } from 'path';
import { MetaData } from '../components/independent/Layout';
import { LogoProps, NavItemProps } from '../components/independent/Navbar';
import { retrieveMd } from '../utils/retrieveMd';

interface LayoutMetaProps {
  logo: LogoProps;
  links: NavItemProps[];
  footer: NavItemProps[];
  meta: MetaData;
}

const getLayoutAndMetaDataProps = (pagePath: string) => {
  const logo = retrieveMd(join('layout', 'logo'));
  const links = retrieveMd(join('layout', 'links'));
  const footer = retrieveMd(join('layout', 'footer'));
  const meta = retrieveMd('meta') as unknown as MetaData[];

  return {
    logo: logo[0],
    links,
    footer,
    meta: meta.find((meta) => meta['page'] === pagePath) || '',
  };
};

const getContactInfo = () => {
  const contactItems = retrieveMd('contact');

  return {
    contactItems,
  };
};

const getHomePageDataProps = () => {
  const references = retrieveMd(join('home', 'references'));
  const hero = retrieveMd(join('home', 'hero'));
  const services = retrieveMd(join('home', 'services'));
  return {
    references,
    hero,
    services,
  };
};

const getProfileDataProps = () => {
  const experiences = retrieveMd(join('profile', 'experience')).reverse();
  const education = retrieveMd(join('profile', 'education')).reverse();
  const skills = retrieveMd(join('profile', 'skills'));

  return { experiences, education, skills };
};

export { getLayoutAndMetaDataProps, getHomePageDataProps, getProfileDataProps, getContactInfo };

export type { LayoutMetaProps };
