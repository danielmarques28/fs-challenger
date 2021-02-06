class Brooch < ApplicationRecord
  has_many :user_brooches
  has_many :users, through: :user_brooches, source: 'self_user'
end
