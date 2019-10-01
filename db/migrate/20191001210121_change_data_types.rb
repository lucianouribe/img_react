class ChangeDataTypes < ActiveRecord::Migration[5.1]
  def change
    change_column :verbs, :praesens, :text
    change_column :verbs, :praeteritum, :text
    change_column :verbs, :futur_i, :text
    change_column :verbs, :perfekt, :text
    change_column :verbs, :plusquamperfekt, :text
    change_column :verbs, :futur_ii, :text
  end
end
