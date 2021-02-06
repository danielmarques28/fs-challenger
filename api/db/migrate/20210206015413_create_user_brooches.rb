class CreateUserBrooches < ActiveRecord::Migration[6.1]
  def change
    create_table :user_brooches do |t|
      t.integer :friend_id, null: false, index: true

      t.timestamps
    end
  end
end
