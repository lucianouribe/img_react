class AddAttachmentImageToSubthemes < ActiveRecord::Migration[5.1]
  def self.up
    change_table :subthemes do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :subthemes, :image
  end
end
