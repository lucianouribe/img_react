class CreateWords < ActiveRecord::Migration[5.1]
  def change
    create_table :words do |t|
      t.string :word_type
      t.string :theme
      t.string :subtheme
      t.string :noun
      t.string :article
      t.string :plural
      t.string :ch
      t.integer :level

      t.timestamps
    end
  end
end
