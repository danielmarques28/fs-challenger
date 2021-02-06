class CreateBrooches < ActiveRecord::Migration[6.1]
  def change
    create_table :brooches do |t|
      t.string :name, null: false
      t.integer :max_amount_per_user, null: false

      t.timestamps
    end
  end
end
