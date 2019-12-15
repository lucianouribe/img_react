class DeleteColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :german_games, :themes
  end
end
