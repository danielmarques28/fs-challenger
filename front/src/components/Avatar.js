import styles from '../styles/scss/components/Avatar.module.scss';
import { useState, useEffect } from 'react';
import EmojiIcon from '../components/EmojiIcon';

export default function Avatar(props) {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {

  }, []);

  function renderBackground() {
    if(showBackground) {
      return (
        <div className={styles['background-hover']}>
          <div className={styles['text']}>
            <div className={styles['text-title']}>
              Dê um kudo para
            </div>
    
            <div className={styles['text-name']}>
              {props.person.name}
            </div>
          </div>
  
          <div className={styles['menu']}>
            <EmojiIcon icon="👨‍🎓" backgroundColor="#07a9ed" small />
            <EmojiIcon icon="👏" backgroundColor="#fff340" small />
            <EmojiIcon icon="🙏" backgroundColor="#ef0382" small />
          </div>
        </div>
      );
    }
  }

  return (
    <div
      className={styles['avatar']}
      onMouseEnter={() => setShowBackground(true)}
      onMouseLeave={() => setShowBackground(false)}
    >
      <img src={props.person.avatar} alt="avatar" />

      { renderBackground() }
    </div>
  );
}
