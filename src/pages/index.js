import React from 'react';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import styles from './index.module.css';

export default function Search() {
  return (
    <Layout title="古诗文" description="传统诗词赏析">
      <div className={styles.pageBackground} />
      <div className={styles.searchContainer}>
        <div className={styles.searchHeader}>
          <h1>探索诗歌之美</h1>
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