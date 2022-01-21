import type { FC, ReactNode } from 'react';
import { Container } from './Container';
import { Title } from './Title';
import Link from 'next/link';
import { Button } from './Button';
import { Markup } from 'interweave';

interface Props {
  title: string;
  subTitle?: string;
  content: string;
  linkTo: string;
  linkCopy: string;
}

export const Banner: FC<Props> = ({ title, subTitle, content, linkTo, linkCopy }) => (
  <Container isSection>
    <Title subTitle={subTitle} title={title} />
    <div className="mb-8 w-3/4">
      <Markup containerTagName="div" content={content} />
    </div>
    <Link href={linkTo} passHref>
      <Button content={linkCopy} type="primary-link" />
    </Link>
  </Container>
);
