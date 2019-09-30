class CreateGermanGames < ActiveRecord::Migration[5.1]
  def change
    create_table :german_games do |t|
      t.integer :lifes, default: 3
      t.integer :punctuation, default: 0
      t.integer :punctuation_4_total, default: 0
      t.integer :level, default: 1
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
