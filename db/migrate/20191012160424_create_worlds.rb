class CreateWorlds < ActiveRecord::Migration[5.1]
  def change
    create_table :worlds do |t|
      t.string :name
      t.integer :level
      t.integer :points
      t.string :status

      t.timestamps
    end
  end
end
