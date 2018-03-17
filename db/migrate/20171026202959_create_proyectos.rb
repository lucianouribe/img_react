class CreateProyectos < ActiveRecord::Migration[5.0]
  def change
    create_table :proyectos do |t|
      t.string :name
      t.string :topic
      t.string :subtopic
      t.string :difficulty
      t.integer :orden
      t.integer :user_id

      t.timestamps
    end
  end
end
