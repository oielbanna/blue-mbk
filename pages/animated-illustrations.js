import TitleCard from '@components/title-card';
import Page from '@components/page';
import { ANIMATED_ILLUSTRATIONS } from '@components/animated-illustrations';
import styles from '@components/animated-illustrations.module.scss';

export default function AnimatedIllustrations() {
  return (
    <Page>
      <TitleCard
        title="Animated Illustrations"
        backgroundColor="var(--blue)"
        src="https://static.wixstatic.com/media/b42ec7_87c10be8966a453ead49e8f779426dc1~mv2.jpg/v1/fill/w_1236,h_454,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b42ec7_87c10be8966a453ead49e8f779426dc1~mv2.jpg"
      />

      <div className={styles.animatedIllustrations}>
        {[
          ANIMATED_ILLUSTRATIONS.map((item, i) => {
            return (
              <div key={i} className={styles.item}>
                <img src={`/animated-illustrations/${item.name}`} />
                <h1>{item.subtitle}</h1>
              </div>
            );
          })
        ]}
      </div>
    </Page>
  );
}
