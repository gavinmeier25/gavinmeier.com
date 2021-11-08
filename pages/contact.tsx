import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/independent/Layout';
import { Navbar } from '../components/independent/Navbar';
import { getLayoutAndMetaDataProps, LayoutMetaProps } from '../helpers/getPropData';

interface ProfileProps {
  experience: unknown;
}

type Props = ProfileProps & LayoutMetaProps;

const Contact: NextPage<Props> = ({ meta, footer, logo, links }) => {
  return (
    <Layout
      head={{
        title: meta.title,
        description: meta.description,
        icon: meta.icon
      }}
      footer={{ links: footer }}
      navbar={{ isHomePage: false, logo, links }}
    >
      <div>test</div>
    </Layout>
  );
};

export default Contact;

export const getStaticProps = async () => {
  return {
    props: {
      ...getLayoutAndMetaDataProps('/contact')
    }
  };
};
