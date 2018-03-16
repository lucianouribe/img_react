class CreatePasos < ActiveRecord::Migration[5.0]
  def change
    create_table :pasos do |t|
      t.text :step
      t.integer :orden
      t.string :estilo
      t.string :tuto_link
      t.string :video_link
      t.string :image_link
      t.string :picture_file_name
      t.string :picture_content_type
      t.integer :picture_file_size
      t.datetime :picture_updated_at
      t.belongs_to :proyecto, foreign_key: true

      t.timestamps
    end
  end
end
