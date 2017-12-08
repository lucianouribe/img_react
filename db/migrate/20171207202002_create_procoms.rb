class CreateProcoms < ActiveRecord::Migration[5.0]
  def change
    create_table :procoms do |t|
      t.text :pro_content
      t.string :pro_style
      t.integer :pro_order
      t.boolean :type_of_issue
      t.belongs_to :paso, foreign_key: true

      t.timestamps
    end
  end
end
