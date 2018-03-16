require 'csv'

task export_proyectos: [:environment] do
  CSV.open("db/proyectos.csv","w") do |csv|
    Proyecto.all.each_with_index do |column,index|
      csv << [column.id, column.name, column.topic, column.subtopic, column.difficulty, column.order, column.user_id, column.created_at, column.updated_at]
    end
  end
end

task export_pasos: [:environment] do
  CSV.open("db/pasos.csv","w") do |csv|
    Paso.all.each_with_index do |column,index|
      csv << [column.id, column.name, column.topic, column.subtopic, column.difficulty, column.order, column.user_id, column.created_at, column.updated_at]
    end
  end
end

task export_procoms: [:environment] do
  CSV.open("db/proyectos.csv","w") do |csv|
    Proyecto.all.each_with_index do |column,index|
      csv << [column.id, column.name, column.topic, column.subtopic, column.difficulty, column.order, column.user_id, column.created_at, column.updated_at]
    end
  end
end
