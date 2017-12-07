class CreatePasos < ActiveRecord::Migration[5.0]
  def change
    create_table :pasos do |t|
      t.text :step
      t.integer :orden
      t.string :estilo
      t.belongs_to :proyecto, foreign_key: true

      t.timestamps
    end
  end
end
