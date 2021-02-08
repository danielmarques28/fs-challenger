import styles from '../styles/scss/components/Avatar.module.scss';
import { useState } from 'react';
import EmojiIcon from '../components/EmojiIcon';
import UserBroochAPI from '../api/userBrooch';

export default function Avatar(props) {
  const [showBackground, setShowBackground] = useState(false);

  function giveBrooch(friendId, broochId) {
    const body = {
      user_id: 1, friend_id: friendId, brooch_id: broochId
    };
    UserBroochAPI.create(body)
      .then(function () {
        props.handleUpdate();
      }).catch(function () {});
  }

  function renderBackgroundWithoutBrooch() {
    return (
      <div
        className={styles['background-hover']}
        onClick={() => setShowBackground(!showBackground)}
      >
        <div className={styles['text']}>
          <div className={styles['text-title']}>
            Dê um kudo para
          </div>
  
          <div className={styles['text-name']}>
            {props.user.name}
          </div>
        </div>

        <div className={styles['menu']}>
          <div onClick={() => giveBrooch(props.user.id, 1)}>
            <EmojiIcon
              icon="👨‍🎓"
              backgroundColor="#07a9ed"
              small
            />
          </div>

          <div onClick={() => giveBrooch(props.user.id, 2)}>
            <EmojiIcon
              icon="👏"
              backgroundColor="#fff340"
              small
            />
          </div>

          <div onClick={() => giveBrooch(props.user.id, 3)}>
            <EmojiIcon
              icon="🙏"
              backgroundColor="#ef0382"
              small
            />
          </div>
        </div>
      </div>
    );
  }

  function renderBroochChosen() {
    const broochName = props.broochReceive.name;
    switch (broochName) {
      case 'I learned':
        return <EmojiIcon icon="👨‍🎓" backgroundColor="#07a9ed" small />;
      case 'I\'m grateful':
        return <EmojiIcon icon="🙏" backgroundColor="#ef0382" small />;
      case 'Was awesome':
        return <EmojiIcon icon="👏" backgroundColor="#fff340" small />;
      default:
        return;
    }
  }

  function renderBackgroundWithBroochChosen() {
    return (
      <div
        className={styles['background-hover']}
        onClick={() => setShowBackground(!showBackground)}
      >
        <div className={styles['text']}>
          <div className={styles['text-name']}>
            { props.user.name }
          </div>

          <div className={styles['text-title']}>
            Recebeu
          </div>

          <div className={styles['text-title']}>
            "{ props.broochReceive.name }"
          </div>
        </div>

        <div className={styles['menu']}>
          { renderBroochChosen() }
        </div>
      </div>
    );
  }

  function chooseBackground() {
    if(showBackground && props.broochReceive === null) {
      return renderBackgroundWithoutBrooch();
    } else if(showBackground) {
      return renderBackgroundWithBroochChosen();
    }
  }

  return (
    <div
      className={styles['avatar']}
      onClick={() => setShowBackground(!showBackground)}
      onMouseEnter={() => setShowBackground(true)}
      onMouseLeave={() => setShowBackground(false)}
    >
      <img
        className={styles['image']}
        src={props.user.avatar}
        alt="avatar"
        width="290"
        height="290"
      />

      { chooseBackground() }
    </div>
  );
}
