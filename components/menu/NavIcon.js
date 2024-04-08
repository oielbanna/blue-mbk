import styles from '@components/menu/Menu.module.scss';
import { motion } from 'framer-motion';

function NavIcon({ className, onClick, innerRef }) {
  return (
    <motion.button onClick={onClick} className={className} ref={innerRef}>
      <span className={styles.hamburger__box} ref={innerRef}>
        <span className={styles.hamburger__inner} ref={innerRef} />
      </span>
    </motion.button>
  );
}

export default NavIcon;
