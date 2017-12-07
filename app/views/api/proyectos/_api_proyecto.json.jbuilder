json.extract! api_proyecto, :id, :name, :topic, :subtopic, :difficulty, :order, :pasos 
json.url api_proyecto_url(api_proyecto, format: :json)
