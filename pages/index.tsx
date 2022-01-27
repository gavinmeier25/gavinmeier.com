import type { NextPage } from 'next';
import { References, ReferenceProps } from '../components/independent/References';
import { IService, Services } from '../components/independent/Services';
import { getHomePageDataProps, getLayoutAndMetaDataProps, LayoutMetaProps } from '../helpers/getPropData';
import { markdownToHtml } from '../utils/markdownToHtml';
import { HeroData } from '../components/independent/Hero';

interface HomePageProps {
  references: ReferenceProps[];
  hero: HeroData;
  services: IService[];
}

type Props = HomePageProps & LayoutMetaProps;

const Home: NextPage<Props> = ({ logo, links, footer, meta, references, hero, services }) => {
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
      references: await Promise.all(
        references.map(async (ref) => ({ ...ref, content: await markdownToHtml(ref.content) })),
      ),
      services: await Promise.all(
        services.map(async (service) => ({ ...service, content: await markdownToHtml(service.content) })),
      ),
      hero: {
        ...hero[0],
        content: await markdownToHtml(hero[0].content),
      },
    },
  };
};
