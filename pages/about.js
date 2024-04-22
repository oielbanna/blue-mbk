import { MUSIC_VIDEOS } from '@components/music-videos';
import styles from '@components/music-videos.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Page from '@components/page';

export default function About() {
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
    <Page>
      <h1>Blue MBK</h1>
      <p style={{ color: 'whitesmoke' }}>
        Blue M.B.K. is a multidisciplinary artist born in Turkiye, based in Toronto. Blue studied
        Film design and Animation, on her last year had to flee the country. After a long journey
        she came to Toronto as a refugee and built a freelance career as an animator, videographer
        and photographer and has worked with musicians all over the world. After producing music
        videos with several artists, Spotify has begun to promote her work. Right after this, she
        signed a year long contract with Thought Cafe and worked on Crash Course and Study Hall
        videos as an animator. She is also now an alumni of Toronto Art Council's ArtoworksTO
        program of 2023. Blue is currently strengthening her story telling skills and discovering
        more creative ways to document her journey.
      </p>
    </Page>
  );
}
