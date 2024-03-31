import styles from "@components/landing.module.css";
import Link from 'next/link';

export default function Landing() {
    return (
        <div className={styles.landing}>
            <ul className={styles.list}>
                <li><Link href="#">Animation Portfolio</Link></li>
                <li><Link href="#">Music Videos</Link></li>
                <li><Link href="#">Animated Illustrations</Link></li>
            </ul>
    <img src="https://static.wixstatic.com/media/b42ec7_66733353ca35499291579824de98eee1~mv2.png/v1/fill/w_477,h_683,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kapal%C4%B1goz.png"></img>
            <ul style={{ textAlign: 'right' }} className={styles.list}>
                <li><Link href="#">Vertical Videos</Link></li>
                <li><Link href="#">Photography</Link></li>
                <li><Link href="#">About</Link></li>
            </ul>
            </div>)
}
