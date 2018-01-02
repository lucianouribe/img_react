class AddAttachmentPictureToPasos < ActiveRecord::Migration[5.0]
  def self.up
    change_table :pasos do |t|
      t.attachment :picture
    end
  end

  def self.down
    remove_attachment :pasos, :picture
  end
end
