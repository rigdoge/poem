import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { FaBook, FaHeadphones, FaUsers } from 'react-icons/fa';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '唐诗',
    description: '唐诗是中国古典诗歌的巅峰，体现了盛唐气象。让我们一起领略诗仙李白、诗圣杜甫等大家的不朽佳作。',
    icon: <FaBook className={styles.featureIcon} />,
    link: '/docs/poetry/tang/intro',
  },
  {
    title: '宋词',
    description: '宋词以其婉约、豪放著称，展现了宋代文人的情怀。苏轼、李清照等词人的作品让我们感受千年之前的文化魅力。',
    icon: <FaHeadphones className={styles.featureIcon} />,
    link: '/docs/poetry/song/intro',
  },
  {
    title: '元曲',
    description: '元曲集诗词之大成，融合了民间文学的特色。关汉卿、马致远等曲作家的作品展现了元代社会的方方面面。',
    icon: <FaUsers className={styles.featureIcon} />,
    link: '/docs/poetry/yuan/intro',
  },
];

function Feature({title, description, icon, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconWrapper}>
          {icon}
        </div>
        <div className={styles.featureContent}>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
          <Link className={styles.featureLink} to={link}>
            了解更多 <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>探索诗词之美</h2>
          <p className={styles.sectionSubtitle}>
            让我们一起领略中国传统文化的魅力，感受诗词的韵律之美
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
