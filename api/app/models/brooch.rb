class Brooch < ApplicationRecord
  validates :name, :max_amount_per_user, presence: true
  validates :name, length: { in: 5..20 }
  validates :max_amount_per_user, numericality: { only_integer: true, greater_than: 0 }

  has_many :user_brooches
  has_many :users, through: :user_brooches, source: 'self_user'
end
