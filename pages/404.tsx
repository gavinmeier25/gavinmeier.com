import { Layout } from '../components/independent/Layout';
import type { NextPage } from 'next';
import { getLayoutAndMetaDataProps, LayoutMetaProps } from '../helpers/getPropData';
import Image from 'next/image';

const Custom404: NextPage<LayoutMetaProps> = ({ meta, footer, logo, links }) => (
  <Layout
    head={{
      ...meta,
    }}
    footer={{ links: footer }}
    navbar={{ isHomePage: false, logo, links }}
  >
    <div className="flex h-screen w-screen text-center flex-wrap justify-center align-items-center">
      <div className="w-64 relative mt-12 h-2/5">
        <h2 className="absolute text-center w-full text-3xl -top-10">404</h2>
        <div className="rounded-full overflow-hidden">
          <Image src={'/finn.JPG'} alt="oops" layout="fill" />
        </div>
        <div className="h-1 text-lg absolute -bottom-2">Oops you walked down a path that {"doesn't"} exist</div>
      </div>
    </div>
  </Layout>
);

export default Custom404;

export const getStaticProps = async () => {
  return {
    props: {
      ...getLayoutAndMetaDataProps('/404'),
    },
  };
};
