class CreateSubthemes < ActiveRecord::Migration[5.1]
  def change
    create_table :subthemes do |t|
      t.string :name
      t.string :theme
      t.integer :hearts
      t.integer :points
      t.string :status
      t.integer :level
      t.belongs_to :german_game, foreign_key: true

      t.timestamps
    end
  end
end
