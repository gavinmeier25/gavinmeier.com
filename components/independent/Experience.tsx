import type { FC, ReactNode } from 'react';
import { Container } from '../shared/Container';
import { Timeline, TimelineProps } from '../shared/Timeline';
import { Title } from '../shared/Title';

interface ExperienceItem {
  company: string;
  position: string;
  content: string;
  startDate: string;
  endDate: string;
}

interface Props {
  experiences: ExperienceItem[];
}

export const Experience: FC<Props> = ({ experiences }) => (
  <div className="w-full">
    <Container isSection>
      <Title title="Experience" subTitle="Professional" />

      {experiences.map((experience, index) => (
        <Timeline
          {...experience}
          key={`${experience.position}-${index}`}
          title={experience.company}
          subtitle={experience.position}
        />
      ))}
    </Container>
  </div>
);

export type { ExperienceItem };
