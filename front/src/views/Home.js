import styles from '../styles/scss/views/Home.module.scss';
import { useState, useEffect } from 'react';
import BroochesDashboard from '../components/BroochesDashboard';
import AvatarsGrid from '../components/AvatarsGrid';
import UserAPI from '../api/user';

export default function Home() {
  const [brooches, setBrooches] = useState(null);
  const [dateTimeNow, setDateTimeNow] = useState('');

  useEffect(() => {
    getRemainingBrooches();
  }, []);

  function getDateTimeNow() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString().slice(0, 5);
    return `${time} - ${date}`;
  }

  function getRemainingBrooches() {
    UserAPI.getRemainingBrooches(1)
      .then(function (response) {
        setBrooches(response.data);
        setDateTimeNow(getDateTimeNow());
      });
  }

  function handleUpdate() {
    getRemainingBrooches();
  }

  return (
    <div className={styles['home']}>
      <div className={styles['home-title']}>Dê um kudo!</div>

      <BroochesDashboard brooches={brooches} dateTimeNow={dateTimeNow} />

      <AvatarsGrid handleUpdate={handleUpdate} />
    </div>
  );
}
