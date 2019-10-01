class AddThemesToGermanGames < ActiveRecord::Migration[5.1]
  def change
    add_column :german_games, :themes, :string
  end
end
