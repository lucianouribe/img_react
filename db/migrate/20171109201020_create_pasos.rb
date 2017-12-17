class CreatePasos < ActiveRecord::Migration[5.0]
  def change
    create_table :pasos do |t|
      t.text :step
      t.integer :orden
      t.string :estilo
      t.string :tuto_link
      t.string :video_link
      t.string :image_link
      t.belongs_to :proyecto, foreign_key: true

      t.timestamps
    end
  end
end
