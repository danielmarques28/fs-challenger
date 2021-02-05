import styles from '../styles/scss/components/EmojiIcon.module.scss';

export default function EmojiIcon(props) {
  function renderQuantity() {
    if(props.quantity !== undefined) {
      return (
        <div className={styles['quantity-number']}>
          {props.quantity}
        </div>
      );
    }
  }

  return (
    <div className={styles['emoji-icon-div']}>
      <div
        className={styles['icon']}
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.icon}
      </div>

      { renderQuantity() }
    </div>
  );
}
