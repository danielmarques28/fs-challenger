class UserBroochValidator < ActiveModel::Validator
  def validate(record)
    if record.user_id == record.friend_id
      record.errors.add :base, 'You can\'t give yourself a brooch'
    end
    brooch = Brooch.find_by_id(record.brooch_id)
    if not brooch.nil?
      userbrooches = UserBrooch.where(
        user_id: record.user_id, brooch_id: record.brooch_id
      )
      amount = brooch.max_amount_per_user
      if userbrooches.length >= amount
        record.errors.add :base, "Can\'t give more than #{amount} of this brooch"
      end
    end
  end
end

class UserBrooch < ApplicationRecord
  validates_with UserBroochValidator
  validates :user_id, uniqueness: { scope: :friend_id }
  belongs_to :self_user, class_name: 'User', foreign_key: 'user_id'
  belongs_to :friend_user, class_name: 'User', foreign_key: 'friend_id'
  belongs_to :brooch
end
