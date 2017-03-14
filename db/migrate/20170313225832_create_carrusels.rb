class CreateCarrusels < ActiveRecord::Migration[5.0]
  def change
    create_table :carrusels do |t|
      t.string :name, null: false
      t.string :image, null: false
      t.string :infopic
      t.string :role, null: false

      t.timestamps
    end
  end
end
