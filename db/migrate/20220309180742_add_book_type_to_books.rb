class AddBookTypeToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :book_type, :string
  end
end
