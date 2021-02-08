class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
      record.errors.add attribute, (options[:message] || 'is not an email')
    end
  end
end

class User < ApplicationRecord
  has_secure_password
  validates :name, :email, :password, presence: true
  validates :email, uniqueness: true, email: true
  validates :password, length: { in: 6..20 }
  validates :name, length: { in: 3..30 }

  has_one_attached :avatar
  has_many :user_brooches
  has_many :brooches, through: :user_brooches
end
