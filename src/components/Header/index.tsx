import Container from '../Container';
import styles from './Header.module.scss'
import ButtonThemer from '../ButtonThemer';
import { ThemeContext } from '../../Context/ThemeContext';
import { useContext } from 'react';

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`${styles.innerHeader} ${theme === 'light' ? '' : styles.themeHeaderDark}`}>
      <Container>
        <header>
          <h1>Where in the world?</h1>
          <ButtonThemer />
        </header>
      </Container>
    </section>
  )
}
