import styles from '../styles/scss/components/AvatarsGrid.module.scss';
import { useState, useEffect } from 'react';
import Avatar from '../components/Avatar';

export default function AvatarsGrid() {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    setPerson([
      {
        avatar: 'https://s2.glbimg.com/xM4lZI5btPrUiyailc19W2XMYfI=/120x120/top/smart/s2.glbimg.com/tcpZux4ZdyYRuNrlJfz5d8X48n8=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/S/K/jraPzSRuyCTnR8U3YKJw/babu-santana.png',
        name: 'Babu Santana'
      },
      {
        avatar: 'https://s2.glbimg.com/xM4lZI5btPrUiyailc19W2XMYfI=/120x120/top/smart/s2.glbimg.com/tcpZux4ZdyYRuNrlJfz5d8X48n8=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/S/K/jraPzSRuyCTnR8U3YKJw/babu-santana.png',
        name: 'Babu Santana'
      },
      {
        avatar: 'https://s2.glbimg.com/xM4lZI5btPrUiyailc19W2XMYfI=/120x120/top/smart/s2.glbimg.com/tcpZux4ZdyYRuNrlJfz5d8X48n8=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/S/K/jraPzSRuyCTnR8U3YKJw/babu-santana.png',
        name: 'Babu Santana'
      },
      {
        avatar: 'https://s2.glbimg.com/xM4lZI5btPrUiyailc19W2XMYfI=/120x120/top/smart/s2.glbimg.com/tcpZux4ZdyYRuNrlJfz5d8X48n8=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/S/K/jraPzSRuyCTnR8U3YKJw/babu-santana.png',
        name: 'Babu Santana'
      },
      {
        avatar: 'https://s2.glbimg.com/xM4lZI5btPrUiyailc19W2XMYfI=/120x120/top/smart/s2.glbimg.com/tcpZux4ZdyYRuNrlJfz5d8X48n8=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/S/K/jraPzSRuyCTnR8U3YKJw/babu-santana.png',
        name: 'Babu Santana'
      },
    ]);
  }, []);

  return (
    <div className={styles['avatars-grid']}>
      {
        person.map((person, index) => (
          <Avatar key={index} person={person} />
        ))
      }
    </div>
  );
}
