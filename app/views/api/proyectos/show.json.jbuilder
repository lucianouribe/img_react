require 'pry'
# binding.pry
json.extract! @api_proyecto, :id, :name, :topic, :subtopic, :difficulty, :order
json.url api_proyecto_url(@api_proyecto, format: :json)

# json.array! @api_proyectos do |proyecto|
#   json.id proyecto.id
#   json.name proyecto.name
#   json.topic proyecto.topic
#   json.subtopic proyecto.subtopic
#   json.difficulty proyecto.difficulty
#   json.order proyecto.order
#     # binding.pry
#   json.pasos proyecto.pasos do |paso|
#     json.id paso.id
#     json.step paso.step
#     json.orden paso.orden
#     json.estilo paso.estilo
#     # binding.pry
#     json.procoms paso.procoms do |procom|
#       # binding.pry
#       json.id procom.id
#       json.pro_content procom.pro_content
#       json.pro_style procom.pro_style
#       json.pro_order procom.pro_order
#       json.type_of_issue procom.type_of_issue
#     end
#   end
#   json.url api_proyecto_url(proyecto, format: :json)
# end
