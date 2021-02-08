import styles from '../styles/scss/components/AvatarsGrid.module.scss';
import { useState, useEffect } from 'react';
import Avatar from '../components/Avatar';
import UserAPI from '../api/user';

export default function AvatarsGrid(props) {
  const [users, setUsers] = useState([]);
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    getAllUsers();
    getAllInteractions();
  }, []);

  function getAllUsers() {
    UserAPI.index()
      .then(function (response) {
        setUsers(response.data);
      }).catch(function () {});
  }

  function getAllInteractions() {
    UserAPI.getAllInteractions()
    .then(function (response) {
      setInteractions(response.data);
    }).catch(function () {});
  }

  function handleUpdate() {
    getAllInteractions();
    props.handleUpdate();
  }

  function getBroochReceive(userId) {
    let brooch = null;
    for(let interaction of interactions) {
      if(interaction.friend_id === userId) {
        brooch = interaction.brooch;
      }
    }
    return brooch;
  }

  return (
    <div className={styles['avatars-grid']}>
      {
        users.map((user, index) => (
          <Avatar
            key={index}
            broochReceive={getBroochReceive(user.id)}
            handleUpdate={handleUpdate}
            user={user}
          />
        ))
      }
    </div>
  );
}
