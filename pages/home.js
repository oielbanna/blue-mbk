import styles from '@components/landing.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  const itemMovement = 35;
  const leftItem = {
    hidden: { x: itemMovement, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };
  const rightItem = {
    hidden: { x: itemMovement * -1, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };

  const hover = {
    scale: 1.03,
    transition: { duration: 0.1 }
  };

  return (
    <div className={styles.landing}>
      <motion.ul variants={container} initial="hidden" animate="show" className={styles.list}>
        <motion.li variants={leftItem} whileHover={hover}>
          <Link href="#">Animation Portfolio</Link>
        </motion.li>
        <motion.li variants={leftItem} whileHover={hover}>
          <Link href="/music-videos">Music Videos</Link>
        </motion.li>
        <motion.li variants={leftItem} whileHover={hover}>
          <Link href="/animated-illustrations">Animated Illustrations</Link>
        </motion.li>
      </motion.ul>
      <img src="https://static.wixstatic.com/media/b42ec7_66733353ca35499291579824de98eee1~mv2.png/v1/fill/w_477,h_683,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kapal%C4%B1goz.png" />
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        style={{ textAlign: 'right' }}
        className={styles.list}
      >
        <motion.li variants={rightItem} whileHover={hover}>
          <Link href="#">Vertical Videos</Link>
        </motion.li>
        <motion.li variants={rightItem} whileHover={hover}>
          <Link href="#">Photography</Link>
        </motion.li>
        <motion.li variants={rightItem} whileHover={hover}>
          <Link href="#">About</Link>
        </motion.li>
      </motion.ul>
    </div>
  );
}
