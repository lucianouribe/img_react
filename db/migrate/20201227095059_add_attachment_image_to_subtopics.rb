class AddAttachmentImageToSubtopics < ActiveRecord::Migration[5.1]
  def self.up
    change_table :subtopics do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :subtopics, :image
  end
end
