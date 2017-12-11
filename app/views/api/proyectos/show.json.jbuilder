require 'pry'
json.array! @api_proyectos do |proyecto|
  # binding.pry
  json.id proyecto.id
  json.name proyecto.name
  json.topic proyecto.topic
  json.subtopic proyecto.subtopic
  json.difficulty proyecto.difficulty
  json.order proyecto.order
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
  # binding.pry
  json.url api_proyecto_url(proyecto, format: :json)
end
