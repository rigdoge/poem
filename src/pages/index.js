import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx('button button--primary button--lg', styles.heroButton)}
              to="/docs/poetry/tang/intro">
              开始探索
            </Link>
            <Link
              className={clsx('button button--outline button--lg', styles.heroButton)}
              to="/blog">
              阅读博客
            </Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImage}>
            <div className={styles.glowingOrb}></div>
            <div className={styles.floatingText}>诗</div>
            <div className={styles.floatingText}>词</div>
            <div className={styles.floatingText}>之</div>
            <div className={styles.floatingText}>美</div>
          </div>
        </div>
      </div>
      <div className={styles.heroWave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </header>
  );
}

function FeatureCard({title, description, icon}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: '智能拼音',
      description: '借助AI技术，为古诗词提供准确的拼音标注，帮助您更好地诵读经典。',
      icon: '🤖'
    },
    {
      title: '深度解析',
      description: '运用现代技术手段，深入分析诗词的意境、格律和历史背景。',
      icon: '🔍'
    },
    {
      title: '互动学习',
      description: '通过评论、分享和讨论，与其他诗词爱好者交流心得体会。',
      icon: '💡'
    }
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
