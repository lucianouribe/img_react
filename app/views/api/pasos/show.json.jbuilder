require 'pry'
# binding.pry
# 5
# proyecto_id = '1'
# json.partial! `api/pasos/api_paso`, api_paso: @api_paso
json.array! @api_proyectos do |proyecto|
  # binding.pry
  json.id proyecto.id
  json.name proyecto.name
  json.topic proyecto.topic
  json.subtopic proyecto.subtopic
  json.difficulty proyecto.difficulty

  json.pasos proyecto.pasos do |paso|
    json.id paso.id
    json.step paso.step
    json.orden paso.orden
    json.estilo paso.estilo
  end

end
