import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

const MastersList = [
  {
    name: '韩愈',
    dynasty: '唐',
    title: '唐宋八大家之首',
    description: '文章巨匠，倡导古文运动，被尊为"文章之祖"。',
    years: '768-824',
    link: '/docs/poetry/classic/others',
  },
  {
    name: '柳宗元',
    dynasty: '唐',
    title: '诗文大家',
    description: '与韩愈并称"韩柳"，山水文学代表作家。',
    years: '773-819',
    link: '/docs/poetry/classic/others',
  },
  {
    name: '欧阳修',
    dynasty: '宋',
    title: '诗文双绝',
    description: '北宋文坛领袖，著有《醉翁亭记》等传世名作。',
    years: '1007-1072',
    link: '/docs/poetry/song/intro',
  },
  {
    name: '苏洵',
    dynasty: '宋',
    title: '三苏之父',
    description: '与两子并称"三苏"，以议论文见长。',
    years: '1009-1066',
    link: '/docs/poetry/song/intro',
  },
  {
    name: '苏轼',
    dynasty: '宋',
    title: '文豪',
    description: '诗文书画全能，被誉为"中国最伟大的文人"。',
    years: '1037-1101',
    link: '/docs/poetry/song/sushi',
  },
  {
    name: '苏辙',
    dynasty: '宋',
    title: '三苏之一',
    description: '与父兄齐名，文章清丽雅正。',
    years: '1039-1112',
    link: '/docs/poetry/song/intro',
  },
  {
    name: '王安石',
    dynasty: '宋',
    title: '变法家',
    description: '政治家文学家，诗文与政论并重。',
    years: '1021-1086',
    link: '/docs/poetry/song/intro',
  },
  {
    name: '曾巩',
    dynasty: '宋',
    title: '散文大家',
    description: '以散文著称，风格严谨峻洁。',
    years: '1019-1083',
    link: '/docs/poetry/song/intro',
  },
];

function MasterCard({ name, dynasty, title, description, years, link }) {
  return (
    <Link to={link} className={styles.masterCardLink}>
      <div className={styles.masterCard}>
        <div className={styles.masterInfo}>
          <span className={styles.dynasty}>{dynasty}</span>
          <h3 className={styles.masterName}>{name}</h3>
          <div className={styles.masterTitle}>{title}</div>
          <p className={styles.masterDescription}>{description}</p>
          <div className={styles.masterYears}>{years}</div>
        </div>
      </div>
    </Link>
  );
}

export default function EightMasters() {
  return (
    <section className={styles.mastersSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>唐宋八大家</h2>
          <p className={styles.sectionSubtitle}>
            唐宋时期最具代表性的散文家，他们的作品对后世产生了深远的影响
          </p>
        </div>
        <div className={styles.mastersGrid}>
          {MastersList.map((master, idx) => (
            <MasterCard key={idx} {...master} />
          ))}
        </div>
      </div>
    </section>
  );
} 