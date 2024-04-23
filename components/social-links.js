import React from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from '@components/social-links.module.scss';

export const CONTACTS = {
  LINKEDIN: {
    URL: 'https://www.linkedin.com/in/blue-merve-betul-karakus-1815461a6/',
    LOGO: {
      __html:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>'
    }
  },
  INSTAGRAM: {
    URL: 'https://www.instagram.com/bluembk/',
    LOGO: {
      __html:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 16 16">\n' +
        '  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>\n' +
        '</svg>'
    }
  }
};

const parentVariant = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.4 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

function Links({ isColumn }) {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    return scrollYProgress.on('change', (y) => setShow(y > 0.94));
  }, [scrollYProgress]);

  const liVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 100, velocity: -10 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 100 }
      }
    }
  };
  return (
    <motion.ul
      variants={parentVariant}
      initial="closed"
      animate={show ? 'open' : 'closed'}
      className={styles.socialContainer}
      style={{ gridTemplateColumns: `repeat(${Object.entries(CONTACTS).length}, 1fr)` }}
    >
      {Object.entries(CONTACTS).map(([platform, data], key) => {
        return (
          <motion.a target="_blank" variants={liVariants} key={platform} href={data.URL}>
            <li className={styles.socialLink} dangerouslySetInnerHTML={data.LOGO} />
          </motion.a>
        );
      })}
    </motion.ul>
  );
}

export default Links;
