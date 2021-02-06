import styles from '../styles/scss/components/BroochesDashboard.module.scss';
import { useState, useEffect } from 'react';
import EmojiIcon from '../components/EmojiIcon';
import { normalizeDate } from '../helpers';
import UserAPI from '../api/user';

export default function BroochesDashboard() {
  const [brooches, setBrooches] = useState(null);

  function getRemainingBrooches() {
    UserAPI.getRemainingBrooches(1)
      .then(function (response) {
        setBrooches(response.data);
      });
  }

  useEffect(() => {
    getRemainingBrooches();
  }, []);

  return (
    <div className={styles['brooches-dashboard']}>
      <div className={styles['header']}>
        <div className={styles['title']}>
          Selos disponíveis
        </div>

        <div className={styles['update-date']}>
          Atualizado em {normalizeDate('2021-02-05')}
        </div>
      </div>

      {
        brooches !== null ?
          <div className={styles['emoji-list']}>
            <EmojiIcon
              icon="👨‍🎓"
              backgroundColor="#07a9ed"
              quantity={brooches['I learned']}
            />
            <EmojiIcon
              icon="👏"
              backgroundColor="#fff340"
              quantity={brooches['I\'m grateful']}
            />
            <EmojiIcon
              icon="🙏"
              backgroundColor="#ef0382"
              quantity={brooches['Was awesome']}
            />
          </div> : <div />
      }
    </div>
  );
}
