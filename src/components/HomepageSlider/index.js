import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: '探索古诗词之美',
    description: '让我们一起领略中国传统文化的魅力，感受诗词之美。',
    image: '/img/slides/poetry.svg',
    link: '/docs/poetry/tang/intro',
  },
  {
    title: '在线朗读体验',
    description: '配备专业朗读音频，让您更好地欣赏诗词韵律。',
    image: '/img/slides/audio.svg',
    link: '/docs/poetry/song/intro',
  },
  {
    title: '互动学习社区',
    description: '加入我们的社区，与其他诗词爱好者交流分享。',
    image: '/img/slides/community.svg',
    link: '/docs/poetry/yuan/intro',
  },
];

export default function HomepageSlider() {
  return (
    <section className={styles.sliderSection}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.slideContent}>
              <div className={styles.textContent}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link to={slide.link} className={styles.button}>
                  了解更多
                </Link>
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