# json.partial! "api/proyectos/api_proyecto", api_proyecto: @api_proyecto
require 'pry'
json.array! @api_proyectos do |proyecto|
  json.id proyecto.id
  json.name proyecto.name
  json.topic proyecto.topic
  json.subtopic proyecto.subtopic
  json.difficulty proyecto.difficulty

  json.pasos proyecto.pasos do |paso|
    # binding.pry
    json.id paso.id
    json.step paso.step
    json.orden paso.orden
    json.estilo paso.estilo
    json.procoms paso.procoms do |procom|
      json.id procom.id
      json.content procom.pro_content
      json.style procom.pro_style
      json.order procom.pro_order
      json.type_of_issue procom.type_of_issue
    end
  end

end
