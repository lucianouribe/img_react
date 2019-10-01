class CreateVerbs < ActiveRecord::Migration[5.1]
  def change
    create_table :verbs do |t|
      t.string :verb_type
      t.string :theme
      t.string :subtheme
      t.string :infinitive
      t.string :praesens
      t.string :praeteritum
      t.string :futur_i
      t.string :perfekt
      t.string :plusquamperfekt
      t.string :futur_ii
      t.string :ch
      t.string :level
      t.string :picture

      t.timestamps
    end
  end
end
