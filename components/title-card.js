import styles from '@components/page-with-title.module.css';

export default function TitleCard({ src, title, backgroundColor, children }) {
  return (
    <>
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
      {children}
      {/*<div className={styles.grid}>*/}

      {/*</div>*/}
    </>
  );
}
