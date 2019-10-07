class AddPictureColumnsToWord < ActiveRecord::Migration[5.1]
  def up
    add_attachment :words, :picture
  end

  def down
    remove_attachment :words, :picture
  end
end
