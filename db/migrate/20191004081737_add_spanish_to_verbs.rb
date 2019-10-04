class AddSpanishToVerbs < ActiveRecord::Migration[5.1]
  def change
    add_column :verbs, :spanish, :string
  end
end
