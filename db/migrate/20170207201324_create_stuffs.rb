class CreateStuffs < ActiveRecord::Migration[5.0]
  def change
    create_table :stuffs do |t|
      t.string :name
      t.integer :amount

      t.timestamps
    end
  end
end
