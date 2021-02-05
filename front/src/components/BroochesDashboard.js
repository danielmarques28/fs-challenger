import styles from '../styles/scss/components/BroochesDashboard.module.scss';
import EmojiIcon from '../components/EmojiIcon';
import { normalizeDate } from '../helpers';

export default function BroochesDashboard() {
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

      <div className={styles['emoji-list']}>
        <EmojiIcon icon="👨‍🎓" backgroundColor="#07a9ed" quantity={2} />
        <EmojiIcon icon="👏" backgroundColor="#fff340" quantity={2} />
        <EmojiIcon icon="🙏" backgroundColor="#ef0382" quantity={2} />
      </div>
    </div>
  );
}
