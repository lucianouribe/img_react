class CreateDescripcions < ActiveRecord::Migration[5.0]
  def change
    create_table :descripcions do |t|
      t.string :campo
      t.string :titulo
      t.text :contenido
      t.string :lenguaje

      t.timestamps
    end
  end
end
