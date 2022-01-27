import type { FC, ReactNode } from 'react';
import { Container } from '../shared/Container';
import { InfoBlock } from '../shared/InfoBlock';
import { Title } from '../shared/Title';

interface ContactItem {
  title: string;
  icon: string;
  content: ReactNode;
}

interface Props {
  contactItems: ContactItem[];
  sectionTitle: string;
  sectionSubtitle: string;
}

export const ContactInfo: FC<Props> = ({ contactItems, sectionTitle, sectionSubtitle }) => (
  <div className="w-full h-screen">
    <Container isSection>
      <Title title={sectionTitle} subTitle={sectionSubtitle} center />
      <span className="grid grid-flow-row md:grid-cols-3 w-full m-0 p-0">
        {contactItems.map(({ title, icon, content }, index) => (
          <InfoBlock key={`${index}-${title}`} icon={icon} title={title} content={content} center />
        ))}
      </span>
    </Container>
  </div>
);

export type { ContactItem };
