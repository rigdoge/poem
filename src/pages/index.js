import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { IoRocketSharp, IoLayersSharp, IoFlashSharp } from "react-icons/io5";
import { FaDatabase, FaBrain, FaNetworkWired } from "react-icons/fa";

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroGrid}></div>
        <div className={styles.heroGlow}></div>
      </div>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleTech}>AI</span>
            驱动的诗词
            <span className={styles.heroTitleTech}>数字星河</span>
          </h1>
          <p className={styles.heroSubtitle}>
            用科技重新定义传统 · 让古典诗词焕发新生
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.heroButtonPrimary} to="/docs/poetry/tang/intro">
              <IoRocketSharp className={styles.heroButtonIcon} />
              <span>开启探索</span>
              <div className={styles.heroButtonGlow}></div>
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroHologram}>
            <div className={styles.hologramRing}></div>
            <div className={styles.hologramCore}></div>
            <div className={styles.hologramText}>诗</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureSection() {
  const features = [
    {
      title: '智能分析',
      description: '运用AI技术深度解析诗词内涵',
      icon: <FaBrain />,
    },
    {
      title: '数据驱动',
      description: '海量诗词数据的智能处理',
      icon: <FaDatabase />,
    },
    {
      title: '知识图谱',
      description: '构建诗词关联的知识网络',
      icon: <FaNetworkWired />,
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.featuresInner}>
        {features.map((feature, idx) => (
          <div key={idx} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
            <div className={styles.featureGlow}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExploreSection() {
  const categories = [
    {
      title: '唐诗',
      description: '穿越时空，感受盛唐气象',
      icon: <IoLayersSharp />,
      link: '/docs/poetry/tang/intro',
    },
    {
      title: '宋词',
      description: '品味宋词的婉约与豪放',
      icon: <IoFlashSharp />,
      link: '/docs/poetry/song/intro',
    },
    {
      title: '元曲',
      description: '探索元曲的独特魅力',
      icon: <IoRocketSharp />,
      link: '/docs/poetry/yuan/intro',
    },
  ];

  return (
    <section className={styles.explore}>
      <div className={styles.exploreInner}>
        <div className={styles.exploreGrid}>
          {categories.map((category, idx) => (
            <Link
              key={idx}
              to={category.link}
              className={styles.exploreCard}
            >
              <div className={styles.exploreIcon}>{category.icon}</div>
              <h3 className={styles.exploreTitle}>{category.title}</h3>
              <p className={styles.exploreDescription}>{category.description}</p>
              <div className={styles.exploreGlow}></div>
            </Link>
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
      description="探索诗词的数字星河，在科技与传统的交汇处，重新解读中华文化的永恒魅力。">
      <main className={styles.main}>
        <HeroSection />
        <FeatureSection />
        <ExploreSection />
      </main>
    </Layout>
  );
}
