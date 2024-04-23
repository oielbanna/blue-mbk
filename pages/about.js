import { MUSIC_VIDEOS } from '@components/music-videos';
import { motion } from 'framer-motion';
import Page from '@components/page';
import styles from '@components/about.module.scss';
import SocialLinks from '@components/social-links';

export default function About() {
  return (
    <Page>
      <section className={styles.about}>
        <img src={'/dead-eyes.gif'} alt="Blue gif" />
        <div className={styles.bio}>
          <h1>Blue MBK</h1>
          <h2>Blue M.B.K. is a multidisciplinary artist born in Turkiye, based in Toronto.</h2>
          <p>
            Blue studied Film design and Animation, on her last year had to flee the country. After
            a long journey she came to Toronto as a refugee and built a freelance career as an
            animator, videographer and photographer and has worked with musicians all over the
            world. After producing music videos with several artists, Spotify has begun to promote
            her work.
          </p>
          <p>
            Right after this, she signed a year long contract with Thought Cafe and worked on Crash
            Course and Study Hall videos as an animator. She is also now an alumni of Toronto Art
            Council's ArtoworksTO program of 2023. Blue is currently strengthening her story telling
            skills and discovering more creative ways to document her journey.
          </p>
        </div>
        <div className={styles.contact}>
          <h1>Contact</h1>
          <p>bluemervebk@gmail.com</p>

          <p>
            Toronto <br /> <span style={{ textTransform: 'uppercase' }}>Canada</span>
          </p>
          <SocialLinks />
        </div>
      </section>
    </Page>
  );
}
