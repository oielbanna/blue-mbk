import Nav from '@components/menu/Navigation';
import styles from '@components/Header.module.css';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Header({ title, displayLogo }) {
  const router = useRouter();
  return (
    <header className={styles.header}>
      {/* <h1 className={styles.title}> */}
      {/*  {title} */}
      {/* </h1> */}
      {/*  // TODO make this img a dynamic component */}
      <motion.img
        animate={{ display: router.pathname.includes('') }}
        height="76vh"
        src="https://static.wixstatic.com/media/b42ec7_66733353ca35499291579824de98eee1~mv2.png/v1/fill/w_477,h_683,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kapal%C4%B1goz.png"
      />
      <Nav isOpen={false} />
    </header>
  );
}
