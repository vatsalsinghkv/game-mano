'use client';

import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { CustomLeftArrow, CustomRightArrow } from '../images/CustomArrow';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    partialVisibilityGutter: 100,
  },
};

type Props = {
  className?: string;
  children: React.ReactNode;
  config?: ResponsiveType;
  infinite?: boolean;
};

const Slider = ({
  className = '',
  children,
  infinite = false,
  config = responsive,
}: Props) => {
  return (
    <Carousel
      arrows
      swipeable={true}
      draggable
      responsive={config}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      ssr={false}
      slidesToSlide={1}
      keyBoardControl={true}
      infinite={infinite}
      autoPlay={true}
      autoPlaySpeed={1500}
      className={className}
    >
      {children}
    </Carousel>
  );
};

export default Slider;
