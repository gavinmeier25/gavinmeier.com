import type { NextPage } from 'next';
import { References, ReferenceProps } from '../components/independent/References';
import { IService, Services } from '../components/independent/Services';
import { Layout } from '../components/independent/Layout';
import { getHomePageDataProps, getLayoutAndMetaDataProps, LayoutMetaProps } from '../helpers/getPropData';
import { markdownToHtml } from '../utils/markdownToHtml';
import { Hero, HeroData } from '../components/independent/Hero';

interface HomePageProps {
  references: ReferenceProps[];
  hero: HeroData;
  services: IService[];
}

type Props = HomePageProps & LayoutMetaProps;

const Home: NextPage<Props> = ({ logo, links, footer, meta, references, hero, services }) => {
  return (
    <Layout
      head={{
        title: meta.title,
        description: meta.description,
        icon: meta.icon,
      }}
      hero={<Hero hero={hero} />}
      footer={{ links: footer }}
      navbar={{ isHomePage: true, logo, links }}
    >
      <Services services={services} />
      <References references={references} />
    </Layout>
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
