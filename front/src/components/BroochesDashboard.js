import styles from '../styles/scss/components/BroochesDashboard.module.scss';
import EmojiIcon from '../components/EmojiIcon';

export default function BroochesDashboard(props) {

  return (
    <div className={styles['brooches-dashboard']}>
      <div className={styles['header']}>
        <div className={styles['title']}>
          Selos disponíveis
        </div>

        <div className={styles['update-date']}>
          Atualizado em { props.dateTimeNow }
        </div>
      </div>

      {
        props.brooches !== null ?
          <div className={styles['emoji-list']}>
            <EmojiIcon
              icon="👨‍🎓"
              backgroundColor="#07a9ed"
              quantity={props.brooches['I learned']['amount_remain']}
            />
            <EmojiIcon
              icon="👏"
              backgroundColor="#fff340"
              quantity={props.brooches['Was awesome']['amount_remain']}
            />
            <EmojiIcon
              icon="🙏"
              backgroundColor="#ef0382"
              quantity={props.brooches['I\'m grateful']['amount_remain']}
            />
          </div> : <div />
      }
    </div>
  );
}
