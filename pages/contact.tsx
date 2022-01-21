import type { NextPage } from 'next';
import { ContactInfo, ContactItem } from '../components/independent/ContactInfo';
import { Layout } from '../components/independent/Layout';
import { getContactInfo, getLayoutAndMetaDataProps, LayoutMetaProps } from '../helpers/getPropData';

interface ContactProps {
  contactItems: ContactItem[];
}

type Props = ContactProps & LayoutMetaProps;

const Contact: NextPage<Props> = ({ contactItems, meta, footer, logo, links }) => {
  return (
    <Layout
      head={{
        ...meta,
      }}
      footer={{ links: footer }}
      navbar={{ isHomePage: false, logo, links }}
    >
      <ContactInfo contactItems={contactItems} sectionTitle="Contact Me" sectionSubtitle="" />
    </Layout>
  );
};

export default Contact;

export const getStaticProps = async () => {
  return {
    props: {
      ...getLayoutAndMetaDataProps('/contact'),
      ...getContactInfo(),
    },
  };
};
