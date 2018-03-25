json.extract! @api_proyecto, :id, :name, :topic, :subtopic, :difficulty, :orden

json.pasos @api_proyecto.pasos do |paso|
  json.(paso, :id, :step, :orden, :estilo, :procom_link, :video_link, :image_link)

  json.procoms paso.procoms do |procom|
    json.(procom, :id, :pro_content, :pro_style, :pro_order, :type_of_issue)
  end

end
json.url api_proyecto_url(@api_proyecto, format: :json)
