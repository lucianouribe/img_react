class CreateSubtopics < ActiveRecord::Migration[5.1]
  def change
    create_table :subtopics do |t|
      t.string :name
      t.belongs_to :topic, foreign_key: true

      t.timestamps
    end
  end
end
