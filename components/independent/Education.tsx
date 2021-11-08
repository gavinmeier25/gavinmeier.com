import type { FC, ReactNode } from 'react';
import { Container } from '../shared/Container';
import { Timeline } from '../shared/Timeline';
import { Title } from '../shared/Title';

interface Props {
  education: {
    university: string;
    degree: string;
    startDate: string;
    endDate: string;
    content: ReactNode;
  }[];
}
export const Education: FC<Props> = ({ education }) => (
  <div className="w-full border-t">
    <Container isSection>
      <Title title="Education" subTitle="Degrees" />

      {education.map((ed, index) => (
        <Timeline {...ed} key={`${ed.university}-${index}`} title={ed.university} subtitle={ed.degree} />
      ))}
    </Container>
  </div>
);
