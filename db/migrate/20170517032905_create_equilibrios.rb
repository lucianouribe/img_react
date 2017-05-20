class CreateEquilibrios < ActiveRecord::Migration[5.0]
  def change
    create_table :equilibrios do |t|
      t.string :gasto
      t.string :item
      t.string :unidad
      t.string :valor

      t.timestamps
    end
  end
end
