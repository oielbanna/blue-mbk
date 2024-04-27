import TitleCard from '@components/title-card';
import Page from '@components/page';
import styles from '@components/vertical-videos.module.scss';
import { VERTICAL_VIDEOS } from '@components/vertical-videos';
import { motion } from 'framer-motion';

export default function VerticalVideos() {
  return (
    <Page>
      <TitleCard
        title="Vertical Videos"
        backgroundColor="var(--blue)"
        src="https://static.wixstatic.com/media/b42ec7_87c10be8966a453ead49e8f779426dc1~mv2.jpg/v1/fill/w_1236,h_454,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b42ec7_87c10be8966a453ead49e8f779426dc1~mv2.jpg"
      />

      <div className={styles.animatedIllustrations}>
        {[
          VERTICAL_VIDEOS.map((item, i) => {
            return (
              <div key={i} className={styles.item}>
                <motion.video
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  src={`/vertical-videos/${item.name}`}
                  preload="auto"
                />
              </div>
            );
          })
        ]}
      </div>
    </Page>
  );
}
