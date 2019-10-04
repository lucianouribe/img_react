class AddSpanishToPhrases < ActiveRecord::Migration[5.1]
  def change
    add_column :phrases, :spanish, :string
    add_column :phrases, :example, :string
  end
end
