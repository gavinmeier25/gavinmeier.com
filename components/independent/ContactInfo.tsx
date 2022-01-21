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
  <div className="w-full ">
    <Container isSection>
      <Title title={sectionTitle} subTitle={sectionSubtitle} center />
      <div className="flex flex-wrap">
        {contactItems.map(({ title, icon, content }, index) => (
          <div className="w-full sm:w-1/3 " key={`${index}-${title}`}>
            <InfoBlock icon={icon} title={title} content={content} center />
          </div>
        ))}
      </div>
    </Container>
  </div>
);

export type { ContactItem };
