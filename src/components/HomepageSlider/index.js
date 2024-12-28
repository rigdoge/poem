import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './styles.module.css';

const slides = [
  {
    title: '李敖大全集',
    description: '收录李敖先生的经典著作与文章',
    image: '/img/slider/slide1.svg',
    link: '/docs/liao',
  },
  {
    title: '陳寅恪文集',
    description: '深入了解中国历史文化的瑰宝',
    image: '/img/slider/slide2.svg',
    link: '/docs/chen',
  },
  {
    title: '儿童书画集',
    description: '激发孩子的艺术创造力',
    image: '/img/slider/slide3.svg',
    link: '/docs/children',
  },
];

export default function HomepageSlider() {
  return (
    <section className={styles.sliderSection}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className={styles.slide}>
            <div className={styles.slideContent}>
              <div className={styles.textContent}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <a href={slide.link} className={styles.button}>
                  了解更多
                </a>
              </div>
              <div 
                className={styles.imageContent}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
} 