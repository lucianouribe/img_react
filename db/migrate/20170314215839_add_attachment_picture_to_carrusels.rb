class AddAttachmentPictureToCarrusels < ActiveRecord::Migration
  def self.up
    change_table :carrusels do |t|
      t.attachment :picture
    end
  end

  def self.down
    remove_attachment :carrusels, :picture
  end
end
