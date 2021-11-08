import type { NextPage } from 'next';
import { References, ReferenceProps } from '../components/independent/References';
import { Services } from '../components/independent/Services';
import { Banner } from '../components/shared/Banner';
import { Layout } from '../components/independent/Layout';
import { getLayoutAndMetaDataProps, getReferenceDataProps, LayoutMetaProps } from '../helpers/getPropData';
import { markdownToHtml } from '../utils/markdownToHtml';

interface HomePageProps {
  references: ReferenceProps[];
}

type Props = HomePageProps & LayoutMetaProps;

const Home: NextPage<Props> = ({ logo, links, footer, meta, references }) => {
  console.log(references);
  return (
    <Layout
      head={{
        title: meta.title,
        description: meta.description,
        icon: meta.icon
      }}
      hero={
        <Banner
          title="Software Developer"
          subTitle="Gavin Meier"
          linkCopy="Learn more"
          linkTo="/contact"
          content={
            <p>
              Strong drive to make the right choices and implement the best possible solutions. Proven track record in
              enterprise consulting. Avid knowledge seeker with current interests in blockchain technology.
            </p>
          }
        />
      }
      footer={{ links: footer }}
      navbar={{ isHomePage: true, logo, links }}
    >
      <Services />
      <References references={references} />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      ...getLayoutAndMetaDataProps('/'),
      references: await Promise.all(
        getReferenceDataProps().map(async (ref) => ({ ...ref, content: await markdownToHtml(ref.content) }))
      )
    }
  };
};
