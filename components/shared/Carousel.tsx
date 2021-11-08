import type { FC, ReactNode } from 'react';
import Slider from 'react-slick';
import Head from 'next/head';

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  infinite: true,
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const Carousel: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
    <style jsx>
      {`
        .slick-slider {
          max-width: 100%;
          padding-bottom: 2rem;
        }

        .slick-dots li button:before,
        .slick-dots li.slick-active button:before {
          font-size: 12px !important;
          opacity: 0.5 !important;
        }

        .slick-dots li button:before {
          color: #5a67d8 !important;
        }

        .slick-dots li.slick-active button:before {
          opacity: 1 !important;
        }
      `}
    </style>
    <Slider {...settings}>{children}</Slider>
  </>
);
