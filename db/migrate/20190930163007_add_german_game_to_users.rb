class AddGermanGameToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :german_game, :integer
  end
end
