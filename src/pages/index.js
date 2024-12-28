import React from 'react';
import Layout from '@theme/Layout';
import HomepageSlider from '@site/src/components/HomepageSlider';
import styles from './index.module.css';
import { IoBookOutline, IoSearchOutline, IoCloudDownloadOutline } from 'react-icons/io5';

export default function Home() {
  return (
    <Layout description="一个现代化的文集展示网站">
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>
                  探索<span className={styles.highlight}>文学瑰宝</span>
                  <br />发现智慧源泉
                </h1>
                <p className={styles.heroSubtitle}>
                  汇集经典文学作品，打造您的专属阅读空间
                </p>
                <div className={styles.heroButtons}>
                  <a href="/docs/intro" className={styles.primaryButton}>
                    开始阅读
                  </a>
                  <a href="/blog" className={styles.secondaryButton}>
                    浏览专栏
                  </a>
                </div>
              </div>
              <div className={styles.heroVisual}>
                <HomepageSlider />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className="container">
            <div className={styles.featuresHeader}>
              <h2>为什么选择我们</h2>
              <p>精心打造的阅读体验，让您沉浸在知识的海洋中</p>
            </div>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <IoBookOutline />
                </div>
                <h3>海量藏书</h3>
                <p>精选各类经典著作，定期更新文集内容，满足您的阅读需求</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <IoSearchOutline />
                </div>
                <h3>智能检索</h3>
                <p>强大的搜索功能，帮助您快速定位感兴趣的内容</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <IoCloudDownloadOutline />
                </div>
                <h3>便捷获取</h3>
                <p>支持在线阅读和内容下载，随时随地享受阅读的乐趣</p>
              </div>
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section className={styles.collections}>
          <div className="container">
            <div className={styles.collectionsHeader}>
              <h2>精选文集</h2>
              <p>汇集多位名家经典，打造优质阅读体验</p>
            </div>
            <div className={styles.collectionsGrid}>
              <a href="/docs/liao" className={styles.collectionCard}>
                <div className={styles.collectionContent}>
                  <h3>李敖大全集</h3>
                  <p>收录李敖先生的经典著作与文章</p>
                </div>
              </a>
              <a href="/docs/chen" className={styles.collectionCard}>
                <div className={styles.collectionContent}>
                  <h3>陳寅恪文集</h3>
                  <p>深入了解中国历史文化的瑰宝</p>
                </div>
              </a>
              <a href="/docs/children" className={styles.collectionCard}>
                <div className={styles.collectionContent}>
                  <h3>儿童书画集</h3>
                  <p>激发孩子的艺术创造力</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
