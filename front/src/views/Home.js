import styles from '../styles/scss/views/Home.module.scss';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BroochesDashboard from '../components/BroochesDashboard';
import AvatarsGrid from '../components/AvatarsGrid';
import UserAPI from '../api/user';

export default function Home() {
  const [brooches, setBrooches] = useState(null);
  const [dateTimeNow, setDateTimeNow] = useState('');

  useEffect(() => {
    UserAPI.getRemainingBrooches()
      .then(function (response) {
        setBrooches(response.data);
        setDateTimeNow(getDateTimeNow());
      }).catch(function () {});
  }, []);

  function getDateTimeNow() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString().slice(0, 5);
    return `${time} - ${date}`;
  }

  function getRemainingBrooches() {
    UserAPI.getRemainingBrooches()
      .then(function (response) {
        setBrooches(response.data);
        setDateTimeNow(getDateTimeNow());
      }).catch(function () {});
  }

  function handleUpdate() {
    getRemainingBrooches();
  }

  return (
    <div>
      <Header />

      <div className={styles['home']}>
        <div className={styles['home-title']}>
          Dê um kudo!
        </div>

        <BroochesDashboard
          brooches={brooches}
          dateTimeNow={dateTimeNow}
        />

        <AvatarsGrid handleUpdate={handleUpdate} />
      </div>

      <Footer />
    </div>
  );
}
