import type { NextPage } from 'next';
import { References, ReferenceProps } from '../components/independent/References';
import { Services, IService } from '../components/independent/Services';
import { getHomePageDataProps, getLayoutAndMetaDataProps, LayoutMetaProps } from '../helpers/getPropData';
import { HeroData } from '../components/independent/Hero';

interface HomePageProps {
  references: ReferenceProps[];
  hero: HeroData;
  services: IService[];
}

type Props = HomePageProps & LayoutMetaProps;

const Home: NextPage<Props> = ({ references, services }) => {
  return (
    <>
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
