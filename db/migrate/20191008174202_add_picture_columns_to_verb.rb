class AddPictureColumnsToVerb < ActiveRecord::Migration[5.1]
  def up
    add_attachment :verbs, :picture
  end

  def down
    remove_attachment :verbs, :picture
  end
end
