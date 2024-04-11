import styles from '@components/page-with-title.module.css';

export default function TitleCard({ src, title, backgroundColor, children }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.titleImage}>
          <img src={src} />
        </div>
        <div style={{ backgroundColor }} className={styles.titleCard}>
          <h1>{title}</h1>
        </div>
      </div>
      {children}
      {/* <div className={styles.grid}> */}

      {/* </div> */}
    </>
  );
}
