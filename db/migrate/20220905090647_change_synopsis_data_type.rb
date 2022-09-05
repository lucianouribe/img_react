class ChangeSynopsisDataType < ActiveRecord::Migration[5.1]
  def change
    change_column :books, :synopsis, :text
  end
end
