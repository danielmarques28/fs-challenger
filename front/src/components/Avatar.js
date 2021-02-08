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
          {
            props.brooches['I learned']['amount_remain'] > 0 ?
            <div onClick={() => giveBrooch(
              props.user.id,
              props.brooches['I learned']['id']
            )}>
              <EmojiIcon
                icon="👨‍🎓"
                backgroundColor="#07a9ed"
                small
              />
            </div> : <div />
          }

          {
            props.brooches['Was awesome']['amount_remain'] > 0 ?
            <div onClick={() => giveBrooch(
              props.user.id,
              props.brooches['Was awesome']['id']
            )}>
              <EmojiIcon
                icon="👏"
                backgroundColor="#fff340"
                small
              />
            </div> : <div />
          }

          {
            props.brooches['I\'m grateful']['amount_remain'] > 0 ?
            <div onClick={() => giveBrooch(
              props.user.id,
              props.brooches['I\'m grateful']['id']
            )}>
              <EmojiIcon
                icon="🙏"
                backgroundColor="#ef0382"
                small
              />
            </div> : <div />
          }
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
        </div>

        <div className={styles['text']}>
          <div className={styles['text-title']}>
            Recebeu
          </div>

          <div className={styles['text-brooch-name']}>
            "{ props.broochReceive.name }"
          </div>
        </div>

        <div className={styles['menu']}>
          { renderBroochChosen() }
        </div>
      </div>
    );
  }

  function countTotalRemainsBrooches() {
    let count = 0;
    if(props.brooches !== null) {
      const broochesKeys = Object.keys(props.brooches);

      for(let key of broochesKeys) {
        count += props.brooches[key]['amount_remain'];
      }
    }
    return count;
  }

  function chooseBackground() {
    const count = countTotalRemainsBrooches();
    if(showBackground && props.broochReceive === null && count > 0) {
      return renderBackgroundWithoutBrooch();
    } else if(props.broochReceive !== null) {
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
