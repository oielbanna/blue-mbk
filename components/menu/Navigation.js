// Core
import {useEffect, useRef, useState} from 'react';
import styles from '@components/menu/Menu.module.scss';
import NavIcon from '@components/menu/NavIcon';
import Menu from '@components/menu/Menu';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                if (isOpen) {
                    setIsOpen(false)
                }
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef, isOpen]);
  const handleClick = () => {
    setIsOpen(!isOpen)
  };

    return (
      <>
        <NavIcon
            innerRef={containerRef}
          onClick={handleClick}
          className={
            isOpen ? `${styles.hamburger} ${styles.hamburgeractive}` : styles.hamburger
          }
        />
        <Menu
            innerRef={containerRef}
          className={
            isOpen
              ? `${styles.navigation} ${styles.navigationactive}`
              : styles.navigation
          }
        />
      </>
    );
}

export default Nav;
