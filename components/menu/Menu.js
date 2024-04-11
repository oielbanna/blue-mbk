// Core
import styles from '@components/menu/Menu.module.scss';

function Menu({ className, innerRef }) {
  return (
    <div className={className} ref={innerRef}>
      <ul className={styles.navigation__list}>
        {[
          {
            name: 'Animated Illustrations',
            link: '/animated-illustrations'
          },
          {
            name: 'Music Videos',
            link: '/music-videos'
          }
        ].map((item) => {
          return (
            <a href={item.link}>
              <li key={item.link} className={styles.navigation__item}>
                {item.name}
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
