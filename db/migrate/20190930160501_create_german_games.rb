class CreateGermanGames < ActiveRecord::Migration[5.1]
  def change
    create_table :german_games do |t|
      t.integer :lifes
      t.integer :punctuation
      t.integer :punctuation_4_total
      t.integer :level
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
