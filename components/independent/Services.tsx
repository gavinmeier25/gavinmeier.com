import type { FC, ReactNode } from 'react';
import { Container } from '../shared/Container';
import { InfoBlock } from '../shared/InfoBlock';
import { Title } from '../shared/Title';

export interface IService {
  title: string;
  icon: ReactNode;
  description: string;
}

const Service: FC<{ title: string; icon: ReactNode; description: string }> = ({ description, title, icon }) => (
  <div className="w-full sm:w-1/2">
    <InfoBlock title={title} content={description} icon={icon} />
  </div>
);

interface Props {
  services: IService[];
}
export const Services: FC<Props> = ({ services }) => {
  return (
    <Container isSection>
      <Title center title="what I do" subTitle="Services" />
      <div className="flex flex-wrap -mx-3">
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </Container>
  );
};

export type { Service };
