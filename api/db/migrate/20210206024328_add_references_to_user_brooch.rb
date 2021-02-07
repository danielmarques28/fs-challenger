class AddReferencesToUserBrooch < ActiveRecord::Migration[6.1]
  def change
    add_reference :user_brooches, :user, null: false, column: :user_id, foreign_key: true
    add_reference :user_brooches, :brooch, null: false, foreign_key: true
    add_foreign_key :user_brooches, :users, null:false, column: :friend_id
  end
end
