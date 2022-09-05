class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :name
      t.string :author
      t.string :language
      t.string :pages
      t.string :book_date
      t.string :score
      t.string :mood
      t.string :summary

      t.timestamps
    end
  end
end
