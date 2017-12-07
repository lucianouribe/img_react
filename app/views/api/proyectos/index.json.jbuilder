# json.array! @api_proyectos, partial: 'api/proyectos/api_proyecto', as: :api_proyecto
json.array! @api_proyectos do |proyecto|
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

# json.people(@people) do |person|
#   json.name person.name
#   json.age calculate_age(person.birthday)
# end

# json.array! @api_proyectos, api_proyecto, :id, :name, :topic, :subtopic, :difficulty, :pasos => :id, :step

# json.extract! api_proyecto, :id, :name, :topic, :subtopic, :difficulty
# json.url api_proyecto_url(api_proyecto, format: :json)
