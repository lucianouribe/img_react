class FixColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :subthemes, :hearts, :best_spree
    rename_column :subthemes, :points, :coins
    rename_column :subthemes, :level, :games_lost
  end
end
