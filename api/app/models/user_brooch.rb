class UserBrooch < ApplicationRecord
  belongs_to :self_user, class_name: 'User', foreign_key: 'user_id'
  belongs_to :friend_user, class_name: 'User', foreign_key: 'friend_id'
  belongs_to :brooch
end
