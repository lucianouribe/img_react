class AddCampoToDescripcions < ActiveRecord::Migration[5.0]
  def change
    add_column :descripcions, :campo, :string
  end
end
