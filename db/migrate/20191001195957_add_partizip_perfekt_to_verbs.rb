class AddPartizipPerfektToVerbs < ActiveRecord::Migration[5.1]
  def change
    add_column :verbs, :partizip_perfekt, :string
  end
end
