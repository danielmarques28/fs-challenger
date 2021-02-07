# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  #    movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }] )
#   Character.create(name: 'Luke', movie: movies.first)
require 'uri'

users = User.create([
  { name: 'Felipe', email: 'felipe@gmail.com', password: '123456' },
  { name: 'Babu Santana', email: 'babu@gmail.com', password: '123456' },
  { name: 'Flayslane', email: 'flayslane@gmail.com', password: '123456' },
  { name: 'Bianca Andrade', email: 'bianca@gmail.com', password: '123456' },
  { name: 'Gizelly', email: 'gizelly@gmail.com', password: '123456' },
  { name: 'Gabi Martins', email: 'gabi@gmail.com', password: '123456' },
  { name: 'Guilherme', email: 'guilherme@gmail.com', password: '123456' },
  { name: 'Pyong Lee', email: 'pyong@gmail.com', password: '123456' },
  { name: 'Hadson', email: 'hadson@gmail.com', password: '123456' },
  { name: 'Lucas Chumbo', email: 'lucaschumbo@gmail.com', password: '123456' },
  { name: 'Lucas', email: 'lucas@gmail.com', password: '123456' },
  { name: 'Manu Gavassi', email: 'manu@gmail.com', password: '123456' },
  { name: 'Marcela', email: 'marcela@gmail.com', password: '123456' },
  { name: 'Mari González', email: 'mari@gmail.com', password: '123456' },
  { name: 'Thelma', email: 'thelma@gmail.com', password: '123456' },
  { name: 'Petrix Barbosa', email: 'petrix@gmail.com', password: '123456' },
  { name: 'Victor Hugo', email: 'victor@gmail.com', password: '123456' },
  { name: 'Rafa Kalimann', email: 'rafa@gmail.com', password: '123456' },
  { name: 'Daniel', email: 'daniel@gmail.com', password: '123456' },
  { name: 'Ivy ', email: 'ivy@gmail.com', password: '123456' }
])

urls = [
  'https://s2.glbimg.com/UfB_uMX76hd9JlhFoB1VOKULO_0=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/N/P/pk3uDTSsuHGL10pWPhpw/felipe-bbb-20.jpg',
  'https://s2.glbimg.com/73ONzSQ-9_B6KzGCH9MQGwq1q20=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/a/t/UAgBHeS1KwNVCozz76eA/babu-santana-bbb-20.jpg',
  'https://s2.glbimg.com/xGWsPAoesyFz0KgStrCmcQ1MSks=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/a/d/9Ege12TMOBdy2Pd8B29Q/flayslane-bbb-20.jpg',
  'https://s2.glbimg.com/QLpTKzGiCrYvBmw9XeTMmzNYdSA=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/r/J/Dn2xx0QIOvw9PDoagK7Q/bianca-andrade-bbb-20.jpg',
  'https://s2.glbimg.com/5-OF8ncHYX5AUdkTLen-DqfTm9M=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/I/m/mIo7CySe6HwGepg8CBlw/gizelly-bbb-20.jpg',
  'https://s2.glbimg.com/enp6G-Pq7RB7Advrb4oNxwCzjA0=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/l/O/GL59c2RBukLAh7Hg804Q/gabi-martins-bbb-20.jpg',
  'https://s2.glbimg.com/bBcaUavDh8E7MFiPpMzh9t0gkWQ=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/8/U/EiZACpS1SjX5ejoGUM9Q/guilherme-bbb-20.jpg',
  'https://s2.glbimg.com/RZRY6pgfnFJBpUJoXegHPrCP4_M=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/R/L/BsFrUxSlq9I8cBCfkNYA/pyong-lee-bbb-20.jpg',
  'https://s2.glbimg.com/lrSCUQDVyvGM7P_7BkHklILWnnU=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/a/3/1NtAI9SZyvZTZtXJsh7w/hadson-bbb-20.jpg',
  'https://s2.glbimg.com/aFVNqAJ6hWCHUmU353lVQFjJYwM=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/7/R/xPWyoVRLqtm6T0AQRUTg/lucas-chumbo-bbb-20.jpg',
  'https://s2.glbimg.com/VEAX7jCpBG-WF9LxNHxQP2yRIdc=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/n/w/gAcRryReuXh8apx5eGTw/lucas-bbb-20.jpg',
  'https://s2.glbimg.com/lJJvGdKkKKVdZljVERWvYTX0eHU=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/E/X/JPnqb8S4KkBwPO1AxqaQ/manu-gavassi-bbb-20.jpg',
  'https://s2.glbimg.com/BX4LlMtqpOfOun3mKl7Ierpeh_4=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/n/I/dsjaVVTQA6jxX1BmKyhg/marcela-bbb-20.jpg',
  'https://s2.glbimg.com/lQuw3ZOLdkqW6AYk3O_KenG9Qe0=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/A/B/zpsh2SRfOO64YaBH1rEQ/mari-gonzalez-bbb-20.jpg',
  'https://s2.glbimg.com/doTuK_hRM2vrDIWLw3Rt-9IzzpA=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/b/b/Bz4fVcQkqiQTTwa7o2Pg/thelma-bbb-20.jpg',
  'https://s2.glbimg.com/lk_TE7d6M_WkUPfdy0-YjAQOL8o=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/3/e/avROHpTLum4wm52wzzUg/petrix-barbosa-bbb-20.jpg',
  'https://s2.glbimg.com/_f9A9SOIOu33WmhcB5zGVGJNEW0=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/x/o/hboowARLe03VtbEbk4FA/victor-hugo-bbb-20.jpg',
  'https://s2.glbimg.com/J_MD4UM8v_LtMZszUAdfkhSIUgA=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/0/J/qH8mDKSIWh8HapSfMhtg/rafa-kalimann-bbb-20.jpg',
  'https://s2.glbimg.com/0R2Ob0Qhei8Zsrw-WH0S_hApj9Y=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/e/Y/RWJm0qRUK7L19kFf2FFA/daniel-casa-de-vidro-bbb20.jpg',
  'https://s2.glbimg.com/9dFgF4PRIMbSfaMHr8T07623f-Y=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/B/h/d3SXgyROOGNWeevimWaQ/ivy-casa-de-vidro-bbb20.jpg'
]

files = []

users.each_with_index { |user, i|
  files.push(URI.open(urls[i]))
  user.avatar.attach(io: files[i], filename: 'avatar.jpg')
  user.save
}

brooch1 = Brooch.create(name: 'I learned', max_amount_per_user: 2)
brooch2 = Brooch.create(name: 'Was awesome', max_amount_per_user: 2)
brooch3 = Brooch.create(name: 'I\'m grateful', max_amount_per_user: 2)

user_brooch1 = UserBrooch.create(user_id: 1, friend_id: 2, brooch_id: 1)
user_brooch2 = UserBrooch.create(user_id: 1, friend_id: 3, brooch_id: 2)
user_brooch3 = UserBrooch.create(user_id: 1, friend_id: 4, brooch_id: 3)
