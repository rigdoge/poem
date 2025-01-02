import React from 'react';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import styles from './index.module.css';

export default function Search() {
  return (
    <Layout title="搜索诗词" description="搜索古诗词">
      <div className={styles.searchContainer}>
        <div className={styles.searchHeader}>
          <h1>搜索诗词</h1>
          <p>输入诗词名称、作者或内容进行搜索</p>
        </div>

        <div className={styles.searchBox}>
          <div className={styles.searchWrapper}>
            <div className={styles.searchBarContainer}>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 