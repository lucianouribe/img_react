class CreateThemes < ActiveRecord::Migration[5.1]
  def change
    create_table :themes do |t|
      t.string :theme_name
      t.integer :hearts
      t.integer :points
      t.integer :status
      t.integer :level
      t.string :subtheme
      t.belongs_to :german_game, foreign_key: true

      t.timestamps
    end
  end
end
