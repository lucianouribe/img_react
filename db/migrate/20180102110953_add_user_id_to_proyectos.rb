class AddUserIdToProyectos < ActiveRecord::Migration[5.0]
  def change
    add_column :proyectos, :user_id, :string
  end
end
