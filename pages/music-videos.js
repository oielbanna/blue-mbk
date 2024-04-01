import { MUSIC_VIDEOS } from '@components/music-videos';
import styles from '@components/music-videos.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MusicVideos() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className={styles.musicVideos}>
      {MUSIC_VIDEOS.map((video) => {
        return (
          <Link href={`${video.link}`}>
            <motion.div whileHover={{ y: -5 }} variants={item} className={styles.element}>
              <div dangerouslySetInnerHTML={{ __html: video.embed }} />
              <h1>{video.subtitle}</h1>
              <h2>{video.title}</h2>
            </motion.div>
          </Link>
        );
      })}
    </motion.div>
  );
}
