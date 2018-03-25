require 'pry'
# binding.pry
json.extract! @api_paso, :proyecto_id, :id, :step, :orden, :estilo, :procom_link, :video_link, :image_link
json.url api_paso_url(@api_paso, format: :json)

# json.pasos proyecto.pasos do |paso|
#   json.id paso.id
#   json.step paso.step
#   json.orden paso.orden
#   json.estilo paso.estilo
#   # binding.pry
#   json.procoms paso.procoms #do |procom|
#     # binding.pry
#     json.id procom.id
#     json.pro_content procom.pro_content
#     json.pro_style procom.pro_style
#     json.pro_order procom.pro_order
#     json.type_of_issue procom.type_of_issue
#   end
# end
