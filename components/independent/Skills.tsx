import type { FC } from 'react';
import { Container } from '../shared/Container';
import { ProgressBar } from '../shared/ProgressBar';
import { Title } from '../shared/Title';

interface SkillProps {
  title: string;
  percentage: number;
}

interface SkillsProps {
  skills: SkillProps[];
}

export const Skills: FC<SkillsProps> = ({ skills }) => (
  <div className="w-full border-t">
    <Container isSection>
      <Title center title="Languages" subTitle="Level of Expertise" />
      <div className="flex flex-wrap w-full">
        {skills.map((skill, index) => (
          <div key={`${skill.title}-${index}`} className="w-full sm:w-1/2">
            <ProgressBar {...skill} />
          </div>
        ))}
      </div>
    </Container>
  </div>
);
