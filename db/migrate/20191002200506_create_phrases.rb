class CreatePhrases < ActiveRecord::Migration[5.1]
  def change
    create_table :phrases do |t|
      t.string :phrase_type
      t.string :theme
      t.string :subtheme
      t.text :phrase_praesens
      t.text :phrase_praeteritum
      t.text :phrase_futur_i
      t.text :phrase_perfekt
      t.text :phrase_plusquamperfekt
      t.text :phrase_futur_ii
      t.string :phrase_ch
      t.string :phrase_verb
      t.integer :level

      t.timestamps
    end
  end
end
