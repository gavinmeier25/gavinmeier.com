import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Layout } from '../components/independent/Layout';
import { Hero } from '../components/independent/Hero';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const hero = pageProps.hero ? { hero: <Hero hero={pageProps.hero} /> } : {};
  const isHomePage = Object.keys(hero).length > 0 ? true : false;

  return (
    <Layout
      head={{ title: pageProps.meta.title, description: pageProps.meta.description, icon: pageProps.meta.icon }}
      footer={{ links: pageProps.footer }}
      navbar={{ isHomePage, logo: pageProps.logo, links: pageProps.links }}
      {...hero}
    >
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
