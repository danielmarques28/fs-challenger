# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: 'Daniel', email: 'daniel@gmail.com', password: '123456')
user2 = User.create(name: 'Joao', email: 'joao@gmail.com', password: '123456')
user3 = User.create(name: 'Mateus', email: 'mateus@gmail.com', password: '123456')
user4 = User.create(name: 'Ana', email: 'ana@gmail.com', password: '123456')

brooch1 = Brooch.create(name: 'I learned', max_amount_per_user: 2)
brooch2 = Brooch.create(name: 'Was awesome', max_amount_per_user: 2)
brooch3 = Brooch.create(name: 'I\'m grateful', max_amount_per_user: 2)

user_brooch1 = UserBrooch.create(user_id: 1, friend_id: 2, brooch_id: 1)
user_brooch2 = UserBrooch.create(user_id: 1, friend_id: 3, brooch_id: 2)
user_brooch3 = UserBrooch.create(user_id: 1, friend_id: 4, brooch_id: 3)
