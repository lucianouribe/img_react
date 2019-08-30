json.extract! @api_procom, :paso_id, :id, :pro_content, :pro_style, :pro_order, :type_of_issue
json.url api_paso_url(@api_procom, format: :json)
