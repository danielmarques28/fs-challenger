import styles from '../styles/scss/components/Header.module.scss';
import { useState, useEffect } from 'react';
import UserAPI from '../api/user';

function Header(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserAPI.showCurrentUser()
      .then(function (response) {
        setUser(response.data);
      });
  }, []);

  function logout() {
    localStorage.removeItem('token');
    props.history.push('/');
  }

  return (
    <header className={styles['app-header']}>
      <div className={styles['app-header-logo']}>
        <div className={styles['logo-image']} />
      </div>

      <div className={styles['container']}>
        <div className={styles['container-menu']}>
          <div className={styles['menu-option']}>
            Dê um kudo
          </div>

          <div className={styles['menu-option']}>
            Timeline
          </div>

          <div className={styles['menu-option']}>
            Meus kudos
          </div>
        </div>

        <div className={styles['container-profile']}>

          {
            user !== null ?
            <div className={styles['profile']}>
              <div className={styles['profile-avatar']}>
                <img
                  src={user.avatar}
                  alt="profile-avatar"
                  width="35"
                  height="35"
                  className={styles['image']}
                />
              </div>

              <div className={styles['profile-name']}>
                { user.name }
              </div>
            </div> : <div />
          }

          <div
            className={styles['menu-option']}
            onClick={logout}
          >
            Logout
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
