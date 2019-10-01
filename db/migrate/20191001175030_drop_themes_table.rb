class DropThemesTable < ActiveRecord::Migration[5.1]
  def up
    drop_table :themes
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
