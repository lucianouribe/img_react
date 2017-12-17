require 'pry'
# binding.pry
json.extract! @api_paso, :proyecto_id, :id, :step, :orden, :estilo, :tuto_link, :video_link, :image_link
json.url api_paso_url(@api_paso, format: :json)
