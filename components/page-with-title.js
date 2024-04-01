import styles from '@components/page-with-title.module.css';

export default function PageWithTitle({ src, title, backgroundColor }) {
    return (<>
        <div className={styles.titleContainer}>
            <div className={styles.titleImage}>
                <img src={src} />
            </div>
            <div className={styles.titleCard}>
                <div style={{ backgroundColor }}>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
        <div className={styles.grid}>

        </div>
    </>)
}
