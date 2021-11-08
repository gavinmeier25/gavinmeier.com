import type { FC, ReactNode } from 'react';
import { Carousel } from '../shared/Carousel';
import { Container } from '../shared/Container';
import { Title } from '../shared/Title';
import Image from 'next/image';

interface ReferenceProps {
  date: string;
  imageSrc: string;
  title: string;
  content: string;
  name: string;
}

const Reference: FC<ReferenceProps> = ({ imageSrc, title, content, name, date }) => (
  <div className="flex flex-col items-center text-center mt-4">
    <figure className="w-16 h-16 mx-auto border border-green-400 rounded-full">
      <Image
        className="border-3 border-white rounded-full"
        src={imageSrc}
        height={16}
        width={16}
        alt={title}
        layout="responsive"
      />
    </figure>
    <h3 className="font-semibold text-lg mt-4">{name}</h3>
    <h4 className="text-xs font-extralight -mt-1">{title}</h4>
    <h4 className="text-xs font-extralight mb-4">{date}</h4>
    <div>
      <div className="text-left mb-2 leading-tight markdown" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  </div>
);
interface ReferencesProps {
  references: ReferenceProps[];
}

export const References: FC<ReferencesProps> = ({ references }) => (
  <div className="w-full">
    <Container isSection>
      <Title title={'References'} center />
      <div className="max-w-screen-sm mx-auto w-fll px-0 sm:px-16 mb-4">
        <Carousel>
          {references.map((ref, index) => (
            <Reference {...ref} key={index} />
          ))}
        </Carousel>
      </div>
    </Container>
  </div>
);

export type { ReferenceProps };
