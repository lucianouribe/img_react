class CreateCarrusels < ActiveRecord::Migration[5.0]
  def change
    create_table :carrusels do |t|
      t.string :name, null: false
      t.string :image, null: false
      t.string :infopic
      t.string :role, null: false
      t.string :picture_file_name
      t.string :picture_content_type
      t.integer :picture_file_size
      t.datetime :picture_updated_at

      t.timestamps
    end
  end
end
