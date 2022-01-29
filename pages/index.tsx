import type { NextPage } from 'next';
import { References, ReferenceProps } from '../components/independent/References';
import { Services, IService } from '../components/independent/Services';
import { getHomePageDataProps, getLayoutAndMetaDataProps, LayoutMetaProps } from '../helpers/getPropData';
import { HeroData } from '../components/independent/Hero';
import Head from 'next/head';

interface HomePageProps {
  references: ReferenceProps[];
  hero: HeroData;
  services: IService[];
}

type Props = HomePageProps & LayoutMetaProps;

const Home: NextPage<Props> = ({ references, services }) => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Gavin Meier" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.gavinmeier.com/_next/image?url=%2Favatar.svg&w=1920&q=75" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://gavinmeier.com" />
        {/* <meta property="twitter:card" content="Gavin Meier" /> */}
      </Head>
      <Services services={services} />
      <References references={references} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { hero, references, services } = getHomePageDataProps();
  return {
    props: {
      ...getLayoutAndMetaDataProps('/'),
      references,
      services,
      hero: hero[0],
    },
  };
};
