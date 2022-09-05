class CreateBookTags < ActiveRecord::Migration[5.1]
  def change
    create_table :book_tags do |t|
      t.string :name

      t.timestamps
    end
  end
end
