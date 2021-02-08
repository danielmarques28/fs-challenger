import styles from '../styles/scss/components/Footer.module.scss';

export default function Footer() {
  function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div
      className={styles['footer']}
      onClick={goToTop}
    >
      voltar ao topo
    </div>
  );
}
