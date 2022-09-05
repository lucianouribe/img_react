class DropBookTagsTable < ActiveRecord::Migration[5.1]
  def up
    drop_table :book_tags
  end
end
