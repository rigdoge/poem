import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const FeatureList = [
  {
    title: '唐诗',
    description: '唐诗是中国古典诗歌的巅峰，体现了盛唐气象。',
    link: '/docs/poetry/tang/intro',
  },
  {
    title: '宋词',
    description: '宋词以其婉约、豪放著称，展现了宋代文人的情怀。',
    link: '/docs/poetry/song/intro',
  },
  {
    title: '元曲',
    description: '元曲集诗词之大成，融合了民间文学的特色。',
    link: '/docs/poetry/yuan/intro',
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
        <Link className={styles.featureLink} to={link}>
          了解更多 →
        </Link>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link className={styles.primaryButton} to="/docs/poetry/tang/intro">
            开始阅读
          </Link>
          <Link className={styles.secondaryButton} to="/blog">
            博客文章
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="传承中华文化，品味诗词之美">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
