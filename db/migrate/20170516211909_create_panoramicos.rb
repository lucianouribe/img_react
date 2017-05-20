class CreatePanoramicos < ActiveRecord::Migration[5.0]
  def change
    create_table :panoramicos do |t|

      t.timestamps
    end
  end
end
