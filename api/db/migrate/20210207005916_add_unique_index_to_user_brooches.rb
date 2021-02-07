class AddUniqueIndexToUserBrooches < ActiveRecord::Migration[6.1]
  def change
    add_index :user_brooches, [:user_id, :friend_id], unique: true
  end
end
