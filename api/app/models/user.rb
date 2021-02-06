class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar
  has_many :user_brooches
  has_many :brooches, through: :user_brooches
end
