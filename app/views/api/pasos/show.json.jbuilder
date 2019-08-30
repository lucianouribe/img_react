json.extract! @api_paso, :id, :step, :orden, :estilo, :procom_link, :video_link, :image_link

json.procoms @api_paso.procoms do |procom|
  json.(procom, :id, :pro_content, :pro_style, :pro_order, :type_of_issue)
end
