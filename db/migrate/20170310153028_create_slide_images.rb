class CreateSlideImages < ActiveRecord::Migration[5.0]
  def change
    create_table :slide_images do |t|
      t.string :name, null: false
      t.string :image, null: false
      t.string :commentsPerPic
      t.string :role, null: false
      t.string :logo1

      t.timestamps
    end
  end
end
