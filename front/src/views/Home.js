import styles from '../styles/scss/views/Home.module.scss';
import BroochesDashboard from '../components/BroochesDashboard';
import AvatarsGrid from '../components/AvatarsGrid';

export default function Home() {
  return (
    <div className={styles['home']}>
      <div className={styles['home-title']}>Dê um kudo!</div>

      <BroochesDashboard />

      <AvatarsGrid />
    </div>
  );
}
