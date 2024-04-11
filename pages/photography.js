import { MUSIC_VIDEOS } from '@components/music-videos';
import styles from '@components/photography.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Page from '@components/page';
import TitleCard from '@components/title-card';

export default function Photography() {
  return (
    <Page>
      {/*<TitleCard*/}
      {/*  title="Photography"*/}
      {/*  backgroundColor="var(--blue)"*/}
      {/*  src="https://static.wixstatic.com/media/b42ec7_87c10be8966a453ead49e8f779426dc1~mv2.jpg/v1/fill/w_1236,h_454,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b42ec7_87c10be8966a453ead49e8f779426dc1~mv2.jpg"*/}
      {/*/>*/}
      <div style={{ marginTop: 100, minWidth: '1100px' }}>
        <div className={styles.dilettante}>
          <div className={styles.textBox}>
            <h1 className={styles.title}>Dilettante</h1>
            <h2 className={styles.subtitle}>Nice People Sessions</h2>
            <h3 className={styles.subtitle}>2022</h3>
          </div>
          <img style={{ marginTop: -200, maxWidth: 500 }} src="/concert-photos/dilettante/1.jpg" />
          <img
            style={{ left: 'calc(100% - 550px)', maxWidth: 510, marginTop: -320 }}
            src="/concert-photos/dilettante/2.jpg"
          />
          <img style={{ maxWidth: 370,
              left: 70,
              top: -20 }} src="/concert-photos/dilettante/3.jpg" />
          <img  style={{ maxWidth: 450,
              left: 'calc(100% - 560px)',
              marginTop: -430
          }} src="/concert-photos/dilettante/4.jpg" />
        </div>
      </div>
    </Page>
  );
}
