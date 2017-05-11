class CreateMorses < ActiveRecord::Migration[5.0]
  def change
    create_table :morses do |t|
      t.string :inphrase
      t.string :outphrase
      t.string :lang_first
      t.string :lang_second

      t.timestamps
    end
  end
end
