import type { FC, ReactNode } from 'react';
import { Banner } from '../shared/Banner';

interface HeroData {
  title: string;
  subtitle: string;
  linkCopy: string;
  linkTo: string;
  content: string;
}

interface Props {
  hero: HeroData;
}

export const Hero: FC<Props> = ({ hero }) => <Banner {...hero} />;

export type { HeroData };
